import styles from './EmptyTask.module.css';
import boardImg from '../assets/Clipboard.png';

export function EmptyTask() {
  return (
    <div className={styles.task}>
        <div className={styles.empty}>
          <img src={boardImg} alt="ClipBoard" />
          <p><span className={styles.bold}>Você ainda não tem tarefas cadastradas</span>
          Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
  )
}