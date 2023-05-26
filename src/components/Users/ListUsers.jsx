import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Service from "../../services/Service";

class ListUsers extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        try {
            const res = await Service.getUsers();
            this.setState({ users: res.data });
        } catch (error) {
            console.log("Failed to fetch users:", error.message);
        }
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