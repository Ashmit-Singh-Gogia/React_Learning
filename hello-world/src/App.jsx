import { Alert } from "./Alert.jsx";
import { CustomButton } from "./CustomButton.jsx";

function App() {
  return (
    <>
      <Alert type="success" >Your changes have been saved</Alert>
      <Alert type="error" >Some error has popped up</Alert>
      <CustomButton />
    </>
  )
}

export default App;