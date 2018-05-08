import { StoreItemData } from './store-item-data';

export class ShoppingCartItem {
    constructor(public item: StoreItemData, public count: number) { }
}

export class ShoppingCartData {
    constructor(public itemsCount: number, public sum: number) { }
} 
