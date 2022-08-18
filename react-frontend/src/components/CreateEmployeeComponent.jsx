import React, { Component } from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)
            this.state ={

            }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 "></div>
                            <h3 className='text-center'>Add Employee</h3>
                            <div className="card-body">
                                <form>
                                <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                </div>
                               
                                </form>
                            </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;