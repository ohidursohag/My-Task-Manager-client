import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import linkedin from '../../assets/icon/linkedIn.svg'
import github from '../../assets/icon/github.svg'
import gotop from '../../assets/icon/goTop.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
return(
   <div className="bg-[#1A0B2E]  relative">
      <div className="container mx-auto px-2 py-16 flex justify-center items-center h-full">
         <div className='flex gap-5 justify-center'>
            <Link className='hover:scale-110 transition-all duration-300 ' target='_blank' to='https://linkedin.com/in/ohidurSohag'><img src={linkedin} alt="" /></Link>
            <Link className='hover:scale-110 transition-all duration-300 ' target='_blank' to='https://github.com/ohidursohag'><img src={github} alt="" /></Link>
            <Link className='hover:scale-110 transition-all duration-300 ' target='_blank' to='https://www.facebook.com/Sohag9595/'><img src={facebook} alt="" /></Link>
            <Link className='hover:scale-110 transition-all duration-300 ' target='_blank' to='https://twitter.com/ohidurSohag'><img src={twitter} alt="" /></Link>
         </div>
            <a className='hover:scale-110 transition-all duration-300 absolute -top-5 animate-bounce '  href='#home'><img src={gotop} alt="" /></a>         
      </div>
      <div className='text-gray-300 flex gap-1 justify-center py-4'>  <span className=''>&copy; 2023</span> <span className='text-primary'>MyTask</span> Allrights reserved </div>
   </div>
)}
export default Footer;