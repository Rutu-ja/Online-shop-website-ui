import React, { Component } from 'react'
import './headphone.css'
import myImg from '../Assets/Image_headphone'


class Boots extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Details: [
                { id: 101, img: myImg.img7, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 102, img: myImg.img8, type: "Aesthetic", title: "Always dressed to kill!", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 103, img: myImg.img9, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 101, img: myImg.img10, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 102, img: myImg.img11, type: "Aesthetic", title: "Always dressed to kill!", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
                { id: 103, img: myImg.img12, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" }
            
            ]
        }
    }

    render() {
        const { Details } = this.state
        return (
            <div>
                <div class="wrapper">
                <div className='grid grid-cols-3'>
                    {Details.length > 0 && Details.map((data, id) => {
                        return (
                            <div class="card">
                                <img src={data.img} alt="Text that describes the imaged so screen readers can read this text." class="hide-small-down" />
                                <div class=" hide-medium-down"></div>
                                <div class="content">
                                    <h3><a href="#">{data.title}</a></h3>
                                    <p>{data.describe}</p>
                                </div>
                                <button className=' text-black  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1 my-3'>Add to Whislist</button>
                                <button className=' text-black  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1 my-3'>Add to Cart</button>
                            </div>
                        )
                    }
                    )
                }
            </div>
            </div>
            </div>
        )
    }
}
export default Boots
