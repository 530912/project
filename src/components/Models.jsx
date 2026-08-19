import ModelCard from "./ModelCard";

function Models () {
    const cars = [{
        
        id: 1,
      name: "911",
      type: "Gasoline",
      image: "/images/911.jpg"
    },
    {
      id: 2,
      name: "Taycan",
      type: "Electric",
      image: "/images/taycan.jpg"
    },
    {
      id: 3,
      name: "Macan",
      type: "Electric",
      image: "/images/macan.jpg"
    },
    {
      id: 4,
      name: "Cayenne",
      type: "Gasoline / Hybrid",
      image: "/images/cayenne.jpg"
    }
]
return (
    <section className="models">
        <h2>
            Start your Porsche journey.
        </h2>
        <div className="model-grid">
            {cars.map((car) => (
                <ModelCard key={car.id} car={car} 
                />
            ))}
        </div>
    </section>
)
}
export default Models