import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Read from './User/Read';
import User from './User/User';
import UserAdd from './User/UserAdd';
import UserEdit from './User/UserEdit';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {sonu:""}

  }
  render(){
    return(
      <>
   
        <BrowserRouter>

        <h1 className='d-block  text-center bg-primary text-light p-1'>Curd Opration</h1>
          <Switch>
            <Route exact path="/" component={User} />
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
