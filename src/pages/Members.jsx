import { motion } from 'framer-motion';
import { useState } from 'react';

import greenLead1 from '../../images/greenLead1.jpg';
import goldyMan from '../../images/goldyMan1.jpg';

import { Member } from '../components/Member';


const team = [
  {name: 'Green Lead', role: 'Solo-master', img: greenLead1, text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст'},
  {name: 'Goldy Man', role: 'Rithm Jocker', img: goldyMan, text: 'текст текст текст'}
];

export function Members() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="title">Team-band</h1>

      {team.map(({ name, role, img, text }) => (
        <Member key={name} name={name} role={role} img={img} text={text}></Member>
      ))}

    </motion.div>
  );
}