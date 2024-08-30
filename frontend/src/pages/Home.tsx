import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import "../styles/Home.css"

const Home = () => {
  return (
    <div>
    <Header />
    <div className="textContainer">
      <p className="p1">Save 15% off in Worldwide</p>
      <h1 className="h1">Travel & Adventures</h1>
      <p className="p2">Find awesome hotel, tour, car and activities in anywhere</p>
    </div>
    <div>
      <SearchBar />
    </div>
    <Footer/>
    </div>
  )
}

export default Home
