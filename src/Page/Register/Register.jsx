/* eslint-disable no-useless-escape */
import bg from '../../assets/Images/herobg.png'
import animation from '../../assets/Lottie/login.json'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { uploadImage } from '../../Api/imageUpload';
import toast from 'react-hot-toast';
import { getAccessToken, saveUserData } from '../../Api/Auth';
// import { randomphoneNumber } from '../../Components/Shared/Utilities/randomphoneNumber';
const Register = () => {
   const [showPass, setShowPass] = useState(false);
   const { createUser, updateUserProfile, signInWithGoogle, logOut } = useAuth()
   const { register, formState: { errors }, handleSubmit } = useForm();
   const navigate = useNavigate()
   const loc = useLocation();
   useEffect(() => {
      loadCaptchaEnginge(6);
   }, [])
   const onSubmit = async (data) => {
      console.log(data);
      const toastId = toast.loading('Registering...')
      const name = data?.name;
      const email = data?.email;
      const password = data?.password;
      const captchaInput = data?.captchaInput;
      if (!validateCaptcha(captchaInput)) {
         toast.error('Invalid Captcha,Please try again', { id: toastId });
         return;
      }
      try {
         //1. User Registration
         const { user } = await createUser(email, password)
         //2. upload image
         const imageUploadResponse = await uploadImage(data?.image[0])
         const image = imageUploadResponse?.data?.url;
         console.log(imageUploadResponse, image);
         //3. Save username & profile photo
         await updateUserProfile({ name, image })
         const accessToken = await getAccessToken(user?.email)

         if (accessToken?.success) {
            // save/update user info to database
            const data = await saveUserData(user)
            console.log(data);
            toast.success('Registration Successfull and Logged In', { id: toastId })
            navigate(loc?.state ? loc.state : '/dashboard/all-tasks', { replace: true })
         } else {
            logOut()
         }
      } catch (error) {
         toast.error(error.message, { id: toastId });
         // navigate('/login');

      }
   }

   const handleRegisterWithGoogle = async () => {
      const toastId = toast.loading('Registering ...')

      try {
         const { user } = await signInWithGoogle();
         // get AccessToken 
         const accessToken = await getAccessToken(user?.email)
         if (accessToken?.success) {
            const data = await saveUserData(user)
            console.log(data);
            toast.success('Successfully Registered', { id: toastId })
            navigate(loc?.state ? loc.state : '/dashboard/all-tasks', { replace: true })

         } else {
            logOut()
         }
      } catch (error) {
         toast.error(error.message, { id: toastId });
      }
   }
   return (
      <div style={{ backgroundImage: `url(${bg})` }} className="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center flex justify-center items-center overflow-hidden">
         <div className='md:w-[80%] mx-auto min-h-[600px] '>
            <div className={'flex flex-col-reverse lg:flex-row w-[90%] mx-auto gap-5 justify-between items-center'}>

               <div className='w-11/12 lg:w-3/5 xl:w-1/2  my-16'>
                  <h2 className='text-4xl font-bold text-center mb-5 text-white'>Register</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-5'>
                        <div className='w-full mb-5'>
                           <label className="text-xl font-medium text-white "> Name <span className='text-red-500'>*</span></label>
                           <input type="text" {...register("name", { required: true })} placeholder="Name here" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                           {errors.name?.type === 'required' && <p className='text-red-500'>Name is required</p>}
                        </div>
                        <div className='w-full mb-5'>
                           <label className='block mb-2 text-xl  font-medium text-white '>
                              Select Image <span className='text-red-500'>*</span>
                           </label>
                           <input
                              className='file:mr-4 file:py-4 file:px-4 file:rounded-[8px] file:border-0 file:text-base file:font-semibold file:text-[#444444] file:bg-primary bg-white rounded-[8px] file:normal-case text-base   text-gray-500 w-full'
                              type='file'
                              accept='image/*'
                              {...register("image", { required: true })}
                           />
                           {errors.image?.type === 'required' && <p className='text-red-500'>image is required</p>}
                        </div>
                     </div>
                     <div className='w-full mb-5'>
                        <label className="text-xl font-medium text-white "> Email <span className='text-red-500'>*</span></label>
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                        {errors.email?.type === 'required' && <p className='text-red-500'>email is required</p>}
                     </div>

                     
                     <div className='w-full  relative'>
                        <label className="text-xl  font-medium text-white "> Password <span className='text-red-500'>*</span></label>
                        <input type={`${showPass ? 'text' : 'password'}`} {...register("password", { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/ })} placeholder="Enter your password" className=" h-14 w-full mt-2  rounded-[8px]  bg-white px-4  outline-none" />
                        <div onClick={() => setShowPass(!showPass)} className='absolute top-[48px] right-5 cursor-pointer'>
                           {

                              !showPass
                                 ? <IoMdEye size={32} />
                                 : <IoMdEyeOff size={32} color='red' />
                           }
                        </div>
                        {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be more than 6 chracters</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-500'>password must have contain minimum 1 uppercase, 1 lowercase, 1 number and 1 spcial chracter</p>}

                     </div>

                     <div className='mb-5 grid grid-cols-1 md:grid-cols-2 gap-5'>
                        
                        

                     </div>
                     <div className='w-max rounded-lg bg-white px-5 py-2 mb-1'>
                        <LoadCanvasTemplate reloadColor="#00b894" />
                     </div>
                     <div className='w-full'>
                        <input type="text" {...register("captchaInput", { required: true })} placeholder='Type the Captcha above' className=" h-14  w-full mt-1 rounded-[8px] bg-white px-4 outline-none" />
                        {errors.captchaInput?.type === 'required' && <p className='text-red-500'>Captcha validation is required</p>}
                     </div>

                     <button type='submit' className='py-4 w-full border-none rounded-md text-lg bg-primary/70 backdrop-blur mt-5 text-white hover:bg-primary'>
                        Register
                     </button>
                  </form>

                  <div className='text-center'>
                     <p className='text-primary mt-3'>Already registered? <Link to='/login' className='font-bold hover:text-[#ffa620]'>Go to log in</Link></p>
                  </div>
                  <div className='flex justify-between items-center gap-2 my-2'>
                     <hr className='border border-primary flex-1' />
                     <p className='text-lg text-primary font-bold'>Or</p>
                     <hr className='border border-primary flex-1' />
                  </div>
                  <button onClick={handleRegisterWithGoogle} className="cursor-pointer group border-primary   inline-flex  w-full items-center justify-center gap-2  rounded-lg border px-4 py-3 transition-colors duration-300  hover:bg-primary  focus:outline-none">
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
   )
}
export default Register;