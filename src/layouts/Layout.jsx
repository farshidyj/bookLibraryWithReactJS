import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h3>Library Book App</h3>
        <div> <a href="tel:+989371271327">Contact us</a> | <span>Register</span></div>
    </header>
    {children}
    <footer className={styles.footer}>Copyright @2025 | Developed by FYJ with ❤️</footer>
    
    </>
  )
}

export default Layout