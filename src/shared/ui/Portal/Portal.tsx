import {
    ReactNode, useEffect, useRef, useState,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    // return createPortal(children, element);
    const ref = useRef<HTMLBodyElement>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        console.log('Portal отработал', document.querySelector('#app'));
        ref.current = document.querySelector('body') || undefined;
        setMounted(true);
    }, []);

    return mounted && ref.current ? createPortal(children, ref.current) : null;
};
