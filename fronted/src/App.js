import './App.css';
import Employee from './components/Employee';
import Addemployee from './components/Addemployee';
import Updateemployee from './components/Updateemployee';
import Deleteemployee from './components/Deleteemployee';
import Temparory from './components/Temparory';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/temp" component={Temparory}/>
        <Route exact path="/" component={Employee}/>
        <Route exact path="/list" component={Employee}/>
        <Route exact path="/add" component={Addemployee}/>
        {/* parameters with path */}
        <Route path="/update/:id" component={Updateemployee}/>
        <Route path="/delete/:id" component={Deleteemployee}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
