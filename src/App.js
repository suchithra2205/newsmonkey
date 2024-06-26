import './App.css';
import React, { Component } from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  
  state={
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
           
          />

          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="Top" country="in" category="top" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health " country="in" category="health" />} />
            <Route exact path="/lifestyle" element={<News setProgress={this.setProgress}  key="lifestyle" country="in" category="lifestyle" />} />
            <Route exact path="/world" element={<News setProgress={this.setProgress}  key="world" country="in" category="world" />} />
            <Route exact path="/politics" element={<News setProgress={this.setProgress}  key="politics" country="in" category="politics" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" country="in" category="technology" />} />
            <Route exact path="/tourism" element={<News setProgress={this.setProgress}  key="tourism" country="in" category="tourism" />} />
            <Route exact path="/other" element={<News setProgress={this.setProgress}  key="other" country="in" category="other" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
