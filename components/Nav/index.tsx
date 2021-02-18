import Link from 'next/link';
import navStyles from '../../styles/Nav.module.css';
import { FunctionComponent } from 'react';

interface INavProps {}
export const Nav: FunctionComponent<INavProps> = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/hiscores">Hiscores</Link>
        </li>
      </ul>
    </nav>
  );
};
