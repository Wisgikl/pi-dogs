import React from "react"
import style from "./LandingPage.module.css"
import { useNavigate } from 'react-router-dom';


const  LandingPage = ()=> {

    const navigate = useNavigate();

    const navigateHandler = () =>{
        navigate('/home');
    }


    return(
        <div className={style.landcontainer}>
            <div className={style.card}>
            <div class="card-details">
                <p class="text-title">Bienvenidos a mi pagina web de perros</p>
                <p class="text-body">Here are the details of the card</p>
                <button className={style.btn} onClick={navigateHandler}>Home</button>
            </div>
            </div>
           
        </div>
    )
}

export default LandingPage