import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdMarkunread } from "react-icons/md";



class User extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { users: [],Myname:"abhishek kumar" }

    }


    componentDidMount() {
        this.loadUsers();
        fetch("http://localhost:3002/users")
        .then(response => response.json())
        .then(data =>  console.log(data));
    }

    loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        const userData = result.data;
        this.setState({ users: userData });
    }

     deleteItem = async (id) => {
         await axios.delete(`http://localhost:3002/users/${id}`);
        this.loadUsers()

    }

    render() {
        return (
            <>
              <div className="container">
              <div className=" d-flex justify-content-end m-2">
               <Link to="/useradd" className="btn btn-primary">Add New</Link>
               </div>
                <table className="table text-center  " >
                    <thead>
                        <tr className="bg-dark text-light">
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Add (city)</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='fs-6'>

                    {
                            this.state.users.map((x, i)=>
                             <tr key={i}>
                                <td>{x.name}</td>
                                <td>{x.lname}</td>
                                <td>{x.email}</td>
                                <td>{x.phone}</td>
                                <td>{x.gender}</td>
                                <td>{x.add}</td>

                                <td>
                                    <Link to={`/read/${x.id}`} className="btn btn-primary border-light m-1"><MdMarkunread /></Link>
                                    <Link to={`/useredit/${x.id}`} className="btn btn-primary border-light m-1"> <MdModeEdit /></Link>
                                    <button  onClick={()=>this.deleteItem(x.id)} className="btn btn-primary border-light m-1"><MdDelete /></button>
                                </td>
                                
                            </tr>)
                        }
                    </tbody>
                </table>
              </div>
            </>
        )
    }
}

export default User;


