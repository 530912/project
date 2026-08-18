function DiscoverCard({item}) {
    return (
        <article className="discover-card">

            <div className="discover-image-wrap">
                <img src={item.image} alt={item.title} className="discover-image"/>
            </div>

            <div className="discover-info">
                <h3>
                    {item.title}
                </h3>

                <p>
                    {item.description}
                </p>

                <button>Explore</button>
            </div>
        </article>
    )
}
export default DiscoverCard