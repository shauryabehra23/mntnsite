import Part from './MainPart';
import first from '../pics/first.png'
import second from '../pics/second.jpg'
import third from '../pics/third.png'

export default function Main() {
    return(
        <div className="main">
            <Part int={1} pic={first} t1="-----GET STARTED" t2="What level of  hiker are you?" t3="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? " />
            <Part int={2} pic={second} t1="-----HIKING ESSENTIALS" t2="Picking the right Hiking Gear!" t3="The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have.
                Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet." />
            <Part int={3} pic={third} t1="-----WHERE YOU GO IS THE KEY" t2="Understand Your Map & Timing" t3="To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction.." />
        </div>
    )
}
