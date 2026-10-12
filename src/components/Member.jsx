import { useState } from 'react';
import styles from './Member.module.css';

export function Member({ img, name, role, text }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.member}>
			<img src={img} alt="Green Lead" className={styles.memberImage} />

			<div className={styles.memberInfo}>
				<h2 className={styles.memberName}>{name}</h2>

				<div className={styles.memberRoleRow}>
					<span className={styles.memberRole}>{role}</span>
				</div>

				<button
					type="button"
					className={styles.memberToggle}
					aria-expanded={isOpen}
					onClick={() => setIsOpen((v) => !v)}
				>
					{isOpen ? 'hide' : 'read more'}
				</button>

				<p className={`${styles.memberText} ${isOpen ? styles.open : ''}`}>
					{text}
				</p>
			</div>
		</div>
	);
}