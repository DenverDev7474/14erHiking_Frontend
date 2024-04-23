import { combineReducers } from "@reduxjs/toolkit";
import hikeReducer from "../slices/hikeSlice";
import mountainReducer from "../slices/mountainSlice";
import routeReducer from "../slices/routeSlice";
import userReducer from "../slices/userSlice";


const rootReducer = combineReducers({
    hikeState: hikeReducer,
    mountainState: mountainReducer,
    routeState: routeReducer,
    userState: userReducer
})

export default rootReducer;