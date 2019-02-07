import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Movie from './Movie';




class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  
  state = {

  }
  
  componentDidMount(){
    this._getMovies();
  }


  _renderMovie = () => {
    const movies = this.state.movies.map((movie) =>{
      console.log(movie)
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>
    })
    return movies;
  }

  _getMovies = async () => {
      const movies = await this._callApi();
      this.setState({ // _callApi()가 완료되고 실행됨(성공하든 실패하든)
        movies  // movies : movies
      })
      
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
       {this.state.movies ? this._renderMovie() : 'Loading'}
      </div>
    );
  }
}

export default App;
