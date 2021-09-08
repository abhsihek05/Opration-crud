import axios from 'axios';
import React from 'react';
import '../AllCss/UserAdd.css';
import {Link} from "react-router-dom";


class Read extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            champId: this.props.match.params.id,
            match: false,
            SingleData: {},
        }


    }
    componentDidMount() {
        // console.log(this.state.champId);
        this.loadusers();
    }

    loadusers =  () => {
         fetch(`http://localhost:3002/users/${this.state.champId}`)
        .then(Response => Response.json())
        .then(data => this.setState({SingleData:data}));
        
        // const result = await axios.get(`http://localhost:3002/users/${this.state.champId}`);
        // console.log(result.data);
        // this.setState({SingleData:result.data});
    }
    render() {
        return (
            <>
                <h2 className="text-center p-3">this is the Read page is here</h2>
                <div className="container">
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                 </div>
                <div className="mb-3 w-50 main-useradd-div">
                    
                    <form >

                        <h5> # {this.state.SingleData.id}</h5>
                        <input name="name" tupe="text"  value={this.state.SingleData.name} placeholder="Enter your name" />
                        <input name="email" tupe="text" value={this.state.SingleData.username} placeholder="User name" />
                        <input name="phone" tupe="text" value={this.state.SingleData.phone} placeholder="Password" />
                        <input name="website" tupe="text" value={this.state.SingleData.website} placeholder="Phone" />
                        <div className="text-center pt-3">
                        </div>
                    </form>
                </div>

            </>
        )
    }
}

export default Read;