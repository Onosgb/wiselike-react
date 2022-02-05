import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
}) 


export default rootReducer;