import {LIST_TYPES} from '../../config'
import css from './Footer.module.css'

function Footer(props) {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				<div>Active tasks:
						{' ' + tasks.filter(task => task.status === LIST_TYPES.BACKLOG).length}
					</div>
					<div>Finished tasks:
						{' ' + tasks.filter(task => task.status === LIST_TYPES.FINISHED).length}
					</div>
				</div>
			<div className={css.userName}>
				Kanban board by <a href='https://github.com/caesarrius' target='_blank' rel='noreferrer'> @JuliaSoldatova</a>, 2023
			</div>
		</footer>
	)
}

export default Footer
