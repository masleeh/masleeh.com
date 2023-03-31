import AboutMe from "./AboutMe";
import { gsap } from "gsap";
import {useRef, useLayoutEffect} from 'react'
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)  

const AboutMeContainer = () => {
    const aboutRef = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to('.about-me-box', {
                scrollTrigger: {
                    trigger: '.about-me-box',
                    endTrigger: '.about-me-box',
                    end: 'bottom top',
                    scrub: true
                },
                rotate: 45,
                duration: 10
            })

            gsap.to('.clear', {
                scrollTrigger: {
                    scrub: true,
                    // markers: true,
                    trigger: '.clear',
                    start: "top bottom"
                },
                y: -50,
            })

            gsap.to('.one', {
                scrollTrigger: {
                    scrub: 2,
                    // markers: true,
                    trigger: '.one',
                    start: "top bottom"
                },
                y: -50,
            })

            gsap.to('.two', {
                scrollTrigger: {
                    scrub: 1,
                    // markers: true,
                    trigger: '.two',
                    start: "top bottom"
                },
                y: -50,
            })

            let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(".about-me", "skewY", "deg"), // fast
            clamp = gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees. 

            ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                }
            }
            });

            // make the right edge "stick" to the scroll bar. force3D: true improves performance
            gsap.set(".clear", {transformOrigin: "right center", force3D: true});
            
        
        }, aboutRef)

        return () => ctx.revert()
    }, [])

    return (
        <AboutMe aboutRef={aboutRef}/>
    )
}

export default AboutMeContainer