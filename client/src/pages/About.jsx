import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const About = () => {
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">

      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#b33939] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Welcome to Patronage!</h1>
      </div>
      {/* <br /> */}
      <br />

      {/* <p style={{fontSize : "23px", color:"grey"}}>Welcome to Patronage!
      </p> */}
      <br />
      <p style={{fontSize : "23px", color:"grey"}}>A Web3 Crowdfunding Platform designed to help individuals and organizations raise funds for their projects, ideas, and causes. We believe that anyone with a dream or a passion should have the opportunity to bring their ideas to life, regardless of their financial resources.
      </p>
      <br />
      <p style={{fontSize : "23px", color:"grey"}}>We offer a user-friendly interface that makes it easy to create and manage your crowdfunding campaign, and we provide tools and resources to help you promote your campaign and reach your fundraising goals
      </p>
      <br />
      <p style={{fontSize : "23px", color:"grey"}}>We believe that web3 technology has the power to transform the way we raise and distribute funds, and we are committed to building a decentralized crowdfunding platform that empowers individuals and organizations to make a difference in the world.
      </p>
      <br />
      <p style={{fontSize : "23px", color:"grey"}}>Using our platform, you can create and manage your crowdfunding campaign entirely on the blockchain, which means that your campaign will be transparent, secure, and verifiable. We offer a range of crowdfunding options, from donation-based fundraising to equity crowdfunding, all built on top of EVM-based chains.
      </p>
      <br />
      <p style={{fontSize : "23px", color:"grey"}}>At Patronage, we are passionate about helping people make a difference in the world. We are committed to providing a transparent, secure, and efficient crowdfunding platform that empowers individuals and organizations to turn their dreams into reality. Join us today and start making a difference!
      </p>
      <br /><br />
      <p style={{fontSize : "23px", color:"grey"}}>Owned & Manged By <u><a href="https://Mastiff.Finance" target="_blank">Mastiff.Finance</a></u> | Created By <u><a href="https://twitter.com/SanketKogekar" target="_blank">Sanket Kogekar</a></u>
      </p>

      
        

    {/* <p style={{fontSize : "23px", color:"grey"}}>
    Welcome to Patronage! A Web3 Crowdfunding Platform designed to help individuals and organizations raise funds for their projects, ideas, and causes using blockchain technology. Our platform is built on the principles of decentralization, transparency, and trust, and is powered by the Ethereum blockchain.
    </p>
        <br /><p style={{fontSize : "23px", color:"grey"}}>
    Using our platform, you can create and manage your crowdfunding campaign entirely on the blockchain, which means that your campaign will be transparent, secure, and verifiable. We offer a range of crowdfunding options, from donation-based fundraising to equity crowdfunding, all built on top of the Ethereum blockchain.
    </p>
        <br /><p style={{fontSize : "23px", color:"grey"}}>
    At [Your Website Name], we believe that web3 technology has the power to transform the way we raise and distribute funds, and we are committed to building a decentralized crowdfunding platform that empowers individuals and organizations to make a difference in the world. Join us today and become a part of the web3 revolution!
    </p> */}
       
    </div>
  )
}

export default About