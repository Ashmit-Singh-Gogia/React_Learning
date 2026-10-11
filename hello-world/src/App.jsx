import { Welcome } from "./Welcome.jsx"
import { Button } from "./Button.jsx"
import { Hello, HelloWithoutJSX } from "./Hello.jsx";
import { Card, CardWithoutJSX } from "./Card.jsx";
import { StyledForm } from "./StyledForm.jsx";


function App() {
  return (
    <div>
      <StyledForm />
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
