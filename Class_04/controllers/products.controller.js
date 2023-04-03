import ProductModel from "../models/products.models.js";

const productModel = new ProductModel();



class ProductController {
    async getAllProducts(req, res){

        try {
            const products = await productModel.getAllProducts();
            res.send(products);
        } catch (error) {
            res.status(404).send({message: error.message});
        };
    };


    async getProductById(req, res){

        const productId = req.params.id;

        try {
            const product = await productModel.getProductById(productId);
            res.send(product);
        } catch (error) {
            res.status(404).send({message: error.message});
        };
    };


    async createProduct(req, res){

        const {name, description, price, reviews} = req.body;

        try {
            const productData = {
                name: name,
                description: description,
                price: price,
                reviews: reviews
            };

            await productModel.createProduct(productData);
            res.status(201).send({message: "The product was successfully created!"});
        } catch (error) {
            res.status(404).send({message: "There was an error in creating the desired product"});
        };
    };


    async updateProduct(req, res){

        const productId = req.params.id;
        const {name, description, price, reviews} = req.body;

        try {
            const productData = {
                name: name,
                description: description,
                price: price,
                reviews: reviews
            };

            await productModel.updateProduct(productId, productData);
            res.status(201).send({message: `The desired product with id: ${productId} was successfully updated!`});
        } catch (error) {
            res.status(404).send({message: "There was an error in updating the product"});
        };
    };
};



export default ProductController;