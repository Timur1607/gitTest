import Card from "./Components/Card/Card"
import Button from "./Components/Button/Button"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"

function App() {

  return (
    <>
      <Header />
      <div style={{display: 'flex', gap: '20px', padding: '0 20px'}}>
        <Card title="Windows XP" amount="500" />
        <Card title="Windows Vista" amount="700" />
        <Card title="Windows Server 2008" amount="5000" />
      </div>
      <Footer />
    </>
  )
}

export default App
