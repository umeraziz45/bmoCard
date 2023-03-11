import React from "react";
import pic from '../assets/203430.jpg'

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <img src={pic} alt="" />
      <div className="name">
      <h2>BMO</h2>
      <p className="title">Robot</p>
      <p>bmo.website</p>
      </div>
      <div className="social-media">
        <button className="btn"> <span></span> Email</button>
        <button className="btn btn-twitter"> <span></span> Linkedin</button>
      </div>
    </div>
  )
}