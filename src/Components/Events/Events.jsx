import React, {Component} from 'react';
import axios from 'axios';
import { async } from 'q';

const EventosDatos = React.createContext();
export const EventosConst = EventosDatos.Consumer;

class EventosData extends Component  {
    token = 'SSS2LNZUTYCBN77NGD7E';
    ordenar = 'date'
    state = {
        eventos : []
     }

    mostrarEventos = async(busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        const eventos = await axios(url);
        this.setState ({
            eventos : eventos.data.events
        })
    }
    render (){
        return(
            <EventosDatos.Provider
            value = {{
                eventos : this.state.eventos,
                mostrarEventos : this.mostrarEventos
            }}
            
            >
                {this.props.children}

            </EventosDatos.Provider>
        );
    }

}

export default EventosData;

