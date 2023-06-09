import React from 'react'

// I,portando Estilos
import './Header.styles.css'

const Header = () => {
    return (
        // En este caso podemos hacer que coexistan las clases de tailwind con las clases 
        // que nosotros creamos como mi-clase solo hay que importarlas

        <header className ="h-16 bg-azulFuerte flex justify-between items-center mi-clase">
            <h2 className ="ml-10 text-4xl text-azulClaro">GitHub API</h2>
        </header>
    )
}

export default Header
