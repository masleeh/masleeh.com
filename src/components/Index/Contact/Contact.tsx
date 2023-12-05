const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact-grid">

                    <img className="contact-ball" alt="" src="images/contact-ball.svg" />
                    <div className="contact-label">Contact me</div>
                    <h3 className="contact-text">want to make something special?</h3>
                    <div className="contact-row">
                        <a target="_blank" href="https://www.linkedin.com/in/matvey-simonenkov-69a389261/"><img className="contact-icon" alt="" src="images/icons/linkedin.svg"/></a>
                        <a target="_blank" href="https://github.com/masleeh"><img className="contact-icon" alt="" src="images/icons/github.svg"/></a>
                        <a target="_blank" href="https://hh.ru/applicant/resumes/view?resume=0e33fe1aff0bb1cc310039ed1f315332566645"><img className="contact-icon" alt="" src="images/icons/hhru.svg"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact