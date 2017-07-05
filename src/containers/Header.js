import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { logout } from 'Actions'
import styles from './Header.scss'

const Header = ({ isLoggedIn, logout }) => (
  <header className={styles.header}>
    <nav className="navbar">
  
      <div className="container">
        <div className="navbar-header">
          <a href="" className="logo">
              <img src="assets/images/logo.png" alt="Hobbiz"/>
          </a>
        </div>
        <div className="collapse navbar-collapse pull-right">
          <ul className="list-inline nav navbar-nav navbar-left">
            <li>
              <a href="">TH</a>
            </li>
            <li>
              <a href="">EN</a>
            </li>
          </ul>

        </div>
    

      </div>
     </nav>
  </header>
)
 {/*<Link to='/articles' className={styles['nav-link']}>Articles</Link>
    <Link to='/' className={styles['nav-link']}>หน้าแรก</Link>
   */}
export default connect(
  ({ auth }) => ({
    isLoggedIn: !!auth.token
  }),
  { logout }
)(Header)
