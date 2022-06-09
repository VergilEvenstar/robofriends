import { CHANGE_SEACRH_FIELD } from "./constants";

export const setSearchField = (text) =>({
    type : CHANGE_SEACRH_FIELD,
    payload : text
});

// export const setSearchField = (text) =>{
//     console.log(text);
//     return{
//         type : CHANGE_SEACRH_FIELD,
//         payload : text
//     }
// };