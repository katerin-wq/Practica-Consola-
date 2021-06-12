import React from 'react'
import '../utils/css/Footer.estilos.css'
import image1 from '../utils/images/image1.jpg'
const Footer = () => {
    return (
        <div className="Container_Footer">
            
            <div className="ContainerText">
                <h1>Hola este es el componente de la cabecera</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit sunt illo minima adipisci nulla odit quas, voluptate, quibusdam fugit id neque ab minus veniam. Numquam odio amet neque maxime obcaecati.
                    Culpa eveniet repellat praesentium corporis debitis aliquid nesciunt ad fugiat, excepturi quibusdam quidem sapiente voluptas cupiditate pariatur labore explicabo reprehenderit non ex minus esse commodi quod. Veritatis nihil iure reprehenderit.
                    Iusto quaerat, nam sequi delectus fugit fuga corporis. Reprehenderit ratione perferendis exercitationem fuga voluptatum ducimus quo explicabo nemo optio tempora! Soluta animi nemo voluptates, accusamus illo tenetur laboriosam sapiente doloribus?
                </p>
            </div>
            <div className="ContainerImage">
                <img  id="image1" src={image1} alt="hola este es Juan"  />
            </div>
            

        </div>
    )
}

export default Footer
