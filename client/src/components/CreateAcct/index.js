import React from 'react';
//import "./style.css"

const CreateAcct = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                <h1>Create a New Account!</h1>
                    <hr></hr>
                    <form>
                    <div className="form-group">
                            <label for="exampleInputFirstName">First Name</label>
                            <input type="name" className="form-control" id="exampleInputFirstName" aria-describedby="nameHelp" placeholder="John"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputLastName">Last Name</label>
                            <input type="name" className="form-control" id="exampleInputLastName" aria-describedby="nameHelp" placeholder="Doe"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputFirstName">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@example.com"></input>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateAcct;