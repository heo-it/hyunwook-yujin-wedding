export declare global {
  interface Window {
    showTooltip: (tooltipElement: HTMLElement | null) => void;
    hideTooltip: (tooltipElement: HTMLElement | null) => void;
  }
}
