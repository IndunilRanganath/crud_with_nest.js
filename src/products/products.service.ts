import { Product } from './product.module';
import { Injectable } from "@nestjs/common";

@Injectable()
    export class ProductService{
        products : Product [] = [];

        insertProduct(title: string, desc: string, price: number ){
            const newProduct = new Product(new Date().toString(), title, desc, price)
            this.products.push(newProduct);
        }

    }
