import logoIcon from '/logoIcon.png'

const Logo = () => {
   return (
      <>
         <div className='flex items-center gap-1'>
            <figure>
               <img className='animate-[spin_3s_linear_infinite] w-10' src={logoIcon} alt="" />
            </figure>
            <div>
               <div className='text-2xl font-bold'><span className='text-primary'>My</span><span className='text-secondary'>Task</span></div>
            </div>
         </div>
      </>
   )
}
export default Logo;