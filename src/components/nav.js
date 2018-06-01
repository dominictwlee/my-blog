import React from 'react';

import styles from './nav.module.scss';

const Nav = ({ children, styleClass }) => <nav className={styles[styleClass]}>{children}</nav>;

export default Nav;
