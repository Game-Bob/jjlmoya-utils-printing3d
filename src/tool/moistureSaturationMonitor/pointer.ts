export const updateCursorHud = (visual: HTMLElement, cursorHud: HTMLElement, event: PointerEvent): void => {
  const bounds = visual.getBoundingClientRect();
  cursorHud.style.left = `${event.clientX - bounds.left + 18}px`;
  cursorHud.style.top = `${event.clientY - bounds.top + 18}px`;
  cursorHud.setAttribute('data-visible', 'true');
};
