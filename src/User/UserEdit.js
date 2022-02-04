// import axios from 'axios';
import React from 'react';
import '../AllCss/UserAdd.css';


class UserEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            champId: this.props.match.params.id,
            match: false,
            SingleData: {name:"",lname:"",email:"",add:"",phone:""},
        }

        this.handleChange = this.handleChange.bind(this);
        

    }
    
  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'put', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data) 
    });
    return response.json();
  }


  handleSubmit = (e) => {
    e.preventDefault();
    let obj = this.state.SingleData;
    this.postData(`http://localhost:3002/users/${this.state.champId}`, obj)
      .then(data => {
        console.log(data);
      });
      this.redirect();
  }
  redirect(){
    this.props.history.push("");
  }

  handleChange = (event) => {
    let obj = this.state.SingleData;
    obj[event.target.name] = event.target.value;
    this.setState({ SingleData: obj });
  }


  componentDidMount(){
      fetch(`http://localhost:3002/users/${this.state.champId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({SingleData:data});
      })
  }

    render() {
        return (
            <>
                <h2 className="text-center p-3">this is the UserEdit page is here</h2>
                <div className="mb-3 w-50 main-useradd-div">
                    <form onSubmit={this.handleSubmit}>
                      <p>Name : {this.state.SingleData.name}</p>
                        <input name="name" tupe="text"  value={this.state.SingleData.name} placeholder="Enter your name"  onChange={this.handleChange} />
                        <input name="lname" tupe="text"  value={this.state.SingleData.lname} placeholder="Enter your name"  onChange={this.handleChange} />
                        <input name="email" tupe="text" value={this.state.SingleData.email} placeholder="User name"  onChange={this.handleChange} />
                        <input name="add" tupe="text" value={this.state.SingleData.add} placeholder="website"  onChange={this.handleChange} />
                        <input name="phone" tupe="text" value={this.state.SingleData.phone} placeholder="phone"  onChange={this.handleChange} />
                        <div className="text-center pt-3">
                            <button className="btn btn-primary" type="submit" >Submit</button>
                        </div>
                    </form>
                </div>

            </>
        )
    }
}

export default UserEdit;



