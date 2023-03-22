import React, {useEffect} from 'react'
import '../App.css'
import arrow from '../Assets/GIF/arrow.gif'
import Feedback from './Feedback';

function Home() {
    let arrayElem = [], allItens=[];
    useEffect(()=>{
        startBackImages();
        allItens = document.querySelectorAll('.back')
      
        allItens.forEach(function(element) {
          element.addEventListener('mouseover', function(){
                startImages(this.id);
            })
          element.addEventListener('mouseout', function(){
              removeImages();
            })
        })
    },[])
    function startImages(elementId) {
       let element = document.querySelector('#' + elementId);
        //styles = getComputedStyle(element)
        let imageURL = element.dataset["back"];
        let param = "url('" + imageURL + "')";
        arrayElem = document.querySelectorAll('.back');
        arrayElem.forEach(function (item) {
            item.style.backgroundImage = param;
        })
    }

    function removeImages() {
        arrayElem = document.querySelectorAll('.back');
        arrayElem.forEach(function (item) {
            item.style.backgroundImage = "url('" + item.dataset["back"] + "')";
        })
    }



    function startBackImages() {
        allItens = document.querySelectorAll(".back");
        allItens.forEach(function (block) {
            block.style.backgroundImage = "url('" + block.dataset["back"] + "')";
        })
    }

    return (
        <div>
            <section id="imageBlock">
                <div id='shadowBlock' className='flexLine'>
                    <div className="back" id="back1" data-back="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></div>
                    <div className="back" id="back2" data-back="https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></div>
                    <div className="back" id="back3" data-back="https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></div>
                    <div className="back" id="back4" data-back="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></div>
                    <div className="back" id="back5" data-back="https://images.pexels.com/photos/3775120/pexels-photo-3775120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></div>
                </div>
            </section>
            <div className=' font-mono font-semibold relative flex justify-center items-center bottom-3 text-4xl my-6'>
                <h1>Find More On Products Section</h1>
                <button className=''><a href='/Product'><img src={arrow} alt="Your SVG" height={'70px'} width={'70px'} className=' m-2' /></a></button>
            </div>
            <hr className='relative top-9 border-1 border-[#414040] w-2/3 m-auto'/>
            <Feedback/>
            
        </div>
    )
}

export default Home
