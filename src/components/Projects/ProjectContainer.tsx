import { animate } from "@/helpers/animate"
import { IProjs } from "@/types/projects"
import { useReducer, useRef } from "react"
import ProjImage from "./ProjImage"
import ProjTitle from "./ProjTitle"

const initialState = {
  opacity: 0,
  parallaxPos: {x: 0, y: -20},
  scale: 0.8,
  rotationPos: 0,
  active: false
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE ACTIVE": {
      return {
        ...state,
        active: action.payload
      }
    }

    case "CHANGE OPACITY": {
      return {
        ...state,
        opacity: action.payload
      }
    }

    case "CHANGE COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload
      }
    }

    case "CHANGE ROTATION": {
      return {
        ...state,
        rotationPos: action.payload
      }
    }

    case "CHANGE SCALE": {
      return {
        ...state,
        scale: action.payload
      }
    }

    default: {
      throw new Error() 
    }
  }
}

const ProjectContainer:React.FC<IProjs> = ({title, description, image, stack}) => {

  const listItem = useRef<HTMLDivElement>(null)
  const [state, dispatch] = useReducer(reducer, initialState)

  const parallax = (event: any) => {
    const speed = -5

    const x = (window.innerWidth - event.pageX * speed)/100
    const y = (window.innerHeight - event.pageY * speed)/100

    dispatch({type: "CHANGE COORDINATES", payload: {x, y}})
  }

  const easeMethod = 'easeInOutCubic'

  const handleOpacity = (initialOpacity: number, newOpacity: number, duration: number) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity: number, callback: Function) => {
        dispatch({type: "CHANGE OPACITY", payload: newOpacity})
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod
    })
  }

  const handleScale = (initialScale: number, newScale: number, duration: number) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newScale: number, callback: Function) => {
        dispatch({type: "CHANGE SCALE", payload: newScale})
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod
    })
  }

  const handleRotation = (currentRotation: number, duration: number) => {

    const rotation = Math.random() * 5 * (Math.round(Math.random()) ? 1 : -1)

    animate({
      fromValue: currentRotation,
      toValue: rotation,
      onUpdate: (rotation: number, callback: Function) => {
        dispatch({type: "CHANGE ROTATION", payload: rotation})
        callback()
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod
    })
  }

  const handleMouseEnter = () => {
    handleScale(0.8, 1, 500)
    handleOpacity(0, 1, 500)
    handleRotation(state.rotationPos, 500)
    dispatch({type: "CHANGE ACTIVE", payload: true})
    listItem.current!.addEventListener('mousemove', parallax)
  }
  
  const handleMouseLeave = () => {
    handleScale(1, 0.8, 500)
    handleOpacity(1, 0, 800)
    handleRotation(state.rotationPos, 500)
    dispatch({type: "CHANGE COORDINATES", payload: initialState.parallaxPos})
    dispatch({type: "CHANGE ACTIVE", payload: false})
    listItem.current!.removeEventListener('mousemove', parallax)
  }

  return (
    <div className="proj" ref={listItem}>
        <ProjTitle title={title} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
        <ProjImage 
        image={image} 
        opacity={state.opacity} 
        parallaxPos={state.parallaxPos} 
        scale={state.scale}
        rotationPos={state.rotationPos}
        />

        <div className={state.active ? "proj-info active" : "proj-info"}>

            {stack.map((element, index) => {
              return <h3 key={index} className="proj-info-stack">{element}</h3>
            })}
            
            <p className="proj-info-title">{description}</p>
        </div>
    </div>
  )
}

export default ProjectContainer