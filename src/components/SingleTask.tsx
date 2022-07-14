import styles from './SingleTask.module.css';
import circleUnchecked from '../assets/todo.svg'
import circleChecked from '../assets/done.svg'
import { Trash } from 'phosphor-react';
import { useState } from 'react';
 
interface TaskProps {
  id: string;
  title: string;
  onDeleteTask: (id: string) => void;
  isCompleted: boolean;
  onCompletingTask: (id: string) => void;
}

export function SingleTask({ id, title, onDeleteTask, isCompleted, onCompletingTask }: TaskProps) {
  const [isCompletedChange, setIsCompletedChange] = useState(isCompleted);

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeIsCompleted() {
    setIsCompletedChange(!isCompletedChange);
    onCompletingTask(id);
  }

  return (
    <div className={styles.taskList}>
      <div className={styles.contentImgAndP}>
        <img src={isCompletedChange ? circleChecked : circleUnchecked} onClick={handleChangeIsCompleted} />
        <p className={ isCompletedChange ? styles.DoneCircle : styles.UnCircle }>{title}</p>
      </div>
      <button title='Deletar Tarefa' onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  )
}