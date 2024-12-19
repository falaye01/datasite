import Feature from "./Component/Feature/Feature"
import Header from "./Component/Header/Header"
import StoredContext from "./Component/StoredContext"
import WalletBalance from "./Component/WalletBalance/WalletBalance"


function App() {

  return(
    <>
   <Header/>
   <StoredContext/>
   <Feature/>
   <WalletBalance></WalletBalance>
    </>
  )
 
}

export default App
