import React, {Component} from 'react';
import axios from 'axios';

const CategoriasDatos = React.createContext();
export const CategoriasConst = CategoriasDatos.Consumer;


class CategoriasData extends Component  {
    
    token = 'SSS2LNZUTYCBN77NGD7E';
    state = {
        categorias : []
    }
    
    componentDidMount(){
        this.mostrarCategorias();
    }

    mostrarCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
        
        let categorias = await axios.get(url);
        this.setState ({
    
            categorias: categorias.data.categories
        })
    }

    render (){
        return (
            <CategoriasDatos.Provider
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasDatos.Provider>


        );
    }
}
export default CategoriasData;