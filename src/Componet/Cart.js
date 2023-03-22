import React from 'react'
import bin from '../Assets/GIF/bin.gif'
function Cart() {
    return (
        <div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-black">
                    <thead class="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="px-6 py-4 font-medium text-black">
                                Shoes
                            </th>
                            <td className="px-6 py-4">
                                white
                            </td>
                            <td className="px-6 py-4">
                                sports
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                            <td className="px-6 py-4">
                                {/* <button className=' text-black  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1 my-3'>Remove From Cart</button> */}
                                <button><img src={bin} width={'40px'} height={'40px'}></img></button>
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" className="px-6 py-4 font-medium text-black">Total item:1</td>
                            <td></td>
                            <td></td>
                            <td>Total Price : $99</td>
                        </tr>
                    </tbody> 
                </table>
            </div>

        </div>
    )
}

export default Cart
