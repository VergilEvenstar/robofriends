import { 
    CHANGE_SEACRH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    ROBOTS_DATA_API
} from "./constants";

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

export const callRobotsApi = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING});
    fetch(ROBOTS_DATA_API)
        .then(response => 
            response.json()
        )
        .then(data => 
            dispatch({type: REQUEST_ROBOTS_SUCCESS, payload : data})
        )
        .catch(error => 
            dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}));
}