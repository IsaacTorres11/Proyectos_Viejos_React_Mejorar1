import React,{useState} from 'react'

// Componentes
import Header from '../../Componentes/Custom/Header/Header'
import UserForm from '../../Componentes/Custom/Form/UserForm'
import GithubUser from '../../Componentes/Custom/GithubUser/GithubUser'

const Home = () => {
    //State
    const [userName,setUserName] = useState('')
    const [userInformation, setUserInformation] = useState (null)
    const [loader, setLoader] = useState (false)

    // Funciones 
    const handleUserName = ({value})=>{
        setUserName(value)
    }

    const heandleSearchUser = async e =>{
        e.preventDefauult ()
        setCityInformation (null);
        setLoader (true);
        const API = `https://api.github.com/users/jorgeduje${userName}`
        const response = await fetch(API)
        const result  =  await response.json()
        console.log(result);
        setUserInformation(result)
        setLoader (false);
    }

    return (
        <div className=''>
            <Header />
            <UserForm 
            handleUserName={handleUserName} 
            heandleSearchUser ={heandleSearchUser}
            />
         
        <div className="text-center">  
            {userInformation ? (
                <GithubUser 
                avatar ={userInformation?.avatar_url} 
                github={userInformation?.html_url}
                github_name={userInformation?.login}
                name={userInformation?.name}
                public_repos ={userInformation?.public_repos}
                followers={userInformation?.followers}
                following={userInformation?.following}
                />    
            ) 
            : null }
         </div>
            {
                loader && <Loader />
            }
        </div>
    )
}

export default Home
