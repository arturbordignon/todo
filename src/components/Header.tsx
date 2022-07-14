import styles from './Header.module.css';
import logo from '../assets/todo-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Todo Logo" />
      <h1>to<span className={styles.colorDo}>do</span></h1>
    </header>
  )
}