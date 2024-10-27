import React from 'react';
import footImage from '../../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#06091A] mt-10 pt-40'>
            <img className='mx-auto' src={footImage} alt="" />
<footer className=" footer bg-base-200 text-base-content p-10 flex flex-col md:flex-row justify-between ">
  <nav className='md:w-1/4 flex flex-col'>
   <h6 className="footer-title text-lg text-[#FFFFFF] font-bold mb-3">About us</h6>
   <p className='text-base text-[#FFFFFF99] font-normal'>We are a passionate team dedicated to providing the best services to our customers.</p>
    
  </nav>
  <nav className='flex flex-col '>
    <h6 className="footer-title text-lg text-[#FFFFFF] font-bold mb-3">Quick Links</h6>
    <a className="link link-hover text-base text-[#FFFFFF99] font-normal mb-2">Home</a>
    <a className="link link-hover text-base text-[#FFFFFF99] font-normal mb-2">Services</a>
    <a className="link link-hover text-base text-[#FFFFFF99] font-normal mb-2">About</a>
    <a className="link link-hover text-base text-[#FFFFFF99] font-normal mb-2">Contact</a>
  </nav>
  
  <form>
    <h6 className="footer-title text-lg text-[#FFFFFF] font-bold mb-4">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-base text-[#FFFFFF99] font-normal mb-3">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join flex mt-6">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item text-base text-[#FFFFFF99] font-normal px-6 py-3 rounded-l-lg" />
        <button className="btn btn-primary join-item px-6 py-3 rounded-r-lg text-base text-[#131313] font-semibold bg-gradient-to-r from-purple-200 to-orange-300">Subscribe</button>
      </div>
    </fieldset>
  </form>
  </footer>
  <hr />
  <div className='p-5 text-center text-base text-[#FFFFFF99] font-normal'>
        <a href="">@2024 Your Company All Rights Reserved.</a>
  </div>
        </div>
    );
};

export default Footer;