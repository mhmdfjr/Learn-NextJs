import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        excerpt: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        tags: { type: [String], required: true },
        thumbnail: { type: String, required: true },
        images: { type: [String], required: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
)

const Product = models.Product || model("Product", ProductSchema);

export default Product;
