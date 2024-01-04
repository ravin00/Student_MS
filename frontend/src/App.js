
import './App.css';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';

function App() {
  return (
      <Router>
      <div>
        <Header />
        
        <Routes>
          
          <Route path='/add' exact Component={AddStudent}/>
          <Route path='/update/:id' exact Component={UpdateStudent}/>
          <Route path='/delete/:id' exact Component={DeleteStudent}/>
          <Route path='/' exact Component={AllStudent}/>
        </Routes>
        
         
        
        
      </div>
      </Router>
   

  );
}

export default App;
