import React, {Component} from 'react';

import {CategoriasConsumer} from '../Categories/Categories';
import {EventosConsumer} from '../Eventos/Eventos';
import './Search.css';

class Search extends Component {
  state = {
    nombre: '',
    categoria: '',
  } 

  infoEvento = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    return(
      <EventosConsumer>
        {(value) => {
          console.log(value)
       
          return(
            <form 
              onSubmit={(e) =>{
                e.preventDefault();
                value.encuentraEventos(this.state)
              }}
            >
              <fieldset className='uk-fielset uk-margin'>
                <legend className='uk-legend uk-text-center'>
                  Busca por nombre o categoría
                </legend>
              </fieldset>
               
              <div className= 'uk-column-1-3@m uk-margin='>
                <div className= 'uk-margin' uk-margin='true'>     
                  <input 
                    name= 'nombre'
                    className='uk-input'
                    type='text'
                    placeholder= 'Evento o ciudad'
                    onChange={this.infoEvento}
                  />
                </div>

                <div className='uk-margin' uk-margin='true'>
                  <select
                    className='uk-select'
                    name='categoria'
                    onChange={this.infoEvento}
                  >
                    <option value =""> Categoría</option>
                      <CategoriasConsumer>
                        {(value)=>{
                          return(
                            value.categorias.map(categoria => (
                              <option key={categoria.id} value={categoria.id}
                                data-uk-form-select>
                                {categoria.name_localized}
                              </option>
                            ))
                          )
                        }}
                      </CategoriasConsumer>
                  </select>
                </div>  
                <div>
                  <input type= "sumbmit" 
                    className= 'uk-button uk-button-danger'
                    value = 'Busca tu evento' />
                </div>
              </div>
            </form>
          )
        }}
            </EventosConsumer>
          );
        }
      }




export default Search;
