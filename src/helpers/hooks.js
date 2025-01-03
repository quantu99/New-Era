'use client';

import { DEVICE_SIZE } from '@/constants';
import { useEffect, useState } from 'react';

export function useDetectDevice() {
    const [width, setWidth] = useState(null);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        width,
        isMobile: width < DEVICE_SIZE.LAPTOP.SIZE,
    };
}
export function useFetch(api, initialPayload = null, auth = true) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const [paginate, setPaginate] = useState();
    const [payload, setPayload] = useState(initialPayload);

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            let res;
            if (auth) {
                res = await api(payload);
            } else {
                res = await api(payload);
            }

            setIsLoading(false);
            setData(res.data);
            setPaginate(res?.meta?.pagination);
        } catch {
            setIsLoading(false);
        }
    }, [api, payload]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const refetch = useCallback(() => {
        fetchData();
    }, [fetchData]);

    return {
        isLoading,
        data,
        paginate,
        refetch,
        setPayload,
    };
}
