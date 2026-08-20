import { useState } from "react";
import ModelCard from "../components/ModelCard";
import models from "../data/models";

export default function ModelsPage({
    favoriteIds,
    onToggleFavorite
}) {
    const [keyword, setKeyword] = useState("");
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    const filteredModels = models.filter((model) => 
        model.name 
             .toLowerCase()
             .includes(keyword.toLowerCase()
    ));
    return (
    <main className="models-page">

        <section className="models-page-header">
            <h1>Models</h1>

            <input
                className="models-search"
                value={keyword}
                onChange={handleKeywordChange}
                placeholder="Search Porsche model"
            />
        </section>

        <section className="models-page-grid">

            {filteredModels.length > 0 ? (

                filteredModels.map((model) => (
                    <ModelCard
                        key={model.id}
                        id={model.id}
                        name={model.name}
                        category={model.category}
                        description={model.description}
                        price={model.price}
                        isFavorite={favoriteIds.includes(model.id)}
                        onToggleFavorite={onToggleFavorite}
                    />
                ))

            ) : (

                <p className="models-empty">
                    No Porsche models found.
                </p>

            )}

        </section>

    </main>
);
}