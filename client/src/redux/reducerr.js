import { GET_ALL_DOGS,
    GET_ALL_TEMPERAMENTS,GET_BY_NAME,GET_DOG_DETAILS,FILTER_ORIGIN,FILTER_TEMPERAMENTS,
    ORDER_NAME,ORDER_WEIGHT,RESET_FILTERS,CREATE_DOGS } from "./action-type";



const initialState = {
    dogs: [],
    backupDogs: [],
    temperaments: []
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case GET_ALL_DOGS:
            return{
                ...state,
                dogs:action.payload,
                backupDogs: action.payload
            };
        case GET_ALL_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }
        case GET_BY_NAME:
            return{
                ...state,
                dogsDetail: action.payload
            }    
        case GET_DOG_DETAILS:
            return{
                ...state,
                temperaments: action.payload
            }
        case CREATE_DOGS:
            return{
                ...state,

            }         
        case FILTER_TEMPERAMENTS:
            const selectedTemperaments = action.payload;
            // Filtrar los perros según los temperamentos seleccionados
            const filteredDogs = state.dogs.filter(dog => {
            // Verificar si cada temperamento seleccionado está incluido en los temperamentos del perro
            return selectedTemperaments.every(temp => dog.temperament.includes(temp));
            });

            return {
                ...state,
                filteredDogs: filteredDogs
            }
        case FILTER_ORIGIN:
            const originDogs = state.backupDogs;

            const filterDogs = originDogs.filter(dog => {
                return action.payload === 'API' ? typeof dog.id === 'number' : typeof dog.id !== 'number'
            })

            return {
                ...state,
                dogs: filterDogs
            }
        case ORDER_NAME:
            const dogsCopy = [...state.dogs];
            let sortedDogs = [];

            if (action.payload === 'A-Z') {
                sortedDogs = dogsCopy.sort((a, b) => a.name.localeCompare(b.name))
            } else {
                sortedDogs = dogsCopy.sort((a, b) => b.name.localeCompare(a.name))
            }

            return {
                ...state,
                dogs: sortedDogs
            }
        case ORDER_WEIGHT:{ 
            const dogsCopy = [...state.dogs]

            const dogsWeight = dogsCopy.map(dog =>{
                let minWeight = null;
                let maxWeight = null

                if(dog.weight){
                    const weightArray = dog.weight.split("-")
                    if(weightArray.length === 2){
                        minWeight = parseInt(weightArray[0])
                        maxWeight = parseInt(weightArray[1])
                    }
                }
                return{
                    ...dog,
                    minWeight,
                    maxWeight
                };
            }).sort((a,b)=>{
                if(action.payload === "pesado"){
                    return b.maxWeight - a.maxWeight
                }else if(action.payload === "liviano"){
                    return a.minWeight - b.minWeight
                }else{
                    return 0
                }
            });
            return{
                ...state,
                dogs : dogsWeight
            }
        }
    case RESET_FILTERS:
        return{
            ...state,
            dogs: state.backupDogs
        }
        default:
            return{
                ...state
            };
    }
    
}
export default reducer