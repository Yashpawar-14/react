
import styles from './navigation.module.css'

const Navigation = () =>{
  console.log(styles)

    return(
        <>
         <nav className={`${styles.navigation} container`}>
        <div className="logo">
        <img src="/images/Logo.png" alt="" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </nav>
        
        </>
    )
}
export default Navigation