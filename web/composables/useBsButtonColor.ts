/**
 * Evaluates the Bootstrap button color class given a color name
 */
export const useBsButtonColor = (color?: string): string => {
  return `btn-${color}`;
}