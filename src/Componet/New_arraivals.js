import React, { Component } from 'react'
import '../App.css';
import myImg from '../Assets/Images_new';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cart from '../Assets/GIF/shopping-cart.gif'
import '../my_scss.scss'
import Whislist from './Whislist';
import Cart from './Cart';
import axios from 'axios';

class New_arraivals extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Details: [
        { id: 101, img: myImg.img1, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
        { id: 102, img: myImg.img2, type: "Aesthetic", title: "Always dressed to kill!", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" },
        { id: 103, img: myImg.img3, type: "Ethanic", title: "My face not my heart", describe: "Description Product tell me how to change playlist height size like 600px in html5 player. player good work now check this link", price: "499.000" }
      ],
      id:"",
      type:"",
      title:"",
      price:"",
    }
  }

  fetchdata = () => {
    axios.get(`http://localhost:8888/Wishcart`).then((res) => {
        console.log(res)
        // this.setState({ Details: res.data })
    })
}

  buy(data) {
    let Add={
      id: data.id,
      type: data.type,
      title: data.title,
      price: data.price
    };
    // console.log(data.id)
    // axios.get(`http://localhost:8888/Wishcart/${Add.id}`).then((res)=>{
    //   alert("Item Added To Cart Successfully!! Check out the cart...");
    //   this.fetchdata();
    //   console.log(Add.id)
    // })
    axios.post(`http://localhost:8888/Wishcart`,Add).then(()=>{
      window.alert("Recored Added Successfully")
      window.location="/Whishlist"
    }
    )
  }

  render() {
    const { Details } = this.state
    return (
      <>
        <div className='relative p-20'>
          <section class="xbox flex justify-center ">
            {/* <div class="content">
            <h2>Xbox Game Pass Ultimate</h2>
            <p>Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality
              console and PC games. Play together with friends and discover your
              next favorite game.</p>
            <a href="#" class="btn" className=' text-white  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-full hover:bg-purple-500 p-2'>
              Join Now <i class="fas fa-chevron-right"></i>
            </a>
          </div> */}
            <figure className='relative top-12 '>
              <div class="neon_border">
                <span>
                  <img src="http://cdn.shopify.com/s/files/1/0476/2550/2872/collections/25b338143b6a65030ff21e93f8d722d36393396081fa3d6bf8bbae99818b47d8_1200x1200.jpg?v=1629903777" alt="Thumb" width="400" height="300" />
                </span>
              </div>
              <figcaption></figcaption>
            </figure>
          </section>
        </div>
        <div className=' relative bottom-40 '>
          <div className=' p-14 m-2 grid grid-cols-3'>
            {Details.length > 0 && Details.map((data, id) => {
              return (
                <div className=' m-5 p-1 '>
                  <div class="shell">
                    <div class="wsk-cp-product">
                      <div class="wsk-cp-img">
                        <img src={data.img} alt="Product" class="img-responsive" />
                      </div>
                      <div class="wsk-cp-text">
                        <div class="category">
                          <span>{data.type}</span>
                        </div>
                        <div class="title-product">
                          <h3>{data.title}</h3>
                        </div>
                        <div class="description-prod">
                          <p>{data.describe}</p>
                        </div>
                        <div class="card-footer">
                          <div class="wcf-left"><span class="price">{data.price}</span></div>
                          <div class="wcf-right"><a href="#" class="buy-btn"><img src={cart} className='w-9 h-9' onClick={()=>this.buy(data)}></img></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
        <div className="flex justify-center relative bottom-72">
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-2xl font-extrabold font-mono mb-2">Premium Membership</h5>
              <p className="text-gray-700 text-base mb-4">
                To keep updated with latest Trends join premium membership now...
              </p>
              <button className="neon_border p-8 m-8">Join Now</button>
            </div>
          </div>
        </div>
      </>
    )

  }
}

export default New_arraivals
