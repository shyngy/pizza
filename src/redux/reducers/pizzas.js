const initalState = {
    items: [],
    isLoaded: false
}


const pizzas = (state = initalState, action) => {
    console.log(state)
    switch (action.type) {
        case "SET_PIZZAS":
            return{
                ...state,
                items: action.payload,
                isLoaded: action.loadValue

            }

        default:
            return state
    }
}

export default pizzas