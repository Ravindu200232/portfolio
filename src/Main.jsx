
import './main2.css'
import codechef from './images/codechef1.png'
import github from './images/github.png'
import linked_in from './images/linked_in.png'
import { motion } from 'framer-motion';
import leetcodes from './images/leetcodes.png';
import profile from './images/profile.png';



const Main = () => {
  return (
    <motion.div
    variants={{
      hidden:{opacity:0,y:50},
      visible:{opacity:1,y:0}
    }}
    initial="hidden"
    animate="visible"
    transition={{
      duration:0.6, delay:0.2
    }}
    className='Main' id="mainy">
      <div className="main_left">
        <h3 className='it_is_me'>Hey! It's Me</h3>
        <h2 className='names'>Ravindu B Subasingha</h2>
        <p className='i_am_a'>I am a&nbsp;<span class="typewriter"></span></p>
        
        <div className="flex1">
        <p className='follow_me'>follow me: </p>
        <div className="logos">
        <a href="https://www.codechef.com"><img src={codechef} alt="" /></a>
        <a href="https://github.com/Ravindu200232/" target="_blank" rel="noreferrer"><img src={github} alt=""  /></a>
        <a href="https://www.linkedin.com/in/ravindu-bandara-3b1627322" target="_blank" rel="noreferrer"><img src={linked_in} alt=""></img></a>
        <a href="https://leetcode.com" target="_blank" rel="noreferrer"><img src={leetcodes} alt=""></img></a>
        </div>
        </div>
        <div className="flex1">
        <a href="mailto:ravindu2232@gmail.com"><button className='buttonc'>E-Mail Me</button></a>
        <button onClick={() => window.open("https://drive.google.com/file/d/13ZIaFD0Y2pz1M_tObs_XHX0qdi-2wx6J/view?usp=sharing", "_blank")} className='buttonb'>Resume</button>
        </div>
      </div>
      <div className="right_main">
      <img className='behind_the_image' src={profile} alt=""></img>
      </div>
    </motion.div>
  )
}

export default Main
