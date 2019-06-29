import React, {Component} from 'react';
import axios from 'axios';


const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosEnlistados extends Component {
    token= 'JQR7JFELI4NJC25IYGKG';
    ordenar = 'date';
    
    state = {
        eventos : []
    }

    encuentraEventos =async (busqueda) =>{
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&
        categories=${busqueda.categoria}&sort_by=${this.ordenar}&
        token=${this.token}&locale=es_ES`;

        const eventos = await axios(url);
        this.setState({
             eventos: eventos.data.events
        })
       
    }

    render() {
        return(
            <EventosContext.Provider
                value = {{
                    eventos: this.state.eventos,
                    encuentraEventos : this.encuentraEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>

        );
    }


}

export default EventosEnlistados;