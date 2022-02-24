import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({children}) {
  return (
    <>
      <nav>
          <Navbar />
          <hr />
          <section>
              {children}
          </section>
          <hr />
          <Footer />
      </nav>
    </>
  )
}