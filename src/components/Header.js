import React, {Component} from 'react';
import logo from '../images/logo-macquarie-telecom.png';
import styles from './Header.css';

class Header extends Component {
    render() {
        return (
            <div className={styles.Header}>
                <img src={logo} className={styles.Logo} alt="logo"/>
                <div className={styles.Title}>Welcome to LOC-8</div>
            </div>
        );
    }
}

export default Header;
