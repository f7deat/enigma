import Board from './board';
import Header from './layout/header';
import Tool from './tools/tool';
import ImagePanel from './panels/imagePanel';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import TextPanel from './panels/textPanel';
import Sidebar from './layout/sidebar';
import React from 'react';
import PanelTextEdit from './panels/text/panel-text-edit';

function App() {
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="flex" style={{ height: 'calc(100vh - 49px)' }}>
        <Sidebar/>
        <div className="w-72 border-r bg-white p-3">
          <Switch>
            <Route exact path="/text/edit">
              <PanelTextEdit />
            </Route>
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
