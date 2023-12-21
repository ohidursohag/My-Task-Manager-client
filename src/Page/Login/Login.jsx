import bg from '../../assets/Images/herobg.png'
import animation from '../../assets/Lottie/login.json'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import toast from "react-hot-toast";
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getAccessToken, saveUserData } from '../../Api/Auth';
import { Link } from 'react-router-dom';
const Login = () => {
   const [showPass, setShowPass] = useState(false);
   const { signIn, signInWithGoogle, logOut } = useAuth();
   const { register, formState: { errors }, handleSubmit } = useForm();
   const navigate = useNavigate()
   const loc = useLocation();

   useEffect(() => {
      loadCaptchaEnginge(6);
   }, [])

   const onSubmit = async (data) => {
      // console.log(data);
      const toastId = toast.loading('Loginingg...')
      const email = data.email;
      const password = data.password;
      const captchaInput = data.captchaInput;
      if (!validateCaptcha(captchaInput)) {
         toast.error('Invalid Captcha,Please try again', { id: toastId });
         return;
      }

      try {
         //1. User Login
         const { user } = await signIn(email, password);
         const accessToken = await getAccessToken(user?.email)
         if (accessToken?.success) {
            toast.success('Successfully Logged In', { id: toastId })
            navigate(loc?.state ? loc.state : '/', { replace: true })
         } else {
            logOut()
         }
      } catch (error) {
         toast.error(error.message, { id: toastId });
      }
   }

   const handleLoginWithGoogle = async () => {
      const toastId = toast.loading('logining ...')

      try {
         const { user } = await signInWithGoogle();
         const accessToken = await getAccessToken(user?.email)
         if (user?.email && accessToken?.success) {
            const data = await saveUserData(user)
            console.log(data);
            toast.success('Successfully Logged In', { id: toastId })
            navigate(loc?.state ? loc.state : '/', { replace: true })

         } else {
            logOut()
         }
      } catch (error) {
         toast.error(error.message, { id: toastId });
      }
   }

return(
   <div style={{ backgroundImage: `url(${bg})` }} className="min-h-screen bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className='md:w-[80%] mx-auto min-h-[600px] '>
         <div className={'flex flex-col-reverse lg:flex-row w-[90%] mx-auto gap-5 justify-between items-center'}>

            <div className='w-11/12 lg:w-3/5 xl:w-1/2  my-16'>
               <h2 className='text-4xl font-bold text-center text-white mb-5'>Log In</h2>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='w-full mb-5'>
                     <label className="text-xl font-medium text-white"> Email <span className='text-red-500'>*</span></label>
                     <input type="email" {...register("email", { required: true })} placeholder="Email" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                     {errors.email?.type === 'required' && <p className='text-red-500'>email is required</p>}
                  </div>
                  <div className='w-full mb-5 relative'>
                     <label className="text-xl  font-medium text-white"> Password <span className='text-red-500'>*</span></label>
                     <input type={`${showPass ? 'text' : 'password'}`} {...register("password", { required: true, minLength: 6 })} placeholder="Enter your password" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                     <div onClick={() => setShowPass(!showPass)} className='absolute top-[48px] right-5 cursor-pointer'>
                        {
                           !showPass
                              ? <IoMdEye size={32} />
                              : <IoMdEyeOff size={32} color='red' />
                        }
                     </div>
                     {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}

                  </div>

                  <div className='w-max rounded-lg bg-white px-5 py-2 mb-1'>
                     <LoadCanvasTemplate reloadColor="#00b894" />
                  </div>
                  <div className='w-full'>
                     <input type="text" {...register("captchaInput", { required: true })} placeholder='Type the Captcha above' className=" h-14  w-full mt-1 rounded-[8px] bg-white px-4 outline-none" />
                     {errors.captchaInput?.type === 'required' && <p className='text-red-500'>Captcha validation is required</p>}
                  </div>

                  <button type='submit' className='py-3 w-full border-none rounded-md text-lg bg-primary/70 backdrop-blur mt-5 text-white hover:bg-primary'>
                     Sign In
                  </button>
               </form>

               <div className='text-center'>
                  <p className='text-primary mt-3'>Already registered? <Link to='/register' className='font-bold hover:text-secondary'>Go to register</Link></p>
               </div>
               <div className='flex justify-between items-center gap-2 my-2'>
                  <hr className='border border-primary flex-1' />
                  <p className='text-lg text-primary font-bold'>Or</p>
                  <hr className='border border-primary flex-1' />
               </div>
               <button onClick={handleLoginWithGoogle} className="cursor-pointer group border-primary   inline-flex  w-full items-center justify-center gap-2  rounded-lg border px-4 py-3 transition-colors duration-300  hover:bg-primary  focus:outline-none">
                  <FcGoogle size={26} />
                  <span className="text-lg font-medium text-primary group-hover:text-white">Google</span>
               </button>
            </div>
            <div className='lg:w-1/2'>
               <Lottie animationData={animation} loop={true} />
            </div>
         </div>
      </div>
   </div>
)}
export default Login;