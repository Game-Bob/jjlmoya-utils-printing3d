import type { CanvasPoint } from './canvas';

export const canvasPointFromPointer = (canvas: HTMLCanvasElement, event: PointerEvent): CanvasPoint => {
  const rect = canvas.getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) * (canvas.width / rect.width),
    y: (event.clientY - rect.top) * (canvas.height / rect.height),
  };
};
