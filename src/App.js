import { Suspense, lazy } from "react"
import Loader from "./components/Loader"
// import Testymonials from "./components/Testymonials/Testymonials"
// import Services from "./components/services/Services"
// import About from "./components/about/About"
// import Header from "./components/header/header"

const Main = lazy(()=>import('./pages/main/Main'))

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loader/>}>
          <Main/>
      </Suspense>
      {/* <Testymonials/> */}
      <Loader/>
    </div>
  )
}

export default App