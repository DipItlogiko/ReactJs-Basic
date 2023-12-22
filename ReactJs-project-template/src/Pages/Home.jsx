import React from 'react'
import { useNavigate } from 'react-router-dom'  /////akhane amra amader ReactRouter package jei package take amra install korechi amader project ar moddhe routing ar kaj korar jonno oi package ar moddhe theke useNavigate hook take import korechi redirect korar jonno

function Home() {
    const navigate = useNavigate() ////akhane amader  useNavigate hook take call kore navigate variable ar moddhe store kore diyechi
    return (
        <div>
            <h1>Home Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illum pariatur nihil harum enim
                dolorum vitae itaque qui eius ea molestiae velit id quaerat at aut eligendi minima quos, ex consequuntur
                atque quam repudiandae! Modi optio quos, aspernatur veniam cum quas? Fuga delectus minus eum quisquam
                rem tempore sapiente amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima non, maiores veritatis a deserunt molestias! Sapiente illum iure eaque tempore laborum temporibus totam consequuntur, quae corrupti, nulla, perspiciatis nobis est!
            </p>

            <button onClick={()=>{navigate("/")}}>Go To Landing Page</button>  {/* jokhon eee amader ai Go To Landing Page ai button a click kora hobe tokon eee amader onClick Event ta fire hobe and onClick Event take listen korbe amader inline functional approch...and ai inline functional approch ar moddhe amader navigate variable jar moddhe amader useNavigate() hook take store kore rekhechi oi navigate variable take call kore ( ) ar moddhe path ta bole diyechi "/" */}
        </div>
    )
}

export default Home
