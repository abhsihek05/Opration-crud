import React from 'react';
import '../AllCss/UserAdd.css';


class UserAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: { name: "", username: "", website: "", phone: "" } };


  }


  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }





  handleSubmit = (e) => {
    e.preventDefault();
    let obj = this.state.fields;
    this.postData('http://localhost:3002/users',obj)
      .then(data => {
        console.log(data);
      });
  }

  handleChange = (event) => {
    let obj = this.state.fields;
    obj[event.target.name] = event.target.value;
    this.setState({ fields: obj });
  }

  render() {
    return (
      <>
        <h2 className="text-center p-3">this is the UserAdd page is here</h2>
        <div className="mb-3 w-50 main-useradd-div">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label >Name</label>
            <input name="name" tupe="text" placeholder="Enter your name" value={this.state.fields.name} onChange={this.handleChange} />
            <label >User Name</label>
            <input name="username" tupe="text" placeholder="User name" value={this.state.fields.username} onChange={this.handleChange} />
            <label >website</label>
            <input name="website" tupe="text" placeholder="website" value={this.state.fields.website} onChange={this.handleChange} />
            <label >phone</label>
            <input name="phone" tupe="text" placeholder="Phone" value={this.state.fields.phone} onChange={this.handleChange} />
            <div className="text-center pt-3">
              <button className="btn btn-primary" type="submit" >Submit</button>
            </div>
          </form>
        </div>

      </>
    )
  }
}

export default UserAdd;