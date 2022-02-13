import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { obtenerPokemonsAction, siguientePokemonAction, anteriorPokemonAccion, unPokeDetalleAccion } from '../redux/pokeDucks';
import Poke from './Poke';

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    console.log(pokemones)

    return (
        <div className="row">
            <div className="col-md-6">
                <h3>Lista de Pokemones</h3>
                <br /><br />

                <div className="d-flex justify-content-between">
                    {
                        pokemones.length === 0 && 
                        <button 
                            onClick={() => dispatch(obtenerPokemonsAction())}
                            className="btn btn-dark"
                        >
                            Obtener Pokemones
                        </button>
                    }
                    {
                        next && 
                        <button 
                            onClick={() => dispatch(siguientePokemonAction())}
                            className="btn btn-dark"
                        >
                            Siguiente
                        </button>
                    }
                    {
                        previous && 
                        <button 
                            onClick={() => dispatch(anteriorPokemonAccion())}
                            className="btn btn-dark"
                        >
                            Anterior
                        </button>
                    } 
                </div>
                
                <ul className="list-group mt-3">
                    {
                        pokemones.map(item => (
                            <li 
                                key={item.name}
                                className="list-group-item text-uppercase"
                            >
                                {item.name}
                                <button 
                                    className="btn btn-dark btn-sm float-right"
                                    onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                                >
                                    Info
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="col-md-6">
                <h3>Detalle de un Pokemon</h3>
                <Poke />
            </div>
        </div>
    )
}

export default Pokemones