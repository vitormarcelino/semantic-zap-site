declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function pushEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !GTM_ID) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
