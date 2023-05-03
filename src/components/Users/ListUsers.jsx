import React, {Component} from 'react';
import AnimalsService from "../../services/AnimalsService";
import {Link} from "react-router-dom";

class ListUsers extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() { //get immediately called after component is mounted
        AnimalsService.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Users</h2>
                <Link className="btn btn-primary" to="/add-user">Add User</Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>
                        <th>About me</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key = {user.id}>
                                    <td> {user.username} </td>
                                    <td> {user.password}</td>
                                    <td> {user.name}</td>
                                    <td> {user.surname}</td>
                                    <td> {user.email}</td>
                                    <td>{user.about_me} </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListUsers;