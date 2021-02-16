import { Nav } from '../Nav';
import styles from '../../styles/layout.module.css';
import { FunctionComponent } from 'react';

interface ILayoutProps {
  children: any;
}
export const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
