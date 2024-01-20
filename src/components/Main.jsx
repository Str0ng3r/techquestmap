import styles from './main.module.css'
import SimpleMap from './SimpleMap.tsx'
export const Main = () => {
    return (
        <main>
            <div className={styles.cont}>
                <h1>MAP</h1>
                <div className={styles.map}>
<SimpleMap></SimpleMap>
                </div>
            </div>
        </main>
    )
}