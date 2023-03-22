import React, { Component } from 'react'
import axios from 'axios'

export default class Whislist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            Wishcart:[],
            id:"",
        }
    }
    
    render() {
        return (
            <div>
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
                                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a> */}
                                <button className=' text-black  py-2 ring-2 ring-blue-500/50 bg-[#99e6ff] rounded-md hover:bg-purple-500 px-3 relative top-1 m-1 my-3'>Buy now</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
                    </div>
            </div>
        )
    }
}
