import Stack from "./Stack";
import { gsap } from "gsap";
import {useRef, useLayoutEffect} from 'react'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
import { useRouter } from "next/router"
gsap.registerPlugin(ScrollTrigger)            


const StackContainer = () => {
    const stackRef = useRef(null)
    const router = useRouter()

    const goToProjects = () => {
        router.push('/projects')
    }

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".stack-grid-check", {
                scrollTrigger: {
                    trigger: ".stack-grid",
                    start: "200 center",
                    end: "bottom center",
                    pin: ".stack-grid-check",
                    scrub: 1,
                    // markers: true
                }
            })
        }, stackRef)

        return () => ctx.revert()
    }, [])

    return (
        <Stack stackRef={stackRef} goToProjects={goToProjects}/>
    )
}

export default StackContainer