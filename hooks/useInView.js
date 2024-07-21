// hooks/useInView.js
import { useInView as useFramerInView } from 'framer-motion';
import { useRef } from 'react';

export function useInView(options = {}) {
    const ref = useRef(null);
    const inView = useFramerInView(ref, {
        triggerOnce: true,
        threshold: 0.1,
        ...options,
    });

    return [ref, inView];
}