import Header from "./Header";
import {gsap, TimelineMax} from "gsap";
import {useRef, useLayoutEffect, RefObject} from 'react'

const HeaderContainer = () => {
    const headerRef = useRef(null)
    const tl = useRef<TimelineMax>()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline()
                .to(".header-title", {
                    duration: 0.5,
                    y: 0,
                    opacity: 1
                })
                .to(".header-sub-title", {
                    duration: 0.5,
                    y: 0,
                    opacity: 1
                }, "<0.3")
                .to(".header-windows", {
                    duration: 0.5,
                    y: 0,
                    opacity: 1
                }, "<0.3")
                .to(".header-scroll", {
                    duration: 0.5,
                    y: 0,
                    opacity: 1
                }, "<0.3")
                
        }, headerRef)

        return () => ctx.revert()
    }, [])

    return <Header 
        headerRef={headerRef}
    />
}

export default HeaderContainer