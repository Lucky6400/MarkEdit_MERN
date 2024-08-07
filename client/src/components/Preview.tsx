import { useSelector } from 'react-redux'
import styles from './Preview.module.css'

const Preview = () => {
    const currenthtml = useSelector((s: AppState) => s.htmlReducer.html)
    console.log(currenthtml)
    return (
        <div dangerouslySetInnerHTML={{ __html: currenthtml }} className={styles.preview}>

        </div>
    )
}

export default Preview