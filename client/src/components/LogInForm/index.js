import React from 'react';
//import "./style.css"

const LogInForm = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h1>Log in to your account</h1>
                    <hr></hr>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                        <small id="emailHelp" className="form-text text-muted">Don't have an accout? <a href="/">Sign up here</a></small>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default LogInForm;