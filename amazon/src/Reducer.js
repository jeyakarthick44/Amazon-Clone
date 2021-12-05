export const initialState = {
    basket: [],
    // user: null
  };

const Reducer = (state,action) => {

    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
    }
}
export default Reducer