import React from 'react'
import logo from '../../Assets/Re-used/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, } from '@fortawesome/free-brands-svg-icons';
import linkedin from "../../Assets/Re-used/linkedin.png"
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <div className='h-[258px]  bg-[#000B15] text-white flex items-center justify-center'>

      <div>

      <a href="/"><img src={logo} className='mx-auto' /></a>

        <div className='flex gap-10 sm:gap-16 justify-center my-8'>

        <a href="https://twitter.com/terra_grow" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className='w-[23.29px] h-[23.18px] hover:-translate-y-2 duration-500 ease-in-out cursor-pointer' />
          </a>

          <a href="https://www.facebook.com/terragrowcorporation" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className='w-[23.29px] h-[23.18px] cursor-pointer hover:-translate-y-2 duration-500 ease-in-out' />
          </a>

          <a href="https://www.instagram.com/official_terragrow?igshid=OGQ5ZDc2ODk2ZA" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className='w-[23.29px] h-[23.18px] cursor-pointer hover:-translate-y-2 duration-500 ease-in-out' />
          </a>


          <a href="https://www.linkedin.com/company/terragrow/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className='w-[23.29px] h-[23.18px] cursor-pointer hover:-translate-y-2 duration-500 ease-in-out' />
</a>

        </div>

        <p className="text-center text-base font-normal font-sans leading-12">2024</p>


      </div>

    </div>
  )
}

export default Footer
