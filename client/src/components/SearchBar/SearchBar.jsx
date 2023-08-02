import {useDispatch} from "react-redux"
import { useState } from "react"
import  {getByName} from '../../redux/actions'
import style from './SearchBar.module.css'


const Searchbar = () =>{
    const [name,setName]=useState();
    const dispatch = useDispatch()

    const handleChange = (event)=>{
        setName(event.target.value)
    }


    const searchByName=(event)=>{
        dispatch(getByName(name))
        event.preventDefault()
        setName("")
    }
return(


    <form onSubmit={searchByName} className={style.form}>
        <input 
        type="search"
        placeholder='search by name...' 
        value={name} 
        onChange={(handleChange)}
        />
    </form>
)
}

export default Searchbar