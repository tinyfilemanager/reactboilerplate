import React from 'react';

import styles from "./index.module.scss"

const Header = props => {
  return (
	  <div className={styles.wrapper}>
		<span className={styles.hello}>
		  Hello World
		</span>
	</div>
  );
};

export default Header;
