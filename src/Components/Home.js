import React from 'react';
import User from '../User/User';


class Home extends React.Component {
  constructor(props) {
    super(props);

  }
 
  render() {
    return (
      <>
        <User />
      </>
    )
  }
}

export default Home;