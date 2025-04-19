import React from 'react'
import Card from './Card';
import govimithru from"./images/govimithuru.png"
import audioApp from"./images/audioApp.png"

import { motion } from 'framer-motion';

const Projects = () => {
    const cards = [
        {
          imageUrl: govimithru,
          altText: 'Govimithru',
          title: 'Govimithru Website',
          description: `Design and develop a comprehensive web application for Govimithuru.lk, an Agricultural Product Shop in
Kahatagasdigiliya, Anuradhapura. Utilized the MERN stack to create a sturdy and
user-friendly platform. Used Postman as a testing tool to ensure the service’s
reliability. GitHub repository: https://github.com/MasterRavi2232/Govimithuru.git`,
          explore: "https://govimithuru-frontend.vercel.app/"
        },
        {
          imageUrl:audioApp,
          altText: 'Audio App',
          title: 'KV Audio App',
          description: '"Kv audio rental app" is a web application that allows users to rent audio equipment. The app is built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. It provides a user-friendly interface for browsing available audio equipment, placing rental orders, and managing user accounts. The app also includes features such as order tracking and payment processing.GitHub repository: https://github.com/Ravindu200232/Audio_shop_frontend.git',  
          explore:"https://audio-shop-frontend-git-main-ravindus-projects-7aa938e5.vercel.app/"

        },
       
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          explore={card.explore}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
