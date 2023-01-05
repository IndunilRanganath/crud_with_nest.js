import { Product } from './product.module';
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
    export class ProductService{
        private products : Product [] = [];

        insertProduct(title: string, desc: string, price: number ){
            const prodId = Math.random().toFixed(3);
            const newProduct = new Product(prodId, title, desc, price)
            this.products.push(newProduct);
        }

        getProducts(){
            return[...this.products];
        }

        getSingelProduct(productId: string ){
            const product  = this.findProduct(productId)[0];
            return { ...product };
        }

        updateProduct(productId: string, title:string, desc: string, price: number){
            const [product , index] = this.findProduct(productId);
            const updateProduct = { ...product };
            if(title){
                updateProduct.title = title;
            }
            if(desc){
                updateProduct.description = desc;
            }
            if(price){
               updateProduct.price = price;
            }
            this.products[index] = updateProduct;
        }

        private findProduct(id: string): [Product, number]{
            const productIndex = this.products.findIndex(prod => prod.id === id)
            const product = this.products[productIndex];
            if(!product){
                throw new NotFoundException('Could not find product..');
            }
            return [product, productIndex]
        }

    }
