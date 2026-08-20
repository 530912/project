export default function ModelCard({
    id,
    name,
    category,
    description,
    price,
    image,
    isFavorite,
    onToggleFavorite
}) {

    console.log("ModelCard:", {
    id,
    name,
    category,
    description,
    price
});
    return (
        <article className="model-card">

            {image && (
                <div className="model-card-image">
                    <img src={image} alt={name} />
                </div>
            )}

            <div className="model-card-content">

                {category && (
                    <p className="model-card-category">
                        {category}
                    </p>
                )}

                <h2 className="model-card-title">
                    {name}
                </h2>

                {description && (
                    <p className="model-card-description">
                        {description}
                    </p>
                )}

                {price && (
                    <p className="model-card-price">
                        From ₩{price.toLocaleString()}
                    </p>
                )}

                {onToggleFavorite && (
                    <button
                        className="model-card-save"
                        onClick={() => onToggleFavorite(id)}
                    >
                        {isFavorite ? "♥ SAVED" : "♡ SAVE"}
                    </button>
                )}

            </div>

        </article>
    )
}