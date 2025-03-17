import Navbar from "./components/navbar"
export default function MyApp({ Component, pageProps }) {
    return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <h1>FOOOOOOOOOOOOTER</h1>
    </>
    )
  }
  //file you can overrite and it shd be present inside page directory
  // <Component {...pageProps} /> will render each individual page