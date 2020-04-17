import React from "react"
import style from "./neon.module.css"

const Hero = () => (
  <div className={style.wrapper}>
    <div className={style.hero}>
      <div className={style.heroCircle1} />
      <div className={style.heroCircle2} />
      <div className={style.heroText}>
        <div className={style.heroTextHello}>Hello, I'm</div>
        <div className={style.heroTextName} data-name="Bjorn Lu">
          Bjorn Lu
        </div>
        <div className={style.heroTextWelcome}>Welcome</div>
      </div>
    </div>
  </div>
)

export default Hero
