import { ProductService } from './products.service';
import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";

@Controller('products')
export class ProductController{
    constructor(private readonly productService: ProductService){}

    @Post()
    addProduct(
        @Body('title') prodTitle : string,
        @Body('description') prodDesc : string,
        @Body('price') prodPrice : number,
        ){
            const generatedId = this.productService.insertProduct(
                prodTitle,
                prodDesc,
                prodPrice
            );
            return { id : generatedId };
        }

    @Get()
    getAllProducts(){
        return this.productService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId : string){
        return this.productService.getSingelProduct(prodId);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ){
        this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string){
        this.productService.removeProduct(prodId);
        return null;
    }

}
