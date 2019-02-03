import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';




class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  
  state = {

  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title : "Interstella",
            poster : "https://decipherscifi.com/wp-content/uploads/sites/4/2016/05/Interstellar-2-1024x576.jpg"
          },
          {
            
            title : "Interstella",
            poster : "https://decipherscifi.com/wp-content/uploads/sites/4/2016/05/Interstellar-2-1024x576.jpg"
          },
          {
            
            title : "Interstella",
            poster : "https://decipherscifi.com/wp-content/uploads/sites/4/2016/05/Interstellar-2-1024x576.jpg"
          },
          {
            
            title : "Interstella",
            poster : "https://decipherscifi.com/wp-content/uploads/sites/4/2016/05/Interstellar-2-1024x576.jpg"
          },
          {
            title : "Inception",
            poster : "https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Inception_OST.jpg/220px-Inception_OST.jpg"
          }
        
        ]
      })
    },5000)
  }


  _renderMovie = () => {
    const movies = this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
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
