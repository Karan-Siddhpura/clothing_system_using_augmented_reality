import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header from "./components/headers/Header";
import Pages from "./components/mainpages/Pages"
import './App.css';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <div className="App">
            <Header />
            <Pages />
          </div>
        </Router>
      </DataProvider>
    </div >
  );
}

export default App;
