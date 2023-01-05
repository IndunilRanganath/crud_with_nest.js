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
            const product = this.products.find(prod => prod.id == productId);
            if(!product){
                return new NotFoundException('Could not find product..');
            }
            return { ...product };
        }

    }
