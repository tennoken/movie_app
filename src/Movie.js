import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

    

class Movie extends Component {

    // 부모 컴퍼넌트에게서 받는 정보의 종류가 무엇인지 체크할 수 있다.
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
        
    }

    render() {
        
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}


class MoviePoster extends Component {

    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render() {
        return (
            <img src={this.props.poster} alt='Movie Poster'/>

        )
    }

}

export default Movie;