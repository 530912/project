import ModelCard from "../components/ModelCard";
import models from "../data/models";

export default function FavoritesPage({
    favoriteIds,
    onToggleFavorite
}) {

    const favoriteModels = models.filter((model) =>
        favoriteIds.includes(model.id)
    );

    return (
        <main>

            <h1>Favorites</h1>

            {favoriteModels.length > 0 ? (

                favoriteModels.map((model) => (
                    <ModelCard
                        key={model.id}

                        id={model.id}
                        name={model.name}
                        category={model.category}
                        description={model.description}
                        price={model.price}
                        isFavorite={true}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))

            ) : (

                <p>No saved Porsche models yet.</p>

            )}

        </main>
    );
}