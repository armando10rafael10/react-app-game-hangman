import React,{ useState } from 'react';
import Main_Menu from './Components/Main_Menu';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <div id="container-app">
            <Main_Menu />
      </div>
    );
  }
}
export default App;
