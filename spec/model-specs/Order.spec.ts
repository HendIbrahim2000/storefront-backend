/* eslint-disable no-undef */
import { OrderStore } from '../../src/models/order';

const order = new OrderStore();

describe('Order Model', () => {
  it('should have an create  method', () => {
    expect(order.create).toBeDefined();
  });
  it('should have a addProduct method', () => {
    expect(order.addProduct).toBeDefined();
  });
  it('should have an getUserOrder  method', () => {
    expect(order.getUserOrder).toBeDefined();
  });
});
