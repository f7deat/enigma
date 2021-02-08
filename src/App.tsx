import Board from './board';
import Header from './layout/header';
import Tool from './tools/tool';
import ImagePanel from './panels/imagePanel';
import './style.css';
import { Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import TextPanel from './panels/textPanel';

function App() {
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="flex" style={{ height: 'calc(100vh - 49px)' }}>
        <div className="bg-gray-800 w-16 h-full flex-col">
          <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
            <Link to="/"><i className="fas fa-image text-2xl"></i></Link>
          </div>
          <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
            <i className="fas fa-disease text-2xl"></i>
          </div>
          <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
            <i className="fas fa-paragraph text-2xl"></i>
          </div>
          <div className="text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer">
            <Link to="/text"><i className="fab fa-autoprefixer text-2xl"></i></Link>
          </div>
        </div>
        <div className="w-72 border-r bg-white p-3">
          <Switch>
            <Route exact path="/text">
              <TextPanel/>
            </Route>
            <Route exact path="/">
              <ImagePanel />
            </Route>
          </Switch>
        </div>
        <div className="flex-grow">
          <Tool />
          <div className="flex items-center justify-center" style={{ height: 'calc(100% - 48px)' }}>
            <Board />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
