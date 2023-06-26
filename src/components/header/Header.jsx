import { useState } from 'react'
import css from './Header.module.css'
import userAvatar from '../../assets/userAvatar.svg'
import arrowDown from '../../assets/arrowDown.svg'
import arrowUp from '../../assets/arrowUp.svg'


function Header() {
    const [isAuthVisible, setAuthVisible] = useState(false)

	const handleAuth = () => {
		setAuthVisible(!isAuthVisible)
	}
	return (
		<header className={css.header}>
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<div className={css.userAvatar} onClick={handleAuth}>
				<img src={userAvatar} alt="user" />
				{isAuthVisible ? <img src={arrowUp} alt="arrow" /> : <img src={arrowDown} alt="arrow" />}
			</div>
			{ isAuthVisible && (
				<div className={css.auth}>
					<p className={css.authItem}>Profile</p>
					<p className={css.authItem}>Log Out</p>
				</div>
			)}
		</header>
	)
}

export default Header