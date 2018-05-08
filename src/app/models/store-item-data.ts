export class StoreItemData {
    constructor(public id: number,
        public name: string,
        public price: number,
        public details: string,
        public image: string,
        public onSale: number,
        public isNew: boolean,
        public size: string,
        public color: string,
        public colorRgb: string) { }
}
