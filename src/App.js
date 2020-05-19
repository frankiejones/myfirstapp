import React, {Component} from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import AboutDave from './components/AboutDave';
import Movies from './components/Movies';
import Pets from './components/pets';
import Student from './components/Student';


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Navbar/>
        <AboutDave/>
        <AboutMe/>
        <Movies title="Harry Potter" description="really good films" watching="yes"/>
        <Pets name="Fluffy" species="cat" legs="3" food="Mum's cereal"/>
        <Student names="Frankie" ages={30}/>

      </div>
    )
  }
}

export default App; //this line is incredibly important
