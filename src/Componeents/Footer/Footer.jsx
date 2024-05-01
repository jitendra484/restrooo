import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="row text-center py-5">
                <div className='col-lg-4'>
                  <h2>Our Services</h2>
                  <p>Delicious Food</p>
                  <p>Healthy Food</p>
                  <p>Affortable Price</p>
                  <p>Home Delivery</p>

                </div>
                <div className='col-lg-4'>
                  <h2>Get In Touch</h2>
                  <ul className='text-start  '>
                    <li><i className="ficon bi bi-envelope-open-fill "></i>Foodmandu24@gmail.com</li>
                    <li ><i class="bi bi-telephone-fill"></i>9800000000</li>
                    <li><i class="bi bi-geo-alt-fill "></i>Nepal</li>
                    
                  </ul>
                 
                </div>

                <div className='col-lg-4'>
                  <h2>Our Social Media</h2>
                  <div className='ficon'>
                  <ul className=" d-flex gap-4">
        <li><a href="https://www.facebook.com/"><i className="bi bi-facebook fs-4 " /></a></li>
        <li><a href="https://www.facebook.com/"><i className="bi bi-instagram fs-4" /></a></li>
        <li><a href="https://www.facebook.com/"><i className="bi bi-linkedin fs-4" /></a></li>
        <li><a href="https://www.facebook.com/"><i className="bi bi-twitter fs-4" /></a></li>
      </ul>
                 

                </div>
                </div>

            </div>
            <div className="d-flex justify-content-center border border-top-5">
              <p>Copyright © 2022 All rights reserved foodmandu</p>
            </div>
        </div>

    </div>
  )
}

export default Footer