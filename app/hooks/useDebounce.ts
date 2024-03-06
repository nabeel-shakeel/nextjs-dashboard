import { useEffect } from 'react';

export function useDebounce(callback: any, delay: number) {
    let timerId: any = null;
    return function (...args: any[]) {
      clearTimeout(timerId);
      timerId = setTimeout(() => callback(...args), delay);
    };
}
