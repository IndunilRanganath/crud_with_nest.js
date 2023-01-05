import { ProductController } from './procucts.controller';
import { ProductService } from './products.service';
import { Module } from '@nestjs/common';

@Module({
    controllers : [ProductController],
    providers : [ ProductService]
})

export class ProductModule {}