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
    
    const res = await fetch(`https://fakestoreapi.com/products`);
    
    if (!res.ok) {
        return {
            products: [],
            q
        };
    }
    
    const allProducts: Product[] = await res.json();
    const products = allProducts.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));
    return {
        products,
        q
    };
};
