import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [

  {
    id: 2,
    title: "Hike-U - Comprehensive Hiker Planner",
    img: "./images/hike-u.png",
    desc: "Developed a comprehensive hike planning application which mapped out routes with start and end locations displayed on an interactive map. Integrated API to provide forecast for hikes. Proﬁciently utilized CRUD operations to enable detailed hike planning, equipment organization, and post-hike journal entries.",
  },
  {
    id: 3,
    title: "INSIGHTIFY - Social Media Platform",
    img: "./images/insightify.png",
    desc: "Developed in-house web app using Node, Express, HTML/CSS, mongoDB. Using the MVC pattern has increased the convenience of later maintenance. The implementation includes features for users to upload, manage, comment on, and like posts.",
  },
  {
    id: 4,
    title: "Minesweeper - Classic game with Win98 Style",
    img: "./images/minesweeper.png",
    desc: "Rebuild the minesweeper game with JavaScript/HTML/CSS. Recreate the old styled Windows 98 theme. Fully implement the feature of the game such as ﬂood feature, ﬁrst step safety.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;