import { Alert } from "./Alert.jsx";
import { NewButton } from "./NewButton.jsx"
function App() {
  return (
    <>
      <Alert type="success" >Your changes have been saved</Alert>
      <Alert type="error" >Some error has popped up</Alert>
      <NewButton />
    </>
  )
}

export default App;