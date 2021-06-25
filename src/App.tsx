import Board from './board';
import Header from './layout/header';
import Tool from './tools/tool';
import './style.css';
import Sidebar from './layout/sidebar';
import AppRouter from './app-router';

function App() {
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="flex" style={{ height: 'calc(100vh - 49px)' }}>
        <Sidebar/>
        <div className="w-72 border-r bg-white p-3">
          <AppRouter />
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
