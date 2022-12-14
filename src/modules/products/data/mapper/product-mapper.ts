import Product from '../../entity/product';
import { ProductDocument } from '../models/product-model';

export default (productDocument: ProductDocument): Product => ({
  id: productDocument._id,
  name: productDocument.name,
  slug: productDocument.slug,
  brand: productDocument.brand,
  price: productDocument.price,
  seller: productDocument.seller,
});
