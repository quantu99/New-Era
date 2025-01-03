'use client';
import bg1 from '@/assets/images/fashion.jpg';
import bg2 from '@/assets/images/fashion1.jpg';
import { ProductsApi } from '@/services/products';
import { useEffect, useState } from 'react';
export function ProductsSection() {
    const [prod, setProd] = useState([]);
    const [prod2, setProd2] = useState([]);
    useEffect(() => {
        const productsFetching = async () => {
            const params = {
                limit: 10,
            };
            try {
                const res = await ProductsApi.getAll(params);
                setProd(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        productsFetching();
    }, []);
    console.log(prod);
    const PRODUCT_ARR = [
        {
            background: bg1,
            thump: 'Be Unique',
            description: 'Show boldy personality via noble & elegant styles',
        },
        {
            background: bg2,
            thump: 'Suit up',
            description: "Step confidently into Today with a Smart Pair of Men's Era",
        },
    ];
    return;
}
