import { motion } from 'framer-motion';
import { useState } from 'react';

import greenLead1 from '../../images/greenLead1.jpg';
import goldyMan from '../../images/goldyMan2.jpg';

import bass from '../../images/bass.jpg';
import classik from '../../images/classik.jpg';
import drums from '../../images/drums.jpg';
import ukulele from '../../images/ukulele.jpg';

import { Member } from '../components/Member';


const team = [
  {name: 'Black Labradoodle', role: 'Drums Boss', img: drums, text: 'текст текст текст'},
  {name: 'Goldy Man', role: 'Rithm Jocker', img: goldyMan, text: 'текст текст текст'},
  {name: 'Green Lead', role: 'Solo-master', img: greenLead1, text: 'текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст'},
  {name: 'Pretty Girl', role: 'Classic-master', img: classik, text: 'текст текст текст'},
  {name: 'Low Gay', role: 'Bass-gigant', img: bass, text: 'текст текст текст'},
  {name: 'Microman', role: 'Ukulele Smile', img: ukulele, text: 'текст текст текст'},
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