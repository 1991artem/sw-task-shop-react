import { ICart } from './interfaces';
export class CartStorage{
    static cart: ICart[] = [];
    static selectProduct: ICart = {
        id: '',
        count: 1,
        params: new Map()
    };
    static CartStorage: {};
}