import { IStack } from "@/types"


const Stack:React.FC<IStack> = ({stackRef, goToProjects}) => {
    return (
        <section className="stack" ref={stackRef}>
            <div className="container">
                <p className="stack-text">I take pleasure in resolving coding issues and designing 
                    intelligent components, conceptualizing practical interactions and creating dynamic 
                    web experiences and applications that are both enriching and valuable.</p>

                <div className="stack-grid">
                    <div className="stack-grid-check" onClick={() => goToProjects()}>check <br /> my <br />projects</div>

                    <img className="stack-grid-img" alt="" src="images/stack/html.svg"/>
                    <h2 className="stack-grid-title">HTML5</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/css.svg"/>
                    <h2 className="stack-grid-title">CSS3</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/js.svg"/>
                    <h2 className="stack-grid-title">JavaScript</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/ts.svg"/>
                    <h2 className="stack-grid-title">TypeScript</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/react.svg"/>
                    <h2 className="stack-grid-title">React.js</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/sass.svg"/>
                    <h2 className="stack-grid-title">SCSS</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/node.svg"/>
                    <h2 className="stack-grid-title">Node.js</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/next.svg"/>
                    <h2 className="stack-grid-title">Next.js</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/sql.svg"/>
                    <h2 className="stack-grid-title">MySQL</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/nest.svg"/>
                    <h2 className="stack-grid-title">Nest.js</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/mongo.svg"/>
                    <h2 className="stack-grid-title">MongoDB</h2>

                    <img className="stack-grid-img" alt="" src="images/stack/express.svg"/>
                    <h2 className="stack-grid-title">Express</h2>

                </div>
            </div>
        </section>
    )
}

export default Stack