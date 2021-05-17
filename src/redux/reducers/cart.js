
const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const cart = (state = initialState, action) => {


    switch (action.type) {
        case "ADD_PIZZA_CART":

            const newItems = { //выносим данные для корректной работы метода totalCount
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allPizzas =Object.values(newItems).flat()

            const totalPrice = allPizzas.reduce((sum, obj)  =>  obj.price + sum, 0)
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            }

        default:
            return state
    }

}

export default cart