import  Home  from "./components/pages/Home";
import { Navbar } from "./components/layout/Navbar";
// import { DarkMode } from "./components/common/DarkMode";
export const App = () => {
  return (
    <div>
      {/* <DarkMode /> */}
      <Navbar />
      <Home />
    </div>
  )
}

export default App;