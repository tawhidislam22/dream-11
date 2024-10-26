import React from 'react';
import footImage from '../../assets/images/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-[#06091A] mt-10 pt-32'>
            <img className='mx-auto' src={footImage} alt="" />
<footer className="footer bg-base-200 text-base-content p-10 flex justify-between items-center">
  <nav className='flex flex-col'>
   <h6 className="footer-title">About us</h6>
   <p>We are a passionate team dedicated to providing the best services to our customers.</p>
    
  </nav>
  <nav className='flex flex-col'>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Services</a>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
  </nav>
  
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Subscribe to our newsletter for the latest updates.</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  </footer>
  <hr />
  <div className='p-5 text-center'>
        <a href="">@2024 Your Company All Rights Reserved.</a>
  </div>
        </div>
    );
};

export default Footer;