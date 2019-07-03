import React from 'react';

const Evento = ({evento}) => {

    let {text} = evento.description;
    if(text){
        if(text.length > 250){
            text = text.substr(0,250)+'(...)';
        }
    }else {
        text = null;
    }

    return (
        <div>
        <div className='container_card'>
            <div className= 'uk-card uk-card-default'>
                <div className= 'uk-card-media-top' >
                    {evento.logo ?
                    <img className='img_event' src={evento.logo.url} alt={evento.name}/>
                    :null}
                </div>
                <div className='uk-card-body' >
                        <h3 className='uk-card-title'>{evento.name.text}</h3>
                        {text}
                </div>
                <div className='uk-card-footer'>
                        <a target= '_blank' rel='noopener noreferrer' href={evento.url} className='uk-button uk-button-secondary'>
                            Detalles
                        </a>
                </div>

                <div className='uk-card-footer b'>
                        <a target= '_blank' rel='noopener noreferrer' href='https://calendar.google.com/calendar/' className='uk-button uk-button-secondary'>
                            Agregar a mi calendario
                        </a>
                </div>
            </div>
        </div>
        <div className='box_padding'>
        </div>

       </div>
    );

}

export default Evento