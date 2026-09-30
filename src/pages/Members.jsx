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
    <div>
      <h1 className="title">Team-band</h1>

      {team.map(({ name, role, img, text }) => (
        <Member name={name} role={role} img={img} text={text}></Member>
      ))}

    </div>
  );
}