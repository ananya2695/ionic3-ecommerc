export class HomeModel {
    images: Array<String>;
    popularproducts: Array<ProductItemModel>;
    popularshops: Array<ShopItemModel>;
    lastvisite: Array<LastvisiteItemModel>
    bestseller: Array<BestsellerItemModel>;
  }
  
  export class ProductItemModel {
    name: String;
    image: String;
    unitprice: Number;
  }
  export class ShopItemModel {
    name: String;
    image: String;
  }
  export class LastvisiteItemModel {
    name: String;
    image: String;
    unitprice: Number;
  }
  export class BestsellerItemModel {
    name: String;
    image: String;
  }
  