import { IImage } from "@/types/projects"


const ProjImage:React.FC<IImage> = ({image, opacity, parallaxPos, scale, rotationPos}) => {
    return (
            <img className="proj-img" alt="" src={image} style={{
                opacity: opacity,
                transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) scale(${scale}) rotate(${rotationPos}deg)`,
            }}/>
    )
}

export default ProjImage