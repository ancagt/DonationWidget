import './App.css';
import WidgetPage from './pages/widget-page';

function App() {
  return (
    <div className="App">
      <div style={{maxWidth: '450px'}} className="widget-box">
      <WidgetPage />
      </div>
    </div>
  );
}

export default App;
