import Header from "./components/Header"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
    <Header />
    <main>
      <section id="sales">
        <div className="metasVendas-container">
          <SalesCard/>
        </div>
      </section>
    </main>
    </>
  )

}

export default App
