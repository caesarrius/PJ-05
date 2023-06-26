import { useState } from 'react'
import { Link } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars-2'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import SelectTask from '../select/SelectTask'
import PlusIcon from '../../assets/plus.svg'
import css from './List.module.css'

const List = props => {
	const {title, type, tasks, addNewTask, allTasks, setTasks} = props
	const [isFormVisible, setFormVisible] = useState(false)

	const backlogTasks = allTasks.filter(task => task.status === LIST_TYPES.BACKLOG)
	const readyTasks = allTasks.filter(task => task.status === LIST_TYPES.READY)
	const inProgressTasks = allTasks.filter(task => task.status === LIST_TYPES.IN_PROGRESS)

	const handleVisible = () => {
		setFormVisible(!isFormVisible)
	}

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			<Scrollbars autoHide autoHeight autoHeightMax={400}>
				{tasks.map(task => {
					return (
					<Link key={task.id} to={`tasks/${task.id}`} className={css.taskLink}>
						<div className={css.task}>{task.title}</div>
					</Link>
					)
				})}
			</Scrollbars>

			{type === LIST_TYPES.BACKLOG && isFormVisible && <FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />}

			{type === LIST_TYPES.READY && isFormVisible && <SelectTask filteredTasks={backlogTasks} allTasks={allTasks} setTasks={setTasks} status={LIST_TYPES.READY} setFormVisible={setFormVisible} />}
			{type === LIST_TYPES.IN_PROGRESS && isFormVisible && <SelectTask filteredTasks={readyTasks} allTasks={allTasks} setTasks={setTasks} status={LIST_TYPES.IN_PROGRESS} setFormVisible={setFormVisible} />}
			
			{type === LIST_TYPES.FINISHED && isFormVisible && <SelectTask filteredTasks={inProgressTasks} allTasks={allTasks} setTasks={setTasks} status={LIST_TYPES.FINISHED} setFormVisible={setFormVisible} />}

			{!isFormVisible && type === LIST_TYPES.BACKLOG &&
			<button className={css.addButton} onClick={handleVisible}>
				<img src={PlusIcon} alt="plus" />
				Add card
			</button>
			}

			{!isFormVisible && type === LIST_TYPES.READY && (backlogTasks.length ?
			<button className={css.addButton} onClick={handleVisible}>
				<img src={PlusIcon} alt="plus" />
				Add card
			</button>
			:
			<button className={css.addButtonDisabled} onClick={handleVisible} disabled="disabled">
			<img src={PlusIcon} alt="plus" />
			Add card
			</button>
			)}

			{!isFormVisible && type === LIST_TYPES.IN_PROGRESS && (readyTasks.length ?
			<button className={css.addButton} onClick={handleVisible}>
				<img src={PlusIcon} alt="plus" />
				Add card
			</button>
			:
			<button className={css.addButtonDisabled} onClick={handleVisible} disabled="disabled">
			<img src={PlusIcon} alt="plus" />
			Add card
			</button>
			)}

			{!isFormVisible && type === LIST_TYPES.FINISHED && (inProgressTasks.length ?
			<button className={css.addButton} onClick={handleVisible}>
				<img src={PlusIcon} alt="plus" />
				Add card
			</button>
			:
			<button className={css.addButtonDisabled} onClick={handleVisible} disabled="disabled">
			<img src={PlusIcon} alt="plus" />
			Add card
			</button>
			)}
		</div>
	)
}

export default List