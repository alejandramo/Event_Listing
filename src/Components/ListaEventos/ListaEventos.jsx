import React from 'react';
import Evento from '../Evento/Evento';
import {EventosConsumer} from '../Eventos/Eventos';

const ListaEventos = () => {
    return (
        <div className = "uk-child-width-1-3@m" uk-grid='true'>
            <EventosConsumer>
                {(value) => {
                    return value.eventos.map(evento => (
                        <Evento 
                            key ={evento.id}
                            evento = {evento}
                        />
                    ))
                }}


            </EventosConsumer>
        </div>

    )
}

export default ListaEventos;