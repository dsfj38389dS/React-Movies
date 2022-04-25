import React from 'react';
import ReactDOM from 'react-dom';

function Movie(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                {Poster === "N/A" ? (<img className="activator" src={`https://via.placeholder.com/300x300?text=${Title}`} />)
                    : (<img className="activator" src={Poster} />)
                }
                
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{Title}<i className="material-icons right">more_vert</i></span>
                <p><a href="#">{Type}</a></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{Year}<i className="material-icons right">close</i></span>
                <p>{imdbID}</p>
            </div>
        </div>
    )
}
export { Movie }