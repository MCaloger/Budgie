import logo from './logo.svg';
import './App.css';
import { CategoryManager, CategoryContext } from './Contexts/CategoryManager/CategoryManager';
import AppRouter from './Components/AppRouter/AppRouter';


function App() {

  return (
    <div className="App">

      <CategoryManager>
        <AppRouter />
      </CategoryManager>
        
    </div>
  );
}

export default App;
