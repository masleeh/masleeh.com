import Marquee from "react-fast-marquee";


type IMoveString = {
    text: string
}


const MoveString:React.FC<IMoveString> = ({text}) => {


    return (
        <Marquee 
        className="move-string"
        speed={100}
        gradient={false}
        >
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
                <span className='scroll'>{text} </span>
        </Marquee>
    )
}

export default MoveString