export const ProductList = () => {

    const products = [
        {
            id: 1,
            name: "Laptop",
            Price: 999
        },
        {
            id: 2,
            name: "Phone",
            Price: 599
        },
        {
            id: 3,
            name: "Table",
            Price: 499
        },
        {
            id: 4,
            name: "Watch",
            Price: 199
        }
    ]

    const productElements = products.filter((p) => { return p.Price > 500 }).map((p) => {
        return (
            <div>
                <h3>{p.id}{" " + p.name}</h3>
                <p>Price: ${p.Price}</p>
            </div>
        )
    });


    return (
        <>
            <h2>Our Products</h2>
            {productElements}
        </>
    );
}