import { UserDetails } from "./UserDetails.jsx"


function App() {
  return (
    <div>
      <UserDetails name={"Ashmit Singh"}
        isOnline={true}
        hideOffline={true}
        IsPremium={true}
        isNewUser={true} />
      <UserDetails name={"Ashutosh Wanga"} isOnline={false} hideOffline={true} />
    </div>
  )
}

export default App
