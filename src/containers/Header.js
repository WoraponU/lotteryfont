import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { logout } from 'Actions'
import styles from './Header.scss'

const Header = ({ isLoggedIn, logout }) => (
  <header className={styles.header}>
    <div className="container">
   
    <img src="assets/images/logo.png" alt=""/>
   
    
    {/*<Link to='/articles' className={styles['nav-link']}>Articles</Link>
    <Link to='/' className={styles['nav-link']}>หน้าแรก</Link>
   */}
    </div>
  </header>
)

export default connect(
  ({ auth }) => ({
    isLoggedIn: !!auth.token
  }),
  { logout }
)(Header)
