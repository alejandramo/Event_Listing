import React from 'react';
import './CardEvent.css'

const CardEvent =() => {
    return (
        
        <div className="contendor_eventos">
        <div className="encabezado">Próximos eventos</div>
       
        <div className="flex-container">
       
            <div>
              <p className='category_id'>CAT</p>
              <p className='name_event'>NAME</p>
            <div className="img_event">Imagen del evento</div>
            
            <div>
              <div className="desc_event">Resumen del evento 
            </div>
              
              <div className="botones">
                <p className="detalles">
                  <a href="event.html" className="button1">Ver evento</a>
                </p>
                <p className="asistir">
                  <a href="asistir.html" className="button2">Asistir</a>
                </p>
                <p className="agregar">
                  <a href="agregar.html" className="button3">Agregar a calendario</a>
                </p>
              </div>

        </div>
          </div>
        </div>
      </div>
      
    )
}





export default CardEvent;
