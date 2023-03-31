import { ITitle } from "@/types/projects"


const ProjTitle:React.FC<ITitle> = ({title, handleMouseEnter, handleMouseLeave}) => {
    return (
        <div 
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        >
            <h1 className="proj-title">{title}</h1>
            <h1 className="proj-title clone">{title}</h1>
        </div>
    )
} 

export default ProjTitle