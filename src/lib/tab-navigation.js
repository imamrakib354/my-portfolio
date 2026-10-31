export function handleTabKeyDown(event, active, count, setActive, prefix) {
  let next = active;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (active + 1) % count;
  else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (active - 1 + count) % count;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = count - 1;
  else return;

  event.preventDefault();
  setActive(next);
  document.getElementById(`${prefix}-${next}`)?.focus();
}
