/**
 * Evaluates the Bootstrap margin class if a label is present
 */
export const useBsIconMargin = (label?: string): string => {
  return label ? 'me-2' : '';
}