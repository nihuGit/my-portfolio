import React from 'react'
import { FaFacebookF, FaSkype, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div href="https://www.linkedin.com/in/nihal-das-7288b8205/" target="_blank" className="flex gap-4">
            <a className="bannerIcon">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/nihuGit?tab=repositories" target="_blank" className="bannerIcon">
              <FaGithub />
            </a>
            <a href="skype:live:.cid.ae7477c767d8b20b?chat" target="_blank" className="bannerIcon">
              <FaSkype />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media