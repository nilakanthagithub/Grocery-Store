import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public db: AngularFirestore) { }

  detailById(value){
    return this.db.collection('product',ref => ref.where('id', '==', value)).snapshotChanges()
  }

  // searchUser(value){
  //   return this.db.collection('user',ref => ref.where('username', '==', value)).snapshotChanges()
  // }

  searchProduct(value){
    return this.db.collection('product', ref => 
      ref
        .orderBy('name')
        .limit(5)
        .startAt(value)
        .endAt(value + '\uf8ff')
    ).snapshotChanges()
  }

  searchByFieldName(field, value){
    return this.db.collection('product',ref => ref.where(field, '==', value)).snapshotChanges()
  }

  searchByTwoFieldName(field1, value1, field2, value2){
    return this.db.collection('product',ref => ref.where(field1, '==', value1).where(field2, '==', value2)).snapshotChanges()
  }

  getCartItems(){
    return this.db.collection('cart').snapshotChanges();
  }

  addToCart(item){
    const subscription = this.db.collection('cart',ref => ref.where('id', '==', item.id)).snapshotChanges().subscribe(result => {
      subscription.unsubscribe();
      if(result.length == 0){
        this.addCartItem(item);
      }
      else {
        this.updateCart(result[0].payload.doc.id, result[0].payload.doc.data(), item);
      }
    });
  }

  addCartItem(item){
    this.db.collection('cart').add({
      id: item.id,
      name: item.name,
      qty: 1,
      discount: this.subtractFloat(item.price, item.discPrice),
      discPrice: parseFloat(item.discPrice).toFixed(2)
    });
  }

  updateCart(docId, oldItem, item){
    
    this.db.collection('cart').doc(docId).update({
      qty: parseInt(oldItem.qty) + 1,
      discount: this.addFloat(oldItem.discount, this.subtractFloat(item.price, item.discPrice)),
      discPrice: this.addFloat(oldItem.discPrice, item.discPrice)
    });
  }

  deleteCartItem(docId){
    this.db.collection('cart').doc(docId).delete();
  }

  updateCartItem(item, qty){
    this.db.collection('cart').doc(item.id).update({
      qty: qty,
      discount: (((item.data().discount * 100) * qty / item.data().qty) / 100).toFixed(2),
      discPrice: (((item.data().discPrice * 100) * qty / item.data().qty) / 100).toFixed(2)
    });
  }

  // addUser(item){
  //   this.db.collection('user').add({
  //     username: item.username,
  //     email: item.email,
  //     password: item.password,
  //     phone: item.phone
  //   });
  // }

  addMail(item){
    this.db.collection('mail').add({
      name: item.name,
      phone: item.phone,
      email: item.email,
      subject: item.subject,
      message: item.message
    });
  }

  addFloat(value1, value2){
    return (((value1 * 100) + (value2 * 100)) / 100).toFixed(2);
  }

  subtractFloat(value1, value2){
    return (((value1 * 100) - (value2 * 100)) / 100).toFixed(2);
  }
}
