import "./Services.css"

function Services() {
    return(
        <section className="services">
            <h2>Our Services</h2>

            <div className="service-cards">
                <div className="card">
                    <h3>web design</h3>
                    <h3>we create clean ui for websites and end to end solution for your site</h3>
                </div>
                <div className="card">
                    <h3>Data science</h3>
                    <h3>we create end solution for your data</h3>
                </div>
                <div className="card">
                    <h3>Backend admin</h3>
                    <h3>we give u backend admin to control your site</h3>
                </div>
            </div>

        </section>

    );
}

export default Services