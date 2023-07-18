import React from 'react'
import Navbar from '../components/Navbar'
import img1 from '../../public/images/4.png'
import img2 from '../../public/images/1.webp'
import img3 from '../../public/images/2.webp'
import Image from 'next/image'

import style from '../../styles/Image.module.css'

const ImageOptimation = () => {

    const images=[img1,img2,img3,img1,img2,img3,img1,img2,img3]

  return (
    <div>
        <Navbar />
        <h5>Loaded Images</h5>
                <div>
        {/* <Image src={img1} alt="plant" width="280" height="420" /><br />
        <Image src={img2} alt="plant" width="280" height="420" /><br />
        <Image src={img3} alt="plant" width="280" height="420" /> */}

        </div>
       <div className={style.imagesdiv}>
       {
            images && images.map((img,i)=>{
                return <div key={i} className={style.image}>
                    <Image  src={img} alt="plant" width="280" height="300" /><br />
                </div>
            })
        }
       </div>
        
        
    </div>
  )
}

export default ImageOptimation