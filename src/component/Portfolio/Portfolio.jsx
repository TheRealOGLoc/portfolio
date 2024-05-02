import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function Portfolio() {

    const items = [
        {
            id: 1,
            title: "Hike U - Comprehensive Hiking Planner",
            img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            description: "Developed a comprehensive hike planning application which mapped out routes with start and end locations displayed on an interactive map.Integrated API to provide forecast for hikes.Proﬁciently utilized CRUD operations to enable detailed hike planning, equipment organization, and post-hike journal entries.Tech Stack: React, MongoDB, Express, Node.js, JavaScript, HTML, CSS, Bootstrap, Mapbox API, OpenWeather APIs."
        },
        {
            id: 1,
            title: "INSIGHTIFY - Social Media Platform",
            img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            description: "Developed in-house web app using Node, Express, HTML/CSS, mongoDB.Using the MVC pattern has increased the convenience of later maintenance.The implementation includes features for users to upload, manage, comment on, and like posts."
        },
        {
            id: 1,
            title: "Minesweeper - Classic game with Win98 Style",
            img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            description: "Rebuild the minesweeper game with JavaScript/HTML/CSS.Recreate the old styled Windows 98 theme.Fully implement the feature of the game such as ﬂood feature, ﬁrst step safety."
        },
    ]

    const Single = ({ item }) => {
        const ref = useRef()

        const { scrollYProgress } = useScroll({
            target: ref,
            // offset: ["start start", "end start"]
        })

        const y = useTransform(scrollYProgress, [0, 1], [-500, 500])  // change speed

        return (
            <section>
                <div className='portfolio-container flex items-center justify-center h-[100%] w-[100%]'>
                    <div className='portfolio-wrapper max-w-[1366px] h-[100%] m-auto flex gap-[50px] items-center justify-center overflow-hidden'>
                        <div ref={ref} className='img-container flex-1 h-[50%]'>
                            <img className='w-[100%] h-[100%] object-cover' src={item.img} alt="" />
                        </div>
                        <motion.div className="portfolio-text flex-1 flex flex-col gap-[30px]" style={{ y }}>
                            <h2 className='text-[30px]'  >{item.title}</h2>
                            <p className='text-gray text-[20px]' >{item.description}</p>
                            <button className='border-none bg-orange-500 rounded-[10px] text-white p-[10px] w-[200px]'>Watch live demo</button>
                        </motion.div>
                    </div>
                </div>
            </section>
        )
    }

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='portfolio relative'>
            <div className='progress sticky top-0 left-0 pt-[50px] text-center text-orange-400 text-[50px] font-bold'>
                <h1>Featured Works</h1>
                <motion.div className="progress-bar h-[10px] bg-white rounded-lg" style={{ scaleX }}>

                </motion.div>
            </div>
            {items.map((item) => <Single item={item} key={item.id} />)}
        </div>
    )
}
