'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RouteChangeScroll() {
    const pathname = usePathname();

    useEffect(() => {
        // If there's no hash in the URL, scroll to top on route change
        // Next.js sometimes restores scroll position from history
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}
