/* eslint-disable no-undef */
import { Product, ProductStore } from '../../src/models/product';

const product = new ProductStore();

describe('Product Model', () => {
  
  it('should have a show method', () => {
    expect(product.show).toBeDefined();
  });
  it('should create a product using create method', async () => {
    const result: Product = await product.create({
      name: 'iPhone',
      price: 645,
    });
    expect(result).toEqual({
      id: 1,
      name: 'iPhone',
      price: 645,
    });
  });
  it('should have a index  method', async () => {
    const result: Product[] = await product.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'iPhone',
        price: 645,
      }
    ]);
  });
  it('should have a index  method', async () => {
    const result: Product[] = await product.index();
    expect(result).toEqual([
      {
        id: 1,
        name: 'iPhone',
        price: 645,
      }
    ]);
  });

});
