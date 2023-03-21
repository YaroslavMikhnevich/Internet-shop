import sliceItems, { getCurrentItem, addToOrders } from './sliceUsers';

describe('sliceItems reducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      items: [],
      orders: [],
      wishes: [],
      currentItem: null,
      orderModal: false,
      wishesModal: false,
      delateOrdersModal: false, 
      delateWishModal: false,
      alert: false
    };
  });

  it('should return the initial state', () => {
    const nextState = sliceItems(initialState, {});
    expect(nextState).toEqual(initialState);
  });

  it('should handle getCurrentItem', () => {
    const payload = { id: 1, name: 'Item 1' };
    const nextState = sliceItems(initialState, getCurrentItem(payload));
    expect(nextState.currentItem).toEqual(payload);
  });

  it('should handle addToOrders', () => {
    const item = { id: 1, name: 'Item 1' };
    const nextState = sliceItems(initialState, addToOrders(item));
    expect(nextState.orders).toEqual([item]);
  });

  test('should handle addToOrders when item is already in orders', () => {
    const state = {
      items: [],
      orders: [{ id: 1 }],
      wishes: [],
      currentItem: { id: 1 },
      orderModal: false,
      wishesModal: false,
      delateOrdersModal: false,
      delateWishModal: false,
      alert: false,
    };
    const action = addToOrders();
  
    const nextState = sliceItems(state, action);
  
    expect(nextState.orders.length).toEqual(1);
  });
});