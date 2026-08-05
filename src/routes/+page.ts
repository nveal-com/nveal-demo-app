import type { PageLoad } from './$types';
import type { Product } from '$lib/stores/cart';

export const load: PageLoad = async ({ fetch }) => {
    // Fetch products and categories in parallel
    const [productsRes, categoriesRes] = await Promise.all([
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20'),
        fetch('https://api.escuelajs.co/api/v1/categories?limit=5')
    ]);
    
    const products = productsRes.ok ? await productsRes.json() : [];
    const categories = categoriesRes.ok ? await categoriesRes.json() : [];
    
    return {
        products,
        categories
    };
};
