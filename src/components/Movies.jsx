import {Movie} from './Movie'
import React from 'react';
import ReactDOM from 'react-dom';
import {Searhc} from "./Searhc";

function Movies(props) {
    const {movies = []} = props;
    console.log("Movies")
    return (<div>

            <div className='movies'>

                {movies.length ? movies.map(movie => {
                    return <Movie key={movie.imdbID} {...movie}/>
                }) : "NOT FOUND"}
            </div>
        </div>
    )
}

export {Movies}