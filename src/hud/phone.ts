import { useSyncExternalStore } from 'react';

/** A phone's width (D15's 48rem): the HUD's own layout there (Dima, 20 and 21 Nov). */
export const PHONE = '(max-width: 48rem)';

const onPhoneChange = (fn: () => void) => {
  const query = window.matchMedia(PHONE);
  query.addEventListener('change', fn);
  return () => query.removeEventListener('change', fn);
};
const isPhone = () => window.matchMedia(PHONE).matches;

/** Whether the window is a phone's width now, read as the 2D hall reads reduced motion. */
export function usePhone(): boolean {
  return useSyncExternalStore(onPhoneChange, isPhone);
}
