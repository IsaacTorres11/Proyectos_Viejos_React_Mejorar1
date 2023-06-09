import React from 'react'


// Estilos
import "./GithubUser.styles.css"

const GithubUser = (props) => {

    const {
        avatar,
        github,
        github_name,
        name,
        public_repos,
        followers,
        following
    } = props;

    return (
        <div className ="w-1/4 m-auto">
            <div className ="card-header flex justify-between items-center p-10">
                <img src={avatar} alt={github} className ="w-24 h-24"/>
                <h2>{github_name}</h2>
            </div>

            <div className="card-body flex justify-between items-center">
                <p> <span className ="text-claro text-2xl font-bold">Repos:</span> {public_repos} </p>
                <p> <span className ="text-claro text-2xl font-bold">Folowers:</span> {followers} </p>
                <p> <span className ="text-claro text-2xl font-bold">Following:</span> {following} </p>

            </div>
        </div>
    )
}

export default GithubUser
