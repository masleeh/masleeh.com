import Link from "next/link"



const Navbar =() => {
    return (
        <nav className="nav">
            <div className="container">

                <div className="nav-row">

                    <div className="nav-logo">
                        <Link href="/" className="nav-logo-text">Matvey Simonenkov</Link>
                    </div>

                    <div className="nav-sub-row">
                        <Link href="/projects" ><h3 className="nav-link">Projects</h3></Link>
                        <Link href="#contact"><h2 className="nav-link">Contacts</h2></Link>
                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar