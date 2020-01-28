import React from 'react';
const Postpickups = (props) => {
    return (
        <form>
            <div className="container">
                <div className="form-group">
                    <label for="formGroupExampleInput">Pick up address</label>
                    <input onChange={props.handleInputChange} type="text" name="storeName" className="form-control" id="storeName" placeholder="Store Name" />
                </div>
                <div className="form-group">
                    <input onChange={props.handleInputChange} type="text" name="pickUpAddress" className="form-control" id="pickUpAddress" placeholder="Street Address" />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input onChange={props.handleInputChange} type="text" name="pickUpCity" className="form-control" id="pickUpCity" placeholder="City" />
                    </div>
                    <div className="col">
                        <input onChange={props.handleInputChange} type="text" name="pickUpState" className="form-control" id="pickUpState" placeholder="State" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input onChange={props.handleInputChange} type="text" name="pickUpZip" className="form-control" id="pickUpZip" placeholder="Zip Code" />
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label for="formGroupExampleInput">Drop off address</label>
                    <input onChange={props.handleInputChange} type="text" name="userName" className="form-control" id="userName" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <input onChange={props.handleInputChange} type="text" name="dropOffAddress" className="form-control" id="dropOffAddress" placeholder="Street Address" />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input onChange={props.handleInputChange} type="text" name="dropOffCity" className="form-control" id="dropOffCity" placeholder="City" />
                    </div>
                    <div className="col">
                        <input onChange={props.handleInputChange} type="text" name="dropOffState" className="form-control" id="dropOffState" placeholder="State" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input onChange={props.handleInputChange} type="text" name="dropOffZip" className="form-control" id="dropOffZip" placeholder="Zip Code" />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input onChange={props.handleInputChange} type="text" name="payOut" className="form-control" id="payOut" placeholder="Pay Out (Minimum $15)" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput">List of merchandise</label>
                    <input onChange={props.handleInputChange} type="text" name="storeName" className="form-control" id="merchandise" placeholder="Refrigerator, Stove, Freezer" />
                </div>
                <div className="form-row">
                <div className="col">
                    <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
                </div>
            </div>
        </form>
    )
}
export default Postpickups;