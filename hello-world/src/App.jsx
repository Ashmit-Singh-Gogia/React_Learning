import { Welcome } from "./Welcome.jsx"
import { Product } from "./Product.jsx"
import { Greeting } from "./Greeting.jsx"
import { UserCard } from "./UserCard.jsx"

function App() {
  return (
    <div>
      <Welcome name="Ashmit" alias="batman" />
      <Welcome name="Diana" alias="superwoman" />
      <Welcome name="George" alias="antman" />


      <Product
        title="Gaming Laptop"
        price={1299.99}
        inStock={true}
        categories={["Electronics , Laptops", "Gaming"]}
      />

      <Greeting message="Good morning" />

      <UserCard
        name="Ashmit Singh"
        age={21}
        city="Ludhiana"
        email="ash@mail.com"
      />

    </div>
  )
}

export default App
