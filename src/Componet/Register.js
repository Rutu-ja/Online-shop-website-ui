import React, { Component } from 'react'
import '../App.css'
import '../my_scss.scss'

class register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            password: '',
            REpassword: '',
            email:''
        }
    }
    inputChangerHandler = (e) => {
        const { name, type, value } = e.target;

        this.setState({
            [name]: value,
        })
        console.log(type)
        console.log(name)
        console.log(value)
    }
    SubmitData = (e) => {
        e.preventDefault();
        if (!this.state.fname.match("[a-zA-z ]{3,15}")) {
            alert("Name must contain alphabets only");
            return false;
        }
        if (!this.state.lname.match("[a-zA-z ]{3,15}")) {
            alert("Name must contain alphabets only");
            return false;
        }
        alert("success")
    }


    render() {
        const { fname, lname,password,REpassword,email } = this.state
        return (
            <div>
                <div class="form_wrapper">
                    <div class="form_container">
                        <div class="title_container">
                            <h2> Registration Form</h2>
                        </div>
                        <div class="row clearfix">
                            <div class="">
                                <form  onSubmit={this.SubmitData} >
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                        <input type="email" name="email" placeholder="Email" required onChange={this.inputChangerHandler} value={email} />
                                    </div>
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                        <input type="password" name="password" placeholder="Password" required  onChange={this.inputChangerHandler} value={password}/>
                                    </div>
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                        <input type="password" name="REpassword" placeholder="Re-type Password" required onChange={this.inputChangerHandler} value={REpassword} />
                                    </div>
                                    <div class="row clearfix">
                                        <div class="col_half">
                                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                <input type="text" name="fname" placeholder="First Name" onChange={this.inputChangerHandler} value={fname} />
                                            </div>
                                        </div>
                                        <div class="col_half">
                                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                                <input type="text" name="lname" placeholder="Last Name" required onChange={this.inputChangerHandler} value={lname} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="input_field radio_option">
                                        <input type="radio" name="radiogroup1" id="rd1" />
                                        <label for="rd1">Male</label>
                                        <input type="radio" name="radiogroup1" id="rd2" />
                                        <label for="rd2">Female</label>
                                    </div>
                                    <div class="input_field select_option">
                                        <select >
                                            <option>Select a country</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                        <div class="select_arrow"></div>
                                    </div>
                                    <div class="input_field checkbox_option">
                                        <input type="checkbox" id="cb1" />
                                        <label for="cb1">I agree with terms and conditions</label>
                                    </div>
                                    <div class="input_field checkbox_option">
                                        <input type="checkbox" id="cb2" />
                                        <label for="cb2">I want to receive the Email and messages</label>
                                    </div>
                                    <input class="button" type="submit" value="Register" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default register
