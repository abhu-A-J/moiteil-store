import type { ProductColor } from './color';
import type { Image } from './image';

export type CartItem = {
	id: string;
	name: string;
	image: Image;
	size: string;
	color: ProductColor;
	price: number;
	quantity?: number;
};

export type RemoveItemFromCart = {
	id: string;
	size: string;
	color: ProductColor;
};

export type AddItemToCart = Omit<CartItem, 'quantity'>;
