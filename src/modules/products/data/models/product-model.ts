import {
  Schema, model, Document, PaginateModel,
} from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import Product from '../../entity/product';

export interface ProductDocument extends Document {
  name: Product['name'],
  brand: Product['brand'],
  price: Product['price'],
  seller: Product['seller'],
}

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    brand: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

ProductSchema.plugin(paginate);

export default model<ProductDocument, PaginateModel<ProductDocument>>('Product', ProductSchema, 'products');
