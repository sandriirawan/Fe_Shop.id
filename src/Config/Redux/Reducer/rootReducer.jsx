import { combineReducers } from "redux";
import productReducer from "../Reducer/productReducer";
import orderReducer from "./ordersReducer";




const rootReducer = combineReducers({
    product : productReducer,
    order : orderReducer,
    

})

export default rootReducer;