import CardsList from '../components/CardList'
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
    <div>
      <Title text1="Tours" text2="Most Popular Tours"/>
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
    <div className="destinationContainer">
    <div>
      <Title text1="Destination" text2="Top Attractions Destinations"/>
    </div>
    </div>
    <div className="chooseUsContainer">
      <div className="chooseUsLeft">
      <img src="https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Home_Images%2FchooseUsImage.png?alt=media&token=79c91a75-d6c0-4f7b-8d7c-4a9d64c4f945" alt="chooseUs" />
      </div>
      <div className="chooseUsRight">
        <p className="chooseP1">Why Choose Us</p>
        <p className="chooseP2">Our Experiences Meet High Quality Standarts</p>
        <p className="chooseP3">Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</p>
        <div className="checks">
        <img src="https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Home_Images%2FcheckImage.png?alt=media&token=fa5dfe60-a436-4a4b-a063-8a951034705a" alt="check" className="checkImg"/>
        <p>Cheap Rates</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Home_Images%2FcheckImage.png?alt=media&token=fa5dfe60-a436-4a4b-a063-8a951034705a" alt="check" className="checkImg" />
        <p>Cheap Rates</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Home_Images%2FcheckImage.png?alt=media&token=fa5dfe60-a436-4a4b-a063-8a951034705a" alt="check"className="checkImg" />
        <p>Hand-picked Tour</p>
        <img src="https://firebasestorage.googleapis.com/v0/b/travelling-c5077.appspot.com/o/Home_Images%2FcheckImage.png?alt=media&token=fa5dfe60-a436-4a4b-a063-8a951034705a" alt="check" className="checkImg" />
        <p>Private Guide</p>
        </div>
        <button className="contactUsButton">Contact Us</button>
      </div>
      <div>
    </div>
    <CardsList/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
