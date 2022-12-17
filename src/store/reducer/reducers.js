import { combineReducers } from "redux";
import { firstname, lastname,gender,age,profesion } from "./reducer";

export const reducers = combineReducers({
    FirstName: firstname,
    LastName: lastname,
    Gender:gender,
    Age:age,
    Profesion:profesion,
    khd:firstname,

})

