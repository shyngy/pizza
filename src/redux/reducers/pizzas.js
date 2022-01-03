const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      const pizzas = action.payload;
      const filteredItems = pizzas.map((item) => {
        const sizes = item.sizes.map((size) => {
          let newArray = [];
          if (size === 26) newArray = 0;
          if (size === 30) newArray = 1;
          if (size === 40) newArray = 2;
          return newArray;
        });
        return {
          ...item,
          sizes,
        };
      });

      return {
        ...state,
        items: filteredItems,
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default pizzas;
