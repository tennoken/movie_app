import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';




const movies = [
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
  }

]


class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
        

        
        
      
      </div>
    );
  }
}

export default App;
