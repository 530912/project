function Finder () {
    return (
        <section className="finder">

            <img 
            src="/images/finder.jpg" 
            alt="Porsche vehicle" 
            className="finder-image"
            />

            <div className="finder-overlay"></div>
            <div className="finder-content">
                <p className="finder-label">
                    PORSCHE FINDER
                </p>

                <h2>Find your Porsche.</h2>

                <p className="finder-description">
                    Find the Porsche that perfectly matches you.
                </p>

                <button className="finder-button">Search Now</button>
            </div>

        </section>
    )
}
export default Finder