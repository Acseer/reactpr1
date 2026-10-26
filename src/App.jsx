import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Subs } from "./components/Subs/Subs";




export function App(){
  return(
    <div className="layout">
      <Header/>
      <Banner/>
      <Subs/>
      <Footer/>
    </div>
  )
}