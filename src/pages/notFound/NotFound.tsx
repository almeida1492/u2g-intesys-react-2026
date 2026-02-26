import styles from './notfound.module.css'

export const NotFound = () => {
  return (
    <div className={`${styles.notfound}`}>
      <h1 className={`${styles.notfound_h1}`}>404 - Page Not Found</h1>
      <p className={`${styles.notfound_p}`}>
        The page you are looking for does not exist.
      </p>
    </div>
  )
}
