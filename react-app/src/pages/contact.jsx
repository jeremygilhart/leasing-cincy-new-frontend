import React, {useRef} from "react"
import emailjs from '@emailjs/browser';
export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9c23tzb', 'template_p3lizi7', form.current, 'NXddaTHpdVUShlgQT')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return  <form ref={form} onSubmit={sendEmail}>
            <label>
              <input type="text" name="user_name" placeholder="Full Name" />
            </label>
            <label>
              <input type="text" name="user_email" placeholder = "Email Address" />
            </label>
            <label>
              <input type="text" name="user_phone" placeholder = "Phone Number"/>
            </label>
            <label>
              <textarea name="message" placeholder = "Message"/>
            </label>
            <input name="submit" type="submit" value="Send" />
          </form>

}