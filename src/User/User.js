import React from 'react';
import UserEdit from './UserEdit';
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
    }
    loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        const userData = result.data;
        this.setState({ users: userData });
    }

     deleteItem = async id => {
         await axios.delete(`http://localhost:3002/users/${id}`);
        this.loadUsers()
        // var x = this.state.users;
        // x.splice(i, 1);
        // console.log(i);
        // this.setState({users:x});
    }



    render() {
        return (
            <>
              <div className="container">
              <div className=" d-flex justify-content-end m-2">
               <Link to="/useradd" className="btn btn-primary">Add New</Link>
               </div>
                <table className="table " >
                    <thead>
                        <tr className="bg-dark text-light">
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">website</th>
                            <th scope="col">Buttons</th>
                        </tr>
                    </thead>
                    <tbody>

                                              {
                            this.state.users.map((x, i)=>
                             <tr key={i}>
                                <td>{i+1}</td>
                                <td>{x.name}</td>
                                <td>{x.username}</td>
                                <td>{x.website}</td>
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