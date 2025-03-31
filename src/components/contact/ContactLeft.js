import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaSkype, FaWhatsapp } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Nihal Das</h3>
        <p className="text-lg font-normal text-gray-400">
          Freelacer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Reach out for inquiries or projects. Message, email, or call — I respond promptly to all communications.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 97074 18307</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">dasnihal05@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">mem24013@tezu.ac.in</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/nihal-das-7288b8205/" target="_blank" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          <a href="https://www.linkedin.com/in/nihal-das-7288b8205/" target="_blank" className="bannerIcon">
            <FaSkype />
          </a>
          <a
          href="https://wa.me/+919707418307" 
          target="_blank" 
          rel="noopener noreferrer" 
           className="bannerIcon">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft