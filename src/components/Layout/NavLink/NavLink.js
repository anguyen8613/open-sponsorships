import Link from 'next/link';

import styles from './NavLink.module.scss';

export const NavLink = ({text, href}) => {
  if (!href) {
    return (
      <button className={styles.btn}>
        {text}
      </button>
    )
  };
  return (
    <Link href={href} passHref>
      <button className={styles.btn}>
        {text}
      </button>
    </Link>
  )
}