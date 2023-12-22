
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Title from "../../Utilities/Title";

const AboutUs = () => {

    return (
        <div id="about" className="my-10">
            <Title>About Us</Title>
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 ">
                <div  className="md:col-span-2 flex flex-col bg-center bg-no-repeat bg-cover ">
                    <div className=" flex-1 text-justify mb-5 pt-5">
                        Our productivity and creativity tools help teams turn their ideas into reality – wherever they are, whatever they do. Explore our collection to learn how you and your team can work beautifully together.  At the very heart of what we do are people and the vision of building something great, together. 
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 sm:items-center sm:gap-10 mb-5">
                        <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary  via-30% to-secondary to-80%">
                            <span className="flex items-center gap-2 font-bold mb-2"><MdEmail className="text-secondary" size={25}/> Email:</span>
                            <p className=" ">ohidursohag@gmail.com</p>
                        </div>
                        <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary  via-30% to-secondary to-80%">
                            <span className="flex items-center gap-2 font-bold mb-2"><FaPhoneSquareAlt className="text-secondary"  size={25}/> Phone Number:</span>
                            <p className="">+880 1831-987636</p>
                        </div>
                    </div>
                </div>
                <div className=" col-span-1 p-5 ">
                    <div>
                        
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary via-30% to-secondary to-80% mt-5">Contact Details</h3>
                        <div className="flex flex-col ">
                            
                            <span>House: Molla Bari, Holding No: 242,</span>
                            <span>Village: Hingula, Post Office: Konkapoit-3583,</span>
                            <span>Sub-District: Chaddagram, District: Cumilla,</span>
                            <span>Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;