import React from 'react'
import {BsTwitter, BsInstagram, BsGithub} from 'react-icons/bs';

function SocialMedia() {
  return (
    <div className="app__social">
     <div>
       <BsInstagram/>
    </div>
    <div>
        <BsTwitter/>
    </div>
    <div>
        <BsGithub/>
    </div>
   </div>
  )
}

export default SocialMedia