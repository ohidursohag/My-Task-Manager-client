import { Link } from 'react-router-dom';
import logoIcon from '/logoIcon.png'

const Logo = () => {
   return (
      <>
         <Link to='/' className='flex items-center gap-1'>
            <figure>
               <img className='animate-[spin_3s_linear_infinite] w-10' src={logoIcon} alt="" />
            </figure>
            <div>
               <div className='text-2xl font-bold'><span className='text-primary'>My</span><span className='text-secondary'>Task</span></div>
            </div>
         </Link>
      </>
   )
}
export default Logo;