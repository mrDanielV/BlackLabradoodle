import { motion } from 'framer-motion';
import { useState } from 'react';

import greenLead1 from '../../images/greenLead1.jpg';
import goldyMan from '../../images/goldyMan2.jpg';
import bass from '../../images/bass.jpg';
import classik from '../../images/classik.jpg';
import drums from '../../images/drums.jpg';
import ukulele from '../../images/ukulele.jpg';

import { Member } from '../components/Member';
import { FadeIn } from '../components/FadeIn';


/*const team = [
  {name: 'Black Labradoodle', role: 'Drums Boss', img: drums, text: 'Лапы, хвост, ритм и абсолютно музыкальный слух в длинных и чутких пушистых ушах – это настоящая леди-босс группы, хозяйка и муза банды! О, она выглядит очень мило, мягко, пушистенько, но горе тому, кто опоздал на репетицию или забыл принести медиатор, а если еще партию не отработал, то быть ему обгавканным от бриджа до макушки! Но в душе она сама доброта, балдеет от котиков, любит каждого члена банды и размер 3/4.'},
  {name: 'Pretty Girl', role: 'Classic-master', img: classik, text: 'Прелестная испанская аристократка из семьи Альваро! Аристократка не по крови, конечно, но в душе точно знатная сеньора. Утонченная, неспешная, самую чуточку высокомерная и неприступная. Но в улыбке её – растворяются, как антарктические льды в теплых водах, даже суровые сердца, а голос её нежным бархатом неспешных нот рисует счастья узор в душе закостенелой. Любит классическую музыку, романсы, мягкую мелодику и, почему-то, рок.'},
  {name: 'Green Lead', role: 'Solo-master', img: greenLead1, text: 'o	Дерзкий, неформальный внешний вид иногда бывает так обманчив. Это как раз про Green Lead по фамилии Jocker, который на самом деле робкий парень, интроверт и немножко меланхолик с богатым внутренним миром и поэтической душой. И звук его песни всегда немного минорен, с легкой слезинкой, даже если это рок-н-ролл. Green Lead добрый, стеснительный и робкий, очень переживает за фальшь на бэндах и вечно комплексует по поводу вибратто. Но когда он погружается в музыку, то будто воспаряет над миром, расправив крылья настоящего творца! Между нами, Green Lead давно и нежно влюблён в Pretty Girl и все об этом знают, но сам он уверен, что это глубочайшая тайна его души.'},
  {name: 'Goldy Man', role: 'Rithm Jocker', img: goldyMan, text: 'Самый молодой член банды, брат Green Lead и тоже Jocker, пришел к нам только в 2025-м году, но ведет себя так, будто бы сам и придумал весь проект! Самоуверенный щеголь, стильный красавчик, весь в золоте и побрякушках. Но баритоном нижних струн и правда потрясает музыкальный слух, захватывает дух. В тайне от всех слушает старую каунтри-музыку и рок 70-х, а на людях – только махровый металл!'},
  {name: 'Low Gay', role: 'Bass-gigant', img: bass, text: 'Дылда и здоровяк из семьи Фернандес, худой настолько, что диву даешься – откуда в его голосе столько мощности низких частот. Добряк, кстати, и всегда играет в бочку-кик, за что Black Labradoodle его обожает и ставит в пример всем остальным! А Low Gay только улыбается в ответ и басовито хохочет. Прелестная, открытая и честная душа, всегда на позитиве.'},
  {name: 'Microman', role: 'Ukulele Smile', img: ukulele, text: 'o	Мелкий и милый чувак по фамилии Кардоба не то, чтобы всегда с нами, скорее забегает иногда поджимовать. Что поразительно – он так мал размером, что не вдруг и разглядишь его, но ведь звучит погромче многих! И каждой ноткой будто говорит: я тут, я круче всех, я уникален! Забавный малый, лучший друг Low Gay Фернандеса.'},
];*/

const team = [
  {name: 'Black Labradoodle', role: 'Drums Boss', img: drums, text: "Paws, tail, rhythm, and absolutely perfect pitch in those long, sensitive, fluffy ears — she's the true lady-boss of the band, the hostess and muse of the crew! Oh, she looks sweet, soft, and fluffy, but woe to anyone who's late for rehearsal, forgets to bring a pick, or hasn't nailed their part — they'll get barked at from the bridge to the top of their head! But deep down she's pure kindness, goes crazy for cats, loves every member of the band, and has a soft spot for 3/4 time."},
  {name: 'Pretty Girl', role: 'Classic-master', img: classik, text: "A lovely Spanish aristocrat from the Alvaro family! Aristocratic not by blood, of course, but in her soul she's a true noble señora. Refined, unhurried, just a tiny bit haughty and unapproachable. But her smile melts even the sternest hearts like Antarctic ice in warm waters, and her voice — soft velvet of unhurried notes — paints a pattern of happiness in the most hardened soul. She loves classical music, romances, gentle melodies, and — for some reason — rock."},
  {name: 'Green Lead', role: 'Solo-master', img: greenLead1, text: "A bold, unconventional look can be so deceiving. That's Green Lead, last name Jocker — actually a shy guy, an introvert, and a bit of a melancholic with a rich inner world and a poetic soul. His song always sounds a little minor, with a tiny tear, even when it's rock 'n' roll. Green Lead is kind, shy, and timid, always worries about fret buzz, and constantly frets over his vibrato. But when he dives into the music, he seems to soar above the world, spreading the wings of a true creator! Between us, Green Lead has been quietly and tenderly in love with Pretty Girl for a long time, and everyone knows it — but he's sure it's the deepest secret of his soul."},
  {name: 'Goldy Man', role: 'Rhythm Jocker', img: goldyMan, text: "The youngest member of the crew, Green Lead's brother and also a Jocker — he only joined us in 2025, but acts like he invented the whole project himself! A cocky dandy, a stylish pretty boy, all decked out in gold and trinkets. But his baritone on the low strings truly astounds the musical ear — it takes your breath away. Secretly, he listens to old country and 70s rock, but in public — only hardcore metal!"},
  {name: 'Low Gay', role: 'Bass Giant', img: bass, text: "A lanky giant from the Fernandez family — so thin you wonder where all that low-end power in his voice comes from. A kind soul, by the way, and he always locks in with the kick drum — Black Labradoodle adores him for it and sets him as an example for everyone else! Low Gay just smiles back and laughs in his deep bass voice. A lovely, open, and honest soul, always positive."},
  {name: 'Microman', role: 'Ukulele Smile', img: ukulele, text: "A tiny and cute guy with the last name Cardoba — he's not always with us, more like drops in sometimes to jam. What's amazing is he's so small you might not even spot him at first, but boy, does he sound louder than many! Every note seems to say: I'm here, I'm the coolest, I'm unique! A funny little guy, and Low Gay Fernandez's best friend."},
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
      <h1 className="title">The Band</h1>

      {team.map(({ name, role, img, text }, index) => (
        <FadeIn key={name} delay={index * 0.1}>
          <Member key={name} name={name} role={role} img={img} text={text}></Member>
        </FadeIn>
      ))}

    </motion.div>
  );
}