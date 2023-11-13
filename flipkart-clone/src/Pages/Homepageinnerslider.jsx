// import React from 'react'
import React, { forwardRef, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Css/Homepageinnerslider.css";
//flipkart-clone\src\Css\Homepageinnerslider.css

// import required modules
import { FreeMode, Pagination } from "swiper";

const Homepageinnerslider = () => {
  return (

    <div>
    <div  style={{display:"flex",marginTop:"10px",gap:"10px"}}>

    <div className="seconddiv">
      {/* <div className="div0"> */}
      <div className="div1">

    <h4 className="h1">Best Of Electronics</h4>
    <button className='button2'>
        {/* <a href='#'> */}
          
          View All
          
          {/* </a> */}
    </button>
    </div>
    <div>

    <img 
    
    // style={{height:"300px",width:"350px"}}
    className="partial"
    src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" alt="" />
    </div>
</div>

    <Swiper style={{padding:"20px",marginTop:"20px",cursor:"pointer"}}
        slidesPerView={3}
        // style={{}}
        spaceBetween={50}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/200/200/kokdci80/dslr-camera/v/e/x/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70"  alt="" />
          </div>
            <div>
            <h4>Top mirrorless camera</h4>
            <p>Shop Now</p>
            <p>Canon,Sony,Fujifilm</p>
            </div>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/200/200/ko8xtow0/monitor/t/a/y/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70"  alt="" /><br/>
          </div>
            <div>
            <h4>Monitors</h4>
            <p>From 7499</p>
            <p>Lenovo</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"  alt="" /><br/>
          </div>
            <div>
            <h4>Printer</h4>
            <p>From 3999</p>
            <p>HP</p>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70"  alt="" /><br/>
          </div>
            <div>
            <h4>Monitors</h4>
            <p>9990</p>
            <p>SAMSUNG</p>
            </div>
            </div>
        </SwiperSlide>



        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70"  alt="" /><br/>
          </div>
            <div>
            <h4>Projectors</h4>
            <p>From 9990</p>
            <p>ZEBRONICS</p>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/s/g/u/-original-imagzrf84gyqeste.jpeg?q=70"  alt="" /><br/>
          </div>
            <div>
            <h4>Monitors</h4>
            <p>From 6599</p>
            <p>Acer</p>
            </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70"  alt="" /><br/>
          </div>
            <div>
            <h4>DSLR CAMERA</h4>
            <p>4599</p>
            <p>CANON,PIXEL</p>
            </div>
            </div>
        </SwiperSlide>




        {/* ////////////////////////////////////////////////////// */}


        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kUNwQHYBpbpiFYNXvJe3poG_Q62qdeeZh77p3tc0YQ&usqp=CAU&ec=48665698"  alt="" /><br/>
          </div>
            <div>
            <h4>DSLR CAMERA</h4>
            <p>4599</p>
            <p>CANON,PIXEL</p>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/450/400/kp5sya80/mixer-grinder-juicer/6/q/6/4-jar-longway-original-imag3ggphyrhutr7.jpeg?q=90&crop=false"  alt="" /><br/>
          </div>
            <div>
            <h4>DSLR CAMERA</h4>
            <p>4599</p>
            <p>CANON,PIXEL</p>
            </div>
            </div>
        </SwiperSlide>





        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/450/400/ksez24w0/otg-new/y/w/k/250-zephire-30-l-kutchina-30-original-imag5zhyqdz2vyj3.jpeg?q=90&crop=false"  alt="" /><br/>
          </div>
            <div>
            <h4>DSLR CAMERA</h4>
            <p>4599</p>
            <p>CANON,PIXEL</p>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/400/400/l47cu4w0/hand-blender/q/r/y/-original-imagf5hbkckugsbj.jpeg?q=90"  alt="" /><br/>
          </div>
            <div>
            <h4>DSLR CAMERA</h4>
            <p>4599</p>
            <p>CANON,PIXEL</p>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim1.flixcart.com/image/300/300/kmuxevk0/electric-cooker/p/8/c/prwo-2-8-2-prwo-2-8-2-prestige-original-imagfnycbyf93jgh.jpeg?q=90&crop=false"  alt="" /><br/>
          </div>
            <div>
            <h4>DSLR CAMERA</h4>
            <p>4599</p>
            <p>CANON,PIXEL</p>
            </div>
            </div>
        </SwiperSlide>




        <SwiperSlide>
          <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

          
          <div >

            <img className="img1" src="https://rukminim2.flixcart.com/image/850/1000/kcz4rrk0/hand-blender/f/7/r/nova-nhm-2109-7-speed-nhm-2109-7-speed-original-imaftzpbv2ndhe5n.jpeg?q=20"  alt="" /><br/>
          </div>
            <div>
            <h4>DSLR CAMERA</h4>
            <p>4599</p>
            <p>CANON,PIXEL</p>
            </div>
            </div>
        </SwiperSlide>
       
      </Swiper>

      {/* </div> */}
      <div className="lastdiv" >

      
      <div>
            <img style={{padding:"5px",width:"300px",height:"400px",position:"relative",alignContent: "flex-end"}} src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/f6ca031cbd39d666.jpg?q=70" alt="" />
        </div>
        </div>
    </div>





{/* 22222222222222222222222222222222222 */}


   
<div className="seconddiv" style={{display:"flex",marginTop:"10px",gap:"10px"}}>

<div className="trycatch">
  {/* <div className="div0"> */}
  <div className="div1">

<h4 className="h1">End Of Big Billion Days</h4>
<button className='button2'>
    {/* <a href='#'> */}
      
      View All
      
      {/* </a> */}
</button>
</div>
<div>

<img 

//  style={{border:"2px solid red"}}
className="partial"
src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90" alt="" />
</div>
</div>

<Swiper style={{padding:"20px",marginTop:"20px",cursor:"pointer"}}
    slidesPerView={3}
    // style={{}}
    spaceBetween={20}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70"  alt="" />
      </div>
        <div>
        <h4>Top mirrorless camera</h4>
        <p>Shop Now</p>
        <p>Canon,Sony,Fujifilm</p>
        </div>
        </div>
    </SwiperSlide>
   
    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/kc3p30w0/headphone/i/h/z/k52-akg-original-imaftb5hptnuajfu.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Monitors</h4>
        <p>From 7499</p>
        <p>Lenovo</p>
        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Printer</h4>
        <p>From 3999</p>
        <p>HP</p>
        </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Monitors</h4>
        <p>9990</p>
        <p>SAMSUNG</p>
        </div>
        </div>
    </SwiperSlide>



    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Projectors</h4>
        <p>From 9990</p>
        <p>ZEBRONICS</p>
        </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Monitors</h4>
        <p>From 6599</p>
        <p>Acer</p>
        </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    


    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/ke1pnrk0/top/p/p/z/xl-tttp003846-tokyo-talkies-original-imafutjsuhhacuev.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>





    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/450/400/ksez24w0/otg-new/y/w/k/250-zephire-30-l-kutchina-30-original-imag5zhyqdz2vyj3.jpeg?q=90&crop=false"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/xif0q/backpack/9/s/f/10-anti-theft-backpack-with-usb-charging-port-laptop-office-original-imagqp4rfgmayngm.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/xif0q/top/s/x/j/l-mi01-sonic-fashion-original-imagkn92fmgkwtek.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>
   
  </Swiper>

  {/* </div> */}
 
</div>



{/* 333333333333333333333333333333333333333333333333333333333333 */}

<div className="seconddiv" style={{display:"flex",marginTop:"10px",gap:"10px"}}>

<div className="trycatch">
  {/* <div className="div0"> */}
  <div className="div1">

<h4 className="h1">Sports, Healthcare & more</h4>
<button className='button2'>
    {/* <a href='#'> */}
      
      View All
      
      {/* </a> */}
</button>
</div>
<div>

<img 

//  style={{border:"2px solid red"}}
className="partial"
src="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90" alt="" />
</div>
</div>

<Swiper style={{padding:"20px",marginTop:"20px",cursor:"pointer"}}
    slidesPerView={3}
    // style={{}}
    spaceBetween={20}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/jxz0brk0/stuffed-toy/n/t/s/4-feet-pink-very-beautiful-best-quality-for-special-gift-125-13-original-imafgv92puzkdytg.jpeg?q=70"  alt="" />
      </div>
        <div>
        <h4>Top mirrorless camera</h4>
        <p>Shop Now</p>
        <p>Canon,Sony,Fujifilm</p>
        </div>
        </div>
    </SwiperSlide>
   
    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/kc3p30w0/headphone/i/h/z/k52-akg-original-imaftb5hptnuajfu.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Monitors</h4>
        <p>From 7499</p>
        <p>Lenovo</p>
        </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/klzhq4w0/jam-spread/w/q/u/510-chocolate-peanut-butter-crunchy-510g-jar-nut-butter-original-imagyzpqqfaguxny.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Printer</h4>
        <p>From 3999</p>
        <p>HP</p>
        </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Monitors</h4>
        <p>9990</p>
        <p>SAMSUNG</p>
        </div>
        </div>
    </SwiperSlide>



    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/acoustic-guitar/e/y/y/dd-380c-blk-jixing-original-imaeff94e9tczafp.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Projectors</h4>
        <p>From 9990</p>
        <p>ZEBRONICS</p>
        </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/k7w8eq80/two-wheeler-tyre/v/y/s/90-90-12-106061-milaze-tl-54j-sw-ceat-original-imafqyx5tnfraaxh.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>Monitors</h4>
        <p>From 6599</p>
        <p>Acer</p>
        </div>
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    


    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/ke1pnrk0/top/p/p/z/xl-tttp003846-tokyo-talkies-original-imafutjsuhhacuev.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>





    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/450/400/ksez24w0/otg-new/y/w/k/250-zephire-30-l-kutchina-30-original-imag5zhyqdz2vyj3.jpeg?q=90&crop=false"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/xif0q/backpack/9/s/f/10-anti-theft-backpack-with-usb-charging-port-laptop-office-original-imagqp4rfgmayngm.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>




    <SwiperSlide>
      <div style={{display:"grid",gridTemplateColumns:"repeat(1,1fr)"}}>

      
      <div >

        <img className="img2" src="https://rukminim1.flixcart.com/image/200/200/xif0q/top/s/x/j/l-mi01-sonic-fashion-original-imagkn92fmgkwtek.jpeg?q=70"  alt="" /><br/>
      </div>
        <div>
        <h4>DSLR CAMERA</h4>
        <p>4599</p>
        <p>CANON,PIXEL</p>
        </div>
        </div>
    </SwiperSlide>
   
  </Swiper>

  {/* </div> */}
 
</div>












    </div>
  )
}

export default Homepageinnerslider



//src=""