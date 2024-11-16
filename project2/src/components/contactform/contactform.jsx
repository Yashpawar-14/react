import Button from '../buttons/button'
import styles from './contactform.module.css'
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Contactform = () => {
 
  return (
    <>
    <div className={styles.container}>
        <div className={styles.contactform}>
          <div className={styles.top_btn}>
            <Button
            icon ={<MdMessage fontSize="24px" />}
            text = "VIA SUPPORT CHAT"
            
            />
            <Button
            
            icon ={<FaPhone fontSize="24px" />}
            text = "VIA PHONE"
            
            />
          </div>
          <Button
            isOutline={true}
            icon ={<MdMessage fontSize="24px" />}
            text = "VIA SUPPORT CHAT"
            />
          <form >
            <div className={styles.formcontrol}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' />
            </div>

            <div className={styles.formcontrol}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
            </div>

            <div className={styles.formcontrol}>
            <label htmlFor="text">Text</label>
            <textarea type="text" rows="8" />
            </div>
            <div style={{display:'flex',
              justifyContent:'end'
            }}>
            <Button text = "SUBMIT"
            />
            </div>
          </form>
     
           
        </div>
        
        <div className={styles.contactimage}>

          <img src="/images/Hero.svg" alt="" />
        </div>

    </div>
    </>
  )
}

export default Contactform