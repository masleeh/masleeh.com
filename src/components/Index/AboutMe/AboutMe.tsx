import { IAbout } from "@/types"

const AboutMe:React.FC<IAbout> = ({aboutRef}) => {
    return (
        <section className="about" ref={aboutRef}>
            <div className="container">

                <img className="about-aboutme" alt="" src="images/about.jpg"/>
                <h1 className="about-hi">Hi, I’m Matvey  </h1>

                <div className="about-cont">
                    <img alt="" className="about-me clear" src="images/me.jpg"/>
                    <img alt="" className="about-me one" src="images/me-red.jpg"/>
                    <img alt="" className="about-me two" src="images/me-blue.jpg"/>
                    <div className="about-me-box"></div>
                </div>

                <div className="about-box">
                    <h1 className="about-box-dot">*</h1>
                    <h2 className="about-box-title">frontend developer from <br />Russia </h2>
                    <h1 className="about-box-dot">*</h1>
                    <h2 className="about-box-title">actual location <br /> Batumi, Georgia</h2>
                    <h1 className="about-box-dot">*</h1>
                    <h2 className="about-box-title">working worldwide</h2>
                </div>
            </div>
        </section>
    )
}

export default AboutMe