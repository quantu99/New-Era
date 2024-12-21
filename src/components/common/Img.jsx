'use client';

import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { useState } from 'react';

const imageLoader = ({ src, width }) => {
    if (width) {
        return src + '?w=' + width;
    }

    return src;
};

export function Img({
    src,
    alt = '',
    width = 0,
    height = 0,
    className = '',
    priority = true,
    fit = 'contain',
    showLoading = true,
}) {
    const [loading, setLoading] = useState(true);
    const handleLoadingComplete = () => {
        setLoading(false);
    };

    return (
        <>
            {loading && showLoading && (
                <Skeleton width={width} height={height} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            )}

            <Image
                src={src}
                width={width}
                height={height}
                alt={alt}
                className={className}
                priority={priority}
                style={{ objectFit: fit, display: loading ? 'none' : '' }}
                loader={imageLoader}
                onLoadingComplete={handleLoadingComplete}
            />
        </>
    );
}
