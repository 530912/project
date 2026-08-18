import DiscoverCard from "./DiscoverCard";
function Discover () {
    const discoverItems = [
        {
      id: 1,
      title: "Porsche E-Performance",
      description: "Experience the future of electric performance.",
      image: "/images/discover01.jpg"
    },
    {
      id: 2,
      title: "Porsche Connect",
      description: "Stay connected to your Porsche wherever you go.",
      image: "/images/discover02.jpg"
    },
    {
      id: 3,
      title: "Porsche Experience",
      description: "Discover the world of Porsche beyond the road.",
      image: "/images/discover03.jpg"
    }
    ]

    return (
        <section className="discover">
            <h2>Discover</h2>

            <div className="discover-grid">
                {discoverItems.map((item) => (
                    <DiscoverCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}
export default Discover