import React, {useState, useEffect} from 'react'
import  heb from './gol-heb.jpg'
import  heb1 from './gol-heb-1.jpg'
import  heb2 from './gol-heb-2.jpg'
import  heb3 from './gol-heb-3.jpg'
import  heb4 from './gol-heb-4.jpg'
import  heb5 from './gol-heb-5.jpg'
import  heb6 from './gol-heb-6.jpg'

import ar from './gol-ar.jpg'
import ar1 from './gol-ar-1.jpg'
import ar2 from './gol-ar-2.jpg'
import ar3 from './gol-ar-3.jpg'
import ar4 from './gol-ar-4.jpg'
import ar5 from './gol-ar-5.jpg'
import ar6 from './gol-ar-6.jpg'


const Mapper = () => {
    const [img, setImg] = useState(heb)

//    useEffect(()=> {

//    },[changeArea()])
    
//     const changeArea = (num) => {
//        setImg(`${heb}${num}`)
       
//     }
return (
    <section>
        <h1>Golan Heights Travel  </h1>           
            <article id="post-982" class="post-982 page type-page status-publish hentry">
                <div class="hideOnMobile">
					<img hidefocus="true" class="size-full wp-image-968 aligncenter" src={img} alt="" usemap="#Map" />
				</div>
                <map name="Map">
                    <area shape="poly" coords="229,123,220,123,91,455,190,415,225,207" href="#" onMouseOver={()=> setImg(heb3)}/>
                    <area shape="poly" coords="302,493,286,456,168,429,95,470,237,769" href="#" onMouseOver={()=> setImg(heb6)}/>
                    <area shape="poly" coords="288,454,188,425,210,314,314,320,324,359" href="#" onMouseOver={()=> setImg(heb5)}/>
                    <area shape="poly" coords="319,318,219,312,225,220,316,233" href="#" onMouseOver={()=> setImg(heb4)}/>
                    <area shape="poly" coords="310,240,300,109,231,118,227,213" href="#" onMouseOver={()=> setImg(heb2)}/>
                    <area shape="poly" coords="311,223,363,180,341,94,300,105" href="#" onMouseOver={()=> setImg(heb1)}/>
                    <area shape="rect" coords="347,411,825,750" href="#" onMouseOver={()=> setImg(heb)}/>
                    <area shape="rect" coords="410,207,562,239" href="#" onMouseOver={()=> setImg(heb1)}/>
                    <area shape="rect" coords="410,244,562,275" href="#" onMouseOver={()=> setImg(heb2)}/>
                    <area shape="rect" coords="412,281,562,307" href="#" onMouseOver={()=> setImg(heb3)}/>
                    <area shape="rect" coords="410,308,560,339" href="#" onMouseOver={()=> setImg(heb4)}/>
                    <area shape="rect" coords="411,340,562,371" href="#" onMouseOver={()=> setImg(heb5)}/>
                    <area shape="rect" coords="413,375,562,405" href="#" onMouseOver={()=> setImg(heb6)}/>
                </map>
            </article>
    </section>
    )
}

export default Mapper




    
   





