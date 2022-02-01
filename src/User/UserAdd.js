import React from 'react';
import '../AllCss/UserAdd.css';


class UserAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: { name: "",lname: "",  email: "", add: "", phone: "" } };


  }


  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(data) 
    });
    return response.json();    
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    
    let obj = this.state.fields;
    await this.postData('http://localhost:3002/users', obj)
      .then(data => {
        // console.log(data);
      });
      this.redirect();
  }

  redirect(){
    this.props.history.push("");
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
            <label >Last Name</label>
            <input name="lname" tupe="text" placeholder="Enter your Last name" value={this.state.fields.lname} onChange={this.handleChange} />
            <label >User Name</label>
            <input name="username" tupe="text" placeholder="User name" value={this.state.fields.username} onChange={this.handleChange} />
            <label >Address</label>
            <input name="add" tupe="text" placeholder="address" value={this.state.fields.add} onChange={this.handleChange} />
            <label >Email</label>
            <input name="email" tupe="text" placeholder="Email" value={this.state.fields.email} onChange={this.handleChange} />
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