import mongoose from "mongoose";

import productSchema from "../mongo_schemas/products.schema.js";


class ProductModel {
    product_model;

    constructor(){
        this.product_model = mongoose.model("products", productSchema);
    };


    async getAllProducts(){
        const products = await this.product_model.find();

        return products;
    };

    
    async getProductById(productId){
        const product = await this.product_model.findById(productId);

        return product;
    };

    
    async createProduct(productData){
        const product = await this.product_model(productData);

        await product.save();
    };


    async updateProduct(productId, productData){
        const product = await this.product_model.findById(productId);

        if(!product){
            throw new Error(`The desired product with id: ${productId} does not exist.`);
        };

        await this.product_model.updateOne({_id: productId}, {
            name: productData.name || product.name,
            description: productData.description || product.description,
            price: productData.price || product.price,
            reviews: productData.reviews || product.reviews
        });
    }
};


export default ProductModel;