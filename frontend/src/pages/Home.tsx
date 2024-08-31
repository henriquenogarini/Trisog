import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Title from '../components/Title'
import "../styles/Home.css"

const Home = () => {
  return (
    <div>
    <Header />
    <img 
      src="https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Home_Images%2FimageHome.png?alt=media&token=145dfa03-43ce-4ebb-beae-d2663eb9403f" 
      alt="background image"
      className="background"
       />
    <div className="textContainer">
      <p className="p1">Save 15% off in Worldwide</p>
      <h1 className="h1">Travel & Adventures</h1>
      <p className="p2">Find awesome hotel, tour, car and activities in anywhere</p>
    </div>
    <div>
      <SearchBar />
    </div>
    <div className="informationsContainer">
        <h2 className="hNumbers">120+</h2>
        <p className="pInformations">Total Destination</p>
        <h2 className="hNumbers">500+</h2>
        <p className="pInformations">Travel Package</p>
        <h2 className="hNumbers">12k+</h2>
        <p className="pInformations">Travelers</p>
        <h2 className="hNumbers">7k+</h2>
        <p className="pInformations">Positive Reviews</p>
    </div>
    <div>
      <Title text1="Destination" text2="Top Attractions Destinations"/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
