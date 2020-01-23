import { RECEIVE_ITEMS } from "../actions/items_actions";


const itemsReducer = (state={} , action) => {

  switch (action.type) {
    case RECEIVE_ITEMS:
      return Object.assign({}, state, action.items);
    default:
      return state;
  }
};
    
export default itemsReducer;
