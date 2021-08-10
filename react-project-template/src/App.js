import Tabs from './component/Navbar.jsx'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './component/Home'
import Application from './component/Application'
import Code from './component/Code'
import Git from './component/Git'
import About from './component/About'



function App() {
  return (
    <Router>
       <Tabs/>
       <Switch>
         <Route exact path='/'>
           <Home/>
         </Route>
         <Route path='/App'>
           <Application/>
         </Route>
         <Route path='/Code'>
           <Code/>
         </Route>
         <Route path='/Git'>
           <Git/>
         </Route>
         <Route path='/About'>
           <About/>
         </Route>
       </Switch>

    </Router>
     

  );
}

export default App;
