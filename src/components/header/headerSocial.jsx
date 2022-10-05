import React from 'react'
import {SiLinkedin,SiFacebook,SiGithub} from 'react-icons/si'

const headerSocial = () => {
  return (
    <div className="social__icons">
        <a href="http://linked.com" target="_blank" rel='noreferrer'><SiLinkedin /></a>
        <a href="http://github.com" target="_blank" rel='noreferrer'><SiGithub /></a>
        <a href="http://facebook.com" target="_blank" rel='noreferrer'><SiFacebook /></a>
    </div>
  )
}

export default headerSocial