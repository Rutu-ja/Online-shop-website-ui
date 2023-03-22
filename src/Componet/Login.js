import React, { Component } from 'react'
import backgound_image from '../Assets/Images/LoginBackGroung.jpg'
import '../App.css'


class register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            uname: '',
            password: ''
        }
    }
    inputChangerHandler = (e) => {
        const { name, type, value } = e.target;

        this.setState({
            [name]: value
        })
        console.log(type)
        console.log(name)
        console.log(value)
    }
    SubmitData = (e) => {
        e.preventDefault();
        if (!this.state.uname.match("[a-zA-z ]{3,15}")) {
            alert("Enter Proper Data");
            return false;
        }
        alert("success")
    }


    render() {
        const { uname, password } = this.state
        return (
            <div className='relative -top-3'>
                <div className='w-full h-screen  flex justify-center items-center  ' style={{ backgroundImage: 'linear-gradient(89deg,#99E6FF,#ABBDD6)' }}  >

                    <div className=' text-black w-4/12 h-auto bg-[#ABBDD6] bg-opacity-70 rounded-3xl main_shadow'>
                        <form onSubmit={this.SubmitData}>
                            <table className=' m-auto'>
                                <tr>
                                    <td>
                                        <label>User Name:</label>
                                    </td>
                                    <td>
                                        <input type="text" name="uname" placeholder='Enter Your Name' onChange={this.inputChangerHandler} value={uname} className='form_input text-black' />
                                </td>
                                </tr>
                                <tr>
                                    <td>
                                    <label>Password:</label>
                                    </td>
                                    <td>
                                        <input type='password' placeholder='Enter User Name' name='password' className='form_input text-black' onChange={this.inputChangerHandler} value={password}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-xl shadow m-3" type='submit'>Submit</button></td>
                                    <td><button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded-xl shadow m-3" type='reset'>Reset</button></td>
                                </tr>
                            </table>
                            <div className=' font-extrabold font-mono p-3 '>
                                    <h3> New here ? <a href='/Register'>REGISTETR Now</a></h3>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default register
