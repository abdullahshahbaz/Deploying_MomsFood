class productAddToCartForm{

  constructor(image,price,quantity){
    this.image=image
    this.price=price
    this.quantity=quantity
  }

  get image(){
    return this._image
  }

  get price(){
    return this._price
  }

  get quantity(){
    return this._quantity
  }
}
