import React, { Component } from "react";

class LogInForm extends Component {

    state = {
        results: []
    };
    handleFormSubmit = event => {
        event.preventDefault();
        let data = {
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
    render () {
        return(
            <div>
            <form>
                <div className="container">
                    <h4>Log In</h4>
                    <hr></hr>
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
export default LogInForm;