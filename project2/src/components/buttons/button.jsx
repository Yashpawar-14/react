import styles from './button.module.css'
import { MdMessage } from "react-icons/md";

const Button = ({isOutline, icon , text , ...rest}) => {
  
  return (
    <>
    <button {...rest}className={isOutline ? styles.outline_btn: styles.primary_btn}> 
    
    {icon}
    {text}
    
    </button>
    

    </>
  )
}

export default Button