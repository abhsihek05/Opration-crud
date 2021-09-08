import React from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Contact from './Components/Contact';
import Feachers from './Components/Feachers';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Pricing from './Components/Pricing';
import Read from './User/Read';
import User from './User/User';
import UserAdd from './User/UserAdd';
import UserEdit from './User/UserEdit';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {sonu:"hellow solis lsjdljjasljjhflhas olashljfalfs lskahfdsaljjfdljkfsajl l h"}

  }

  render(){
    return(
      <>
   
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/feachers" component={Feachers} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/useradd" component={UserAdd} />
            <Route exact path="/useredit/:id" component={UserEdit} />
            <Route exact path="/read/:id" component={Read} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }

}


export default App;
