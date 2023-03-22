import React from 'react'

function Products() {
    return (
        <div>
            <div class="hero">
                <h1 className='h1'>Shope By<strong> Category</strong> </h1>
            </div>

            <div className="container">
                <table className='w-full' >
                    <tbody>
                        <tr>
                            <td><figure>
                                <a href='/New_arraivals'>
                                    <img src="https://ielfs.com/wp-content/uploads/2015/10/article_what_is_a_Fashion_stylist_role_during_A_fashion_shoot.jpg" alt="Thumb" width="400" height="300" />
                                    <figcaption><div>Latest Trends</div></figcaption>
                                </a>
                            </figure></td>
                            <td className='' >
                                <div style={{ backgroundImage: 'linear-gradient(89deg,#99E6FF,#ABBDD6)', borderRadius: '0px 115px 0px 115px' }} className=' p-6 w-475px '>
                                    <h3 className=' text-2xl'>It’s time for</h3><h1 className=' text-3xl font-extrabold font-mono'> Most Trendy Product </h1><h3 className='text-2xl'>of year</h3>
                                    <h1 className=' text-lg'>Grab your best deals here !!</h1><h1>Check out upto 20%  discount on these brands </h1>
                                    <div >
                                        <a href='/New_arraivals'><button className=' text-white  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1'>Grab Now</button></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='' >
                                <div style={{ backgroundImage: 'linear-gradient(89deg,#99E6FF,#ABBDD6)', borderRadius: '0px 115px 0px 115px' }} className=' p-6 w-475px '>
                                    <h3 className=' text-2xl'>The </h3><h1 className=' text-3xl font-extrabold font-mono'>Best sellers </h1><h3 className='text-2xl'>for all Category are here</h3>
                                    <h1 className=' text-lg'>Special Offer for premium members</h1><h1>Check out upto 20%  discount on these brands </h1>
                                    <div >
                                        <a href='/Headphone'><button className=' text-white  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1'>Grab Now</button></a>
                                    </div>
                                </div>
                            </td>
                            <td><figure>
                                <img src="https://i.pinimg.com/736x/29/da/d9/29dad9f1d397aee688af4b7ac663b9f8.jpg" alt="Thumb" width="400" height="300" />
                                <figcaption><div>Headphones</div></figcaption>
                            </figure></td>
                        </tr>
                        <tr>
                            <td><figure>
                                <img src="https://d2hlo835aj7uqe.cloudfront.net/production/wp-content/uploads/2021/11/Holiday-2021_sneakers-under-200-blog-hero-twitter-square-1200x1200.png" alt="Thumb" width="400" height="300" />
                                <figcaption><div>Shoes</div></figcaption>
                            </figure>
                            </td>
                            <td className='' >
                                <div style={{ backgroundImage: 'linear-gradient(89deg,#99E6FF,#ABBDD6)', borderRadius: '0px 115px 0px 115px' }} className=' p-6 w-475px '>
                                    <h3 className=' text-2xl'>The </h3><h1 className=' text-3xl font-extrabold font-mono'>Best sellers </h1><h3 className='text-2xl'>for all Category are here</h3>
                                    <h1 className=' text-lg'>Special Offer for premium members</h1><h1>Check out upto 20%  discount on these brands </h1>
                                    <div >
                                        <a href='/Boot'><button className=' text-white  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1'>Grab Now</button></a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='' >
                                <div style={{ backgroundImage: 'linear-gradient(89deg,#99E6FF,#ABBDD6)', borderRadius: '0px 115px 0px 115px' }} className=' p-6 w-475px '>
                                    <h3 className=' text-2xl'>The </h3><h1 className=' text-3xl font-extrabold font-mono'>Best sellers </h1><h3 className='text-2xl'>for all Category are here</h3>
                                    <h1 className=' text-lg'>Special Offer for premium members</h1><h1>Check out upto 20%  discount on these brands </h1>
                                    <div >
                                        <a href='/Jewellary'><button className=' text-white  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1'>Grab Now</button></a>
                                    </div>
                                </div>
                            </td>
                            <td><figure>
                                <img src="https://www.accessorize.com/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-accessorize-master-catalog/default/dw2cae3eb5/images/large/21_48637399_1.jpg?sw=1140&sh=1459&sm=cut" alt="Thumb" width="400" height="300" />
                                <figcaption><div>jewellery</div></figcaption>
                            </figure></td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    )
}

export default Products
