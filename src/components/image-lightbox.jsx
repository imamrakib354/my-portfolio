"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import { ArrowIcon, CloseIcon } from "./icons";

export default function ImageLightbox({ images, index, open, onClose, onNavigate }) {
  const dialog = useRef(null);
  const viewport = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const [loadedSrc, setLoadedSrc] = useState(null);
  const id = useId();
  const image = images[index];

  useEffect(() => {
    const element = dialog.current;
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    viewport.current?.scrollTo({ top: 0, left: 0 });
  }, [index]);

  return (
    <dialog
      ref={dialog}
      className="screenshot-dialog fixed m-auto h-[92dvh] max-h-[1100px] w-[96vw] max-w-[1600px] overflow-hidden rounded-2xl border border-white/20 bg-[#0c1421] p-0 shadow-2xl"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-caption`}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) dialog.current.close(); }}
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          const controls = Array.from(event.currentTarget.querySelectorAll("button:not([disabled]), a[href], [tabindex='0']")).filter((element) => element.getClientRects().length > 0);
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
          return;
        }
        if (event.target === viewport.current) return;
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          onNavigate((index + (event.key === "ArrowRight" ? 1 : -1) + images.length) % images.length);
        }
      }}
    >
      <div className="flex h-full flex-col">
        <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
          <div className="mr-auto">
            <p className="font-mono text-[10px] text-[#9caac2]">{String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</p>
            <h2 id={`${id}-title`} className="font-semibold">{image.title}</h2>
          </div>
          <button type="button" onClick={() => setZoomed(!zoomed)} aria-pressed={zoomed} className="rounded-lg border border-white/20 px-3 py-2 text-xs hover:border-[#c7ff76]">{zoomed ? "Fit width" : "Zoom in"}</button>
          <button type="button" onClick={() => dialog.current.close()} aria-label="Close screenshot viewer" className="rounded-lg border border-white/20 p-2 hover:border-[#c7ff76]"><CloseIcon width={22} height={22} /></button>
        </div>
        <div ref={viewport} tabIndex={0} role="region" aria-label="Scrollable project screenshot" className="screenshot-scroll relative min-h-0 flex-1 overflow-auto bg-[#080d15]">
          {open && loadedSrc !== image.src && <p role="status" className="absolute top-8 left-6 rounded-lg bg-[#101827] px-4 py-3 text-sm text-[#b0bed2]">Loading screenshot…</p>}
          <div className={zoomed ? "min-w-[1600px]" : "w-full"}>
            <Image src={image.src} alt={image.alt} width={image.width || 1600} height={image.height || 1000} loading={open ? "eager" : "lazy"} onLoad={() => setLoadedSrc(image.src)} sizes={zoomed ? "1600px" : "96vw"} className="h-auto w-full" />
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-white/10 px-4 py-4 sm:px-6">
          <button type="button" onClick={() => onNavigate((index - 1 + images.length) % images.length)} aria-label="Previous screenshot" className="shrink-0 rounded-full border border-white/20 p-3 hover:border-[#c7ff76]"><ArrowIcon width={16} height={16} className="rotate-180" /></button>
          <p id={`${id}-caption`} className="flex-1 text-xs leading-5 text-[#b0bed2]" aria-live="polite">{image.caption}</p>
          <button type="button" onClick={() => onNavigate((index + 1) % images.length)} aria-label="Next screenshot" className="shrink-0 rounded-full border border-white/20 p-3 hover:border-[#c7ff76]"><ArrowIcon width={16} height={16} /></button>
        </div>
      </div>
    </dialog>
  );
}
