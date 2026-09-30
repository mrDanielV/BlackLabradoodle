import { useState } from 'react';
import styles from './Member.module.css';

export function Member ({img, name, role, text}) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={styles.member}>
			{ /* <img src={img} alt="Green Lead" className={styles.memberImage} /> */ }

			<img src={img} alt="Green Lead" className={`${styles.memberImage} ${isOpen ? styles.open : ''}`} />
	
			<div className={styles.memberInfo}>
				<h2 className={styles.memberName}>{name}</h2>
	
				<div className={styles.memberRoleRow}>
				<span className={styles.memberRole}>{role}</span>
				<button type="button" className={styles.memberToggle}
					aria-expanded={isOpen}
					aria-label="more"
					onClick={() => setIsOpen((v) => !v)}
				>
					...
				</button>
				</div>
	
				<p className={`${styles.memberText} ${isOpen ? styles.open : ''}`}>{text}</p>
			</div>
		</div>
	);
}