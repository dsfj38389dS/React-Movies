import React from "react";
import {type} from "@testing-library/user-event/dist/type";

class Searhc extends React.Component {
    state = {
        search: 'Naruto',
        type: 'all'
    }
    searchMovie = (event) => {
        if (event.key === "Enter") {
            this.props.getMovie(this.state.search,this.state.type)
        }

    }
    searchMovieType = (event) => {
        this.setState(()=>({type:event.target.dataset.type}),
            ()=>{this.props.getMovie(this.state.search,this.state.type)}
            )

    }


    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input id="search"
                           type="search"
                           className="validate"
                           value={this.state.search}

                           onChange={(e)=>{this.setState({search:e.target.value})}}
                           onKeyDown={this.searchMovie}
                    />
                    <button className='btn btn-search' onClick={() => this.props.getMovie(this.state.search,this.state.type)}>Search
                    </button>
                </div>
                <div>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='all'
                               onChange={this.searchMovieType}
                               checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='movie'
                               onChange={this.searchMovieType}
                               checked={this.state.type === 'movie'}
                        />
                        <span>movie</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type='series'
                               onChange={this.searchMovieType}
                               checked={this.state.type === 'series'}
                        />
                        <span>series</span>
                    </label>
                </div>
            </div>
        )
    }
}

export {Searhc}