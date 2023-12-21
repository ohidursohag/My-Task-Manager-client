import { TypeAnimation } from 'react-type-animation';
import bannerBg from '../../assets/Images/bannerBg.jpg'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Banner = () => {
   const {user,loading} = useAuth()
   return (
      <div style={{ backgroundImage: `url(${bannerBg})` }} className='h-screen bg-cover bg-right lg:bg-center bg-no-repeat flex items-center '>
         <div className='container mx-auto text-center lg:text-right px-2'>
            <div className=' ml-auto'>
               <div className='mb-2'>
                  <div className='text-4xl md:text-5xl xl:text-6xl font-bold text-[#E77F59]'>It’s Time to Get </div>
                  <TypeAnimation className='text-4xl md:text-5xl xl:text-6xl font-bold text-secondary '
                     sequence={['Organized', 1000, 'Focused', 1000, 'Confident', 1000, 'Productive', 1000, 'Efficient', 1000, 'Prioritized', 1000]}
                     
                     repeat={Infinity}
                     speed={10}

                  />
               </div>
               <p className='md:text-lg max-w-[500px] mx-auto lg:ml-auto lg:mr-0 text-white lg:text-justify'>
                  Task management is the link between planning to do something and getting it done. Your task management software should provide an overview of work in progress that enables tracking from conception to completion.
               </p>
            </div>
            <Link to={user?.email ? '/dashboard' : '/login'} className='inline-block text-lg text-white px-4 py-2 mt-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary hover:scale-105 transition-[colors] duration-500 '>{`${!user?.email && !loading ? "Let's Explore" :"My Tasks"}`}</Link>
         </div>
      </div>
   )
}
export default Banner;