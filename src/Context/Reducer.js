export const reducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      console.log('Added To Cart');
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case 'Remove': {
      console.log('Removed From Cart');
      const cart = state.cart.filter(prod => prod.id !== action.payload);
      console.log(cart);
      return { ...state, cart: cart };
    }
    case 'qty': {
      console.log('Quantity added');
      const cart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        }

        return { ...item };
      });
      return {
        ...state,
        cart: cart
      };
    }
    default:
      return state;
  }
};

export const prodreducer = (state, action) => {
  switch (action.type) {
    case 'byStock':
      return { ...state, byStock: !state.byStock };
    case 'sorting':
      return { ...state, sort: action.payload };
    case 'search':
      return { ...state, searchQuery: action.payload };
    case 'fast':
      return { ...state, byFastDeliver: !state.byFastDelive };
    case 'clear':
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ''
      };
    default:
      return state;
  }
};
