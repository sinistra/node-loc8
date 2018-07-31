import React, {Component} from 'react';
import logo from '../images/logo-macquarie-telecom.png';
import styles from './Header.css';
// import { pull } from 'bootstrap-css-modules/css/pull.css';

class Header extends Component {
    render() {
        return (
            <div className={`pull-left ${styles.Header}`}>
                <img src={logo} className={styles.Logo} alt="logo"/>
                <span className={styles.Title}>Welcome to LOC-8</span>
            </div>
        );
    }
}

export default Header;
