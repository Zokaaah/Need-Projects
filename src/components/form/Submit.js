import styles from './Submit.module.css'
function Submit({name, text}){
    return(
        <div>
            <button class={styles.btn1}>{text}</button>
        </div>
    )

    
}export default Submit