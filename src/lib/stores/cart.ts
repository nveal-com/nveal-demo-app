import { writable } from 'svelte/store';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        name: string;
        image: string;
    };
    images: string[];
}

export interface CartItem extends Product {
    quantity: number;
}

function createCart() {
    const { subscribe, set, update } = writable<CartItem[]>([]);

    return {
        subscribe,
        add: (product: Product) => update(items => {
            const existing = items.find(item => item.id === product.id);
            if (existing) {
                return items.map(item => 
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...items, { ...product, quantity: 1 }];
        }),
        remove: (productId: number) => update(items => 
            items.filter(item => item.id !== productId)
        ),
        updateQuantity: (productId: number, quantity: number) => update(items => {
            if (quantity <= 0) return items.filter(item => item.id !== productId);
            return items.map(item =>
                item.id === productId ? { ...item, quantity } : item
            );
        }),
        clear: () => set([])
    };
}

export const cart = createCart();
