import React, { Component } from 'react'
import './headphone.css'
import myImg from '../Assets/Image_headphone'


class Headphones extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Details: [
                { id: 101, img: myImg.img1, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 102, img: myImg.img2, type: "Aesthetic", title: "Always dressed to kill!", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 103, img: myImg.img3, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 104, img: myImg.img4, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 105, img: myImg.img5, type: "Aesthetic", title: "Always dressed to kill!", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 106, img: myImg.img6, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },  
                { id: 107, img: myImg.img4, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 108, img: myImg.img5, type: "Aesthetic", title: "Always dressed to kill!", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 109, img: myImg.img6, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" }                    
            ],
            color:'none'
        }
    }
    changecolr=()=>{
        if (this.state.color === 'none') {
          this.setState({color: 'red'});
        } else {
          this.setState({color: 'none'});
        }
      }
    render() {
        const { Details } = this.state
        return (
            <div className='wrapper'>
                <div className='headphone'>
                    {Details.length > 0 && Details.map((data, id) => {
                        return (
                            <div class="card">
                                <img src={data.img} alt="Text that describes the imaged so screen readers can read this text." class="hide-small-down" />
                                <div class=" hide-medium-down"></div>
                                <div class="content">
                                    <h3><a href="#">{data.title}</a></h3>
                                    <p>{data.describe}</p>
                                </div>
                                <button className=' text-black  py-2  px-3 relative top-1 m-1 my-3'><i class="fa fa-cart-arrow-down" aria-hidden="true" style={{fontSize:"30px"}} ></i></button>
                                <button className=' text-black  py-2  px-3 relative top-1 m-1 my-3' onClick={this.changecolr} ><i class="fa fa-heart"  aria-hidden="true" style={{color: this.state.color , fontSize:"30px"}}  ></i></button>
                           
                            </div>
                        )
                    }
                    )
                }
            </div>
            </div>
        )
    }
}
export default Headphones
