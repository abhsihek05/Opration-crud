import React from 'react';
import '../AllCss/UserAdd.css';


class UserEdit extends React.Component {
    constructor(props) {
        super(props);

    }
    handleSubmit = (e)=>{
        e.preventDefault();
    }    
    render() {
        return (
            <>
                <h2 className="text-center p-3">this is the UserEdit page is here</h2>
                <div class="mb-3 w-50 main-useradd-div">
                    <form onSubmit={this.handleSubmit}>
                    <input name="name" tupe="text" placeholder="Enter your name" />  
                    <input name="email" tupe="text" placeholder="User name" />   
                    <input name="phone" tupe="text" placeholder="Password" />  
                    <input name="website" tupe="text" placeholder="Phone" />   
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