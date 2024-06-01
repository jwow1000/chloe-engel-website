import styles from "./lazyImg.module.css";

function LazyImage({ alt, src }) {
  return (
    <img 
      className={styles.imgRoot}
      src={src} 
      alt={alt} 
    />
  )
}

export default LazyImage