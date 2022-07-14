import styles from './Task.module.css';
import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react';
import { PlusCircle } from 'phosphor-react';
import { EmptyTask } from './EmptyTask';
import { SingleTask } from './SingleTask';
import { v4 as uuidv4 } from 'uuid';

const initialTasks = [
 {
    id: uuidv4(),
    title: 'Your Most Important Task',
    isCompleted: false
 },
 {
    id: uuidv4(),
    title: 'Easier Task',
    isCompleted: false
 },
]
 
export function Task() {
  const [task, setTask] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [tasksMade, setTasksMade] = useState(initialTasks.length);

  const doneTasks = task.filter(task => task.isCompleted).length;
    
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    const newTaskSubmitted = {
      id: uuidv4(),
      title: newTask,
      isCompleted: false
    }

    setTask([...task, newTaskSubmitted]);
    setNewTask('');
    setTasksMade(tasksMade + 1);
  }

  function handleNewInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Task is required');
  }

  function handleInputChange(event: 
    ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleDeleteTask(id: string) {
    const newTaskList = task.filter(task => task.id !== id);

    setTask(newTaskList);
    setTasksMade(tasksMade - 1);
  }

  function handleChangeIsCompleted(id: string) {
    const newTaskList = task.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    }
    );

    setTask(newTaskList);
  }

  return (
    <div>
      <div className={styles.input}>
        <form className={styles.formTask} onSubmit={handleFormSubmit}>
          <input type="text" placeholder="Adicione uma nova tarefa" value={newTask} onInvalid={handleNewInvalidTask} onChange={handleInputChange} required />
          <button type='submit'>Criar <PlusCircle size={20} /></button>
        </form>
      </div>

      <div className={styles.info}>
          <div className={styles.created}>
            <p>Tarefas Criadas<span className={styles.createdLeftTask}>{tasksMade}</span></p>
          </div>
          <div className={styles.done}>
            <p>Concluídas<span className={styles.createdRightTask}>{doneTasks} de {tasksMade}</span></p>
          </div> 
      </div>
      <main>
        {
          task.length === 0 ? <EmptyTask /> : task.map(task => (
              <SingleTask 
                key={task.id} 
                title={task.title} 
                id={task.id} 
                onCompletingTask={handleChangeIsCompleted} 
                isCompleted={task.isCompleted} 
                onDeleteTask={handleDeleteTask} 
              />
          ))
        }
      </main>
    </div>
  )
}