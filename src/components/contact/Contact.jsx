import React,{useRef} from 'react'
import "./contact.css"
import emailjs from 'emailjs-com'
import {MdOutlineMail,MdOutlinePhone} from 'react-icons/md'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lu1lg19', 'template_5c25dqi', form.current, 'YS9zfOXLfrbQP1Xet')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>navaneetjpr@gmail.com</h5>
            <a href="mailto:navaneetjpr@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <MdOutlinePhone className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-7726898947</h5>
            <a href="https://api.whatsapp.com/send?phone=7726898947" target="_blank">Send a Message</a>
          </article>
        </div>
        <form onSubmit={(e)=>sendEmail(e)}  ref={form}>
          <input type="text" name='name' required placeholder='Your Full Name' />
          <input type="email" required name='email' placeholder='Your Email' />
          <textarea name="message" placeholder='Your Message' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact