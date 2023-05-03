import { useState } from "react";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [username, usernamechange] = useState("");
    const [name, namechange] = useState("");
    const [surname, surnamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [about_me, about_mechange] = useState("");
    const [gender, genderchange] = useState(0);
    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { username, name, password, email, gender, about_me };
            fetch("http://localhost:8000/api/v1/addUser", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                console.log('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
               console.log('Failed :' + err.message);
            });

    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h3>User Registeration</h3>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Username <span className="errmsg">*</span></label>
                                        <input value={username} onChange={e => usernamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Surname</label>
                                        <input value={surname} onChange={e => surnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>About_me</label>
                                        <input value={about_me} onChange={e => about_mechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(2)} name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(2)} name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <button className="btn btn-danger"><Link to={'/login'}></Link>Close</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;