export class FavoriteModel {
    title: string;
    items: Array<FavoriteItemModel>;
}
export class FavoriteItemModel {
    name: string;
    detail: string;
    price: string;
    img: string;
}