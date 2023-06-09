import React from 'react'

//estilos
import './UserForm.styles.css'


const UserForm = ({handleUserName, heandleSearchUser}) => {
    return (
        <form 
        action =""  
        className ="w-1/2 m-auto mt-10 text-center"
        onSubmit ={(e)=> heandleSearchUser (e)}
        >
           
            <input
            type="text"
            placeholder ='Nombbre De Usuario'
            className ="p-4 w-3/4 search-input"
            onChange ={(target)=>handleUserName(target)}
            />

            <input 
            type="submit" 
            value="Buscar !" 
            className="p-4 w-1/4 bg-azulFuerte hover:bg-azulClaro text-claro hover:text-azulMenosFuerte  search-input_button "
            />

        </form>
    )
}

export default UserForm
