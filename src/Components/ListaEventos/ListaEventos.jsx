import React from 'react';
import Evento from '../Evento/Evento';
import {EventosConst} from '../Events/Events';

const ListaEventos = () => {
    return (
        <div className= 'uk-child-width-1-3@m' uk-grid='true'>
            <EventosConst>
                {(value) => {
                    return value.eventos.map(evento => (
                        <Evento
                            key = {evento.id}
                            evento = {evento}
                        />
                    ))
                }}
            </EventosConst>
        </div>
    )
}

export default ListaEventos;