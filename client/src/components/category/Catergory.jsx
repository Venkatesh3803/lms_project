import "./Category.css"

const Catergory = () => {
    const list = [
        {
            id: 1,
            name: "IT & Software"
        },
        {
            id: 2,
            name: "Data Science"
        },
        {
            id: 3,
            name: "AI & Machine Learning"
        },
        {
            id: 4,
            name: "Business Analytics"
        },
        {
            id: 5,
            name: "Digital Marketing"
        },
        {
            id: 6,
            name: "Managment"
        },
        {
            id: 7,
            name: "UI / UX"
        },
        {
            id: 8,
            name: "Cloud Computing"
        },
    ]
    return (
        <main>
            <h2 style={{ textAlign: "center" }}>Popular Topics To Explore</h2>

            <div className="category">
                {list.map((l) => {
                    return (
                        <div className="category-card" key={l.id}>
                            {l.name}
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Catergory
