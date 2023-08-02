import {Link} from "react-router-dom"

import style from './Card.module.css'
import { useDispatch } from "react-redux"

const Card  = ({id,name,height,weight,life_span,image,temperament}) =>{
    const dispatch = useDispatch();
    const temperaments = !temperament ? ["No hay temperamentos asociados"] : temperament.split(",")
    
    return(
        <Link to= {`/dog/${id}`} onClick={() => dispatch(DogDetail(id))}>
        <div className={style.card}>

            <img className={style.imagen} src={image}></img>
            <h3 className={style.nombre}>Nombre: {name}</h3>
            <h3>Peso: {weight}</h3>
            <h3>Temperamento: {temperaments}</h3>
        </div>
        </Link>
    )
}
export default Card;