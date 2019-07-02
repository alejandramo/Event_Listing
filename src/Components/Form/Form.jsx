import React, {Component} from 'react';

import {CategoriasConst} from '../Categories/Categories';
import {EventosConst} from '../Events/Events';

class Formulario extends Component {
    state = {
        nombre: '',
        categoria: '',
    }

    obtenerDatosEvento = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render (){
        return(
            <EventosConst>
                {(value) =>{
                    console.log(value)
                    return(
            <form
                onSubmit = {(e) => {
                    e.preventDefault();
                    value.mostrarEventos(this.state)

                }}
            >
                <fieldset className='uk-fieldset uk-margin'>
                    <legend className= 'uk-legend uk-text-center'>
                        Busca tu evento por nombre, ubicación o categoría
                    </legend>
                </fieldset>

                <div className='uk-column-1-4@m uk-margin'>
                    <div className= 'uk-margin' uk-margin='true'>
                        <input 
                        name= 'nombre'
                        className='uk-input'
                        type='text'
                        placeholder= 'Evento'
                        onChange = {this.obtenerDatosEvento}
                        />    
                    </div> 


                    <div className= 'uk-margin' uk-margin='true'>
                        <input 
                        name= 'lugar'
                        className='uk-input'
                        type='text'
                        placeholder= 'Lugar'
                        onChange = {this.obtenerDatosEvento}
                        />    
                    </div> 

                    <div className= 'uk-margin' uk-margin='true'>
                        <select
                            className='uk-select'
                            name='categoria'
                            onChange = {this.obtenerDatosEvento}>
                                <option value= ''>Categoría</option>
                                <CategoriasConst>
                                    {(value) => {
                                        return(
                                            value.categorias.map(categoria =>(
                                                <option key={categoria.id} value={categoria.id}
                                                data-uk-form-select>
                                                    {categoria.name_localized}
                                                </option>
                                            ))
                                        )
                                    }}
                                </CategoriasConst>
                        </select>
                    </div>

                    <div>
                        <input 
                        type='submit'
                        className ='uk-button uk-button danger'
                        value='Buscar'/>
                    </div>
                </div>

            </form>
            )
        }}

            </EventosConst>
        );
    }
}

export default Formulario;