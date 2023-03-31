interface IEasing {
    [key:string]: Function,
    linear: Function,
    easeInQuad: Function,
    easeOutQuad: Function,
    easeInCubic: Function,
    easeInOutCubic: Function
}


const easing: IEasing = {
    linear: (t: any) => t,
    easeInQuad: (t: any) => t*t,
    easeOutQuad: (t: any) => t*(2-t),
    easeInCubic: (t: any) => t*t*t,
    easeInOutCubic: (t: any) => t < 0.5 ? 4*t*t*t : (t - 1) * (2 * t - 2) * (2 * t - 2) +1
}

const getValue = (start: number, end: number, elapsed: number, duration: number, easeMethod: string) => {

    if (elapsed > duration) return end

    return start + (end - start) * easing[easeMethod](elapsed / duration)
}

interface IAnimate {
    fromValue: number,
    toValue: number,
    onUpdate: Function,
    onComplete: Function,
    duration: number,
    easeMethod: string
}

export const animate = ({
    fromValue,
    toValue,
    onUpdate,
    onComplete,
    duration = 600,
    easeMethod,
}:IAnimate
) => {
    const startTime = performance.now()

    const tick = () => {
        const elapsed = performance.now() - startTime

        window.requestAnimationFrame(() => {
            return onUpdate(
                getValue(fromValue, toValue, elapsed, duration, easeMethod),
                elapsed <= duration ? tick : onComplete
            )
        })
    }

    tick()
}