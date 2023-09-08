import React from "react"
import Logo from "../assets/logo.svg"

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-content items-center">
      <nav className="w-full flex justify-between items-center mb-10 pt-3">
        <img src={Logo} alt="Ai Summerizer" className="w-28 object-contain" />
        <button
          className="black_btn"
          onClick={() => {
            window.open("https:/github.com/Aditya-Mane007")
          }}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summerize article with <br className="max-md:hidden" />
        <span className="orange_gradient">OpanAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summeries
      </h2>
    </header>
  )
}

export default Hero
