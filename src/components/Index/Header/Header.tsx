import { IHeader } from "@/types"

const Header:React.FC<IHeader> = ({headerRef}) => {
    return (
        <header className="header" ref={headerRef}>
            <div className="container">

                <h1 className="header-title">Frontend Next.js |<br /> React.js developer</h1>

                <div className="header-grid">

                    <h2 className="header-sub-title">FRONTEND <br /> DEVELOPMENT <br /> 
                        WITH NODE.JS <br />AND NEXT.JS <br /> 
                        FRAMEWORK</h2>
                    <div className="header-windows">

                        <div className="window1">
                            <div className="window1-header">
                                <div className="window1-circle-w"></div>
                                <div className="window1-circle-w"></div>
                                <div className="window1-circle-b"></div>
                            </div>
                            <div className="window1-body">
                                <img src="/images/zebra.svg" alt="" className="window1-zebra"/>
                            </div>
                        </div>

                        <div className="window2"></div>
                    </div>


                </div>
            </div>

            <div className="header-scroll">scroll down</div>
        </header>
    )
}

export default Header