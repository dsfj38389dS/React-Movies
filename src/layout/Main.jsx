import React from 'react';
import ReactDOM from 'react-dom';
import {Movies} from "../components/Movies"
import {Preloader} from "../components/Preloader";
import {Searhc} from "../components/Searhc";

//cfd0b19e apikey http://www.omdbapi.com/
const API_KEY = process.env.REACT_APP_API_KEY


class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=naruto`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false},))
            .catch((err) => {
                console.log(err)
                this.setState({loading: false})
            })
    }

    getMovie = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err) => {
                console.log(err)
                this.setState({loading: false})
            })
    }
    t

    render() {

        const {movies, loading} = this.state
        console.log(this.state)
        return (<main className="content">

            <Searhc getMovie={this.getMovie}/>
            {
                loading ? <Preloader/>
                    : (<Movies movies={movies}/>)
            }

        </main>)
    }

}

export {Main}