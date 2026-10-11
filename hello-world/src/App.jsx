import { Welcome } from "./Welcome.jsx"
import { Button } from "./Button.jsx"
import { Hello, HelloWithoutJSX } from "./Hello.jsx";
import { Card, CardWithoutJSX } from "./Card.jsx";

function App() {
  return (
    <div>

      <Hello />
      <HelloWithoutJSX />
      <Card />
      <CardWithoutJSX />
      <Welcome />
      <Button />
    </div>
  )
}

export default App
