import React from 'react';
import '../estilo-templates/Template.css'
function Template(props){
    return(
        <div className='contenedor-template'>
            <img className='imagen-template' src={require(`../imagenes/img-${props.imagen}.png`)} alt='foto 1'/>
            <div className='cont-template'>
                <p className='name'><strong>{props.nombre}</strong> con {props.clave}</p>
                <p className='categoria'>{props.categoria} de {props.especifico}</p>
                <p className='details'>{props.detalles}</p>
            </div>
        </div>        
    );
}
export default Template;