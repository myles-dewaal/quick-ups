import React, { Component } from "react";
//import "./style.css"

class CreateAcct extends Component {

    state = {
        results: []
    };
    handleFormSubmit = event => {
        event.preventDefault();
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
          
        };
    };
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
            <form>
                <div className="container">
                    <h4>Create Account</h4>
                    <hr></hr>
                  
                    <div className="form-row">
                        <div className="col">
                            <input onChange={this.handleInputChange} type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" />
                        </div>
                        <div className="col">
                            <input onChange={this.handleInputChange} type="text" name="lastName" className="form-control" id="lastName" placeholder="Last Name" />
                        </div>
                        
                    </div>
                    <br />
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="text" name="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInputChange} type="text" name="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                        
                    <div className="col">
                        <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary mb-2">Submit</button>
                    </div>
                    </div>
            </form>
        </div>
        )
    }

}
export default CreateAcct;