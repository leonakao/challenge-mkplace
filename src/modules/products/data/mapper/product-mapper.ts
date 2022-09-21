import Product from '../../entity/product';
import { ProductDocument } from '../models/product-model';

export const productMapper = (productDocument: ProductDocument): Product => ({
  id: productDocument._id,
  name: productDocument.name,
  brand: productDocument.brand,
  price: productDocument.price,
  seller: productDocument.seller,
});

export const productsMapper = (productDocuments: ProductDocument[]): Product[] => productDocuments
  .map(productMapper);
