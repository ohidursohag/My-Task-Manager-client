import Footer from "../../Components/Footer/Footer";
import AboutUs from "../../Components/Home/AboutUs/AboutUs";
import Banner from "../../Components/Home/Banner";
import ContactUs from "../../Components/Home/ContactUs/ContactUs";


const Home = () => {
return(
    <div id="home" className="scroll-smooth">
        <div>
            <Banner />
        </div>
        <div className="container mx-auto px-2 my-[100px]">
            <AboutUs/>
        </div>
        <div className="container mx-auto px-2 my-[100px]">
            <ContactUs/>
        </div>
        <div>
            <Footer/>
        </div>
   </div>
)}
export default Home;