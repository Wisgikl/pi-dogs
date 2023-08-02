import axios from 'axios';

export const getAllDogs = () => async(dispatch)=>{
    const URL = `http://localhost:3001/dogs`
    const response = await axios.get(URL);
    return dispatch({
        type:"GET_AlL_DOGS",
        payload:response.data,
    })
}

export const getAllTemperaments = () => async(dispatch)=>{
    const URL = `http://localhost:3001/temperaments`
    const response = await axios.get(URL)
    return dispatch({
        type:"GET_ALL_TEMPERAMENTS",
        payload:response.data,
    })
}


export const getByName = (name) => {
    return async function (dispatch){
        
        const URL = `http://localhost:3001/name?name=${name}`
        const response = await axios.get(URL)
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data,
    })
    }
}

export const getById = (id) => {
    return async function (dispatch){
    const URL = `http://localhost:3001/name?name=${id}`
    const response = await axios.get(URL)
    return dispatch({
        type:"GET_DOG_DETAILS",
        payload:response.data,
    })
    }
}

export const createDog = (payload) => async(dispatch)=>{
    const URL = `http://localhost:3001/dogs`
    const response = await axios.post(URL, payload)
    return dispatch({
        type:"CREATE_DOGS",
        payload:response.data,
    })
}

export const filterTemps = (temp)=>{
    return{
        type:'FILTER_TEMPERAMENTS',
        payload:temp
    }
}

export const filterOrigin = (origin) => {
    return {
      type: "FILTER_ORIGIN",
      payload:origin
    };
  };

export const orderName = (name)=>{
    return{
        type:"ORDER_NAME",
        payload:name
    }
}

export const orderWeight = (weight)=>{
    return{
        type:"ORDER_WEIGHT",
        payload:weight
    }
}
export const resetFilters = () => {
    return {
        type: "RESET_FILTERS"
    }
}