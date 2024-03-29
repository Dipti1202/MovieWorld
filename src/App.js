// import UseFetch from "./useFetch";
import './App.css';
import React, { useEffect } from 'react'
import Title from "./title";
import SerchArea from "./search";
import Home from "./home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <SerchArea />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/home/:title' element={<Home />} />
          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
// http://www.omdbapi.com/?i=tt3896198&apikey=7aa2fa38
// 7aa2fa38