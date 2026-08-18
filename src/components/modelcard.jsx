function ModelCard ({car}) {
    return (
        <article className="model-card">
            <img 
            src={car.image} 
            alt={car.name} 
            className="model-image"
            />

            <div className="model-info">
                <h3>{car.name}</h3>

                <p>{car.type}</p>

                <button>Discover</button>
            </div>
        </article>
    )
}

export default ModelCard