import { projData } from "@/config-data"
import { useState } from "react"
import ProjectContainer from "./ProjectContainer"
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef } from "react"

const InfiniteScrollCont = () => {
    gsap.registerPlugin(ScrollTrigger)
    const scrollRef = useRef(null)

    const [projItems, setProjItems] = useState(projData)

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                start: "1 top",
                end: `+=1070 top`,
                onLeaveBack: self => self.scroll(1070),
                onLeave: self => self.scroll(2),
                // markers: true    
              });
        }, scrollRef) 
        
        return () => ctx.revert()
    }, [])


    
    return (
        <div ref={scrollRef} className="proj-container">
                {projItems.map((project, index) => {
                    return <ProjectContainer key={index} title={project.title} image={project.image}
                        stack={project.stack} description={project.description} link={project.link}
                    />
                })}
        </div>
    )
}

export default InfiniteScrollCont