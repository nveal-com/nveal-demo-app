import type { PageLoad } from './$types';
import type { Product } from '$lib/stores/cart';

export const load: PageLoad = async ({ url, fetch }) => {
    const q = url.searchParams.get('q') || '';
    
    if (!q.trim()) {
        return {
            products: [],
            q
        };
    }
    
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${encodeURIComponent(q)}`);
    
    if (!res.ok) {
        return {
            products: [],
            q
        };
    }
    
    const products: Product[] = await res.json();
    return {
        products,
        q
    };
};
