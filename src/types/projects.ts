export interface ITitle {
    title: string,
    handleMouseEnter: Function,
    handleMouseLeave: Function
}

type IParallax = {
    x: number,
    y: number
}

export interface IImage {
    image: string,
    opacity: number,
    parallaxPos: IParallax,
    scale: number,
    rotationPos: number
}

export interface IProjs {
    title: string,
    description: string,
    stack: string[],
    image: string,
    link: string
}