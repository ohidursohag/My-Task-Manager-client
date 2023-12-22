import { useRef } from "react";

import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

import Title from "../../Utilities/Title";
const ContactUs = () => {
   const form = useRef();

   const sendEmail =  (e) => {
      e.preventDefault();
const toastId = toast.loading('Submitting...')
      emailjs.sendForm('service_hw778bh', 'template_upew0yk', form.current, 'WXPtuXwhH6xBS-pqZ')
         .then((result) => {
            console.log(result);
            console.log(result.text);
            if (result.text === 'OK') {
               toast.success('message sent',{id: toastId})
            }
         }, (error) => {
            console.log(error.text);
            toast.error(error.text, { id: toastId })
         });
   };
return(
   <div id="contact">
      <Title>Contact With Us</Title>
      <div className="pb-16">
         <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-center bg-no-repeat bg-cover px-5">
            <div className="flex flex-col sm:flex-row  items-center gap-5">
               <input required type="text" name="user_name" placeholder="Your name" className="bg-primary/40 flex-1 py-5 rounded-lg px-3 text-neutral  placeholder:text-neutral/80 placeholder:font-bold placeholder:text-lg font-medium text-lg outline-none border-2 border-transparent transition-all duration-1000 focus:border-secondary w-full"/>
               <input required type="email" name="user_email" placeholder="your email" className="bg-primary/40 flex-1 py-5 rounded-lg px-3 text-neutral  placeholder:text-neutral/80 placeholder:font-bold placeholder:text-lg font-medium text-lg outline-none border-2 border-transparent transition-all duration-1000 focus:border-secondary w-full" />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5">
               <input required type="tel" name="user_phone" placeholder="Your Phone" className="bg-primary/40 flex-1 py-5 rounded-lg px-3 text-neutral  placeholder:text-neutral/80 placeholder:font-bold placeholder:text-lg font-medium text-lg outline-none border-2 border-transparent transition-all duration-1000 focus:border-secondary w-full" />
               <input required type="text" name="subject" placeholder="Subject" className="bg-primary/40 flex-1 py-5 rounded-lg px-3 text-neutral  placeholder:text-neutral/80 placeholder:font-bold placeholder:text-lg font-medium text-lg outline-none border-2 border-transparent transition-all duration-1000 focus:border-secondary w-full" />
            </div>
            <textarea placeholder="Your message" name="message" rows="5" className="w-full bg-primary/40  py-5 rounded-lg px-3 text-neutral  placeholder:text-neutral/80 placeholder:font-bold placeholder:text-lg font-medium text-lg outline-none border-2 border-transparent transition-all duration-1000 focus:border-secondary"></textarea>
            
            <input type="submit" value="Send Message" className="w-full bg-primary/40  py-5 rounded-lg px-3 text-white  font-bold text-xl outline-none  transition-all duration-1000 cursor-pointer  bg-gradient-to-r from-primary  to-secondary  hover:from-secondary  hover:to-primary" />
         </form>
      </div>
   </div>
)}
export default ContactUs;