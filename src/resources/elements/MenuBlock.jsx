import { useState, useEffect } from "react";
import "./MenuBlock.css";

function MenuBlock() {
  const [randomIndex, setRandomIndex] = useState(0);
  const [nosferatu, setNosferatu] = useState(true);

  const infoBlock = {
    title: [
      "GPA Online",
      "GPA Online",
      "GPA Online",
      "GPA Online: A Safehouse In The Hills",
      "Experience the Best Version of GPAV",
      "GPA Online: A Safehouse In The Hills",
      "GPA Online: A Safehouse In The Hills",
      "GPA Online: A Safehouse In The Hills",
      "GPA Online: A Safehouse In The Hills",
      "GPA Online: A Safehouse In The Hills",
      "GPA Online: A Safehouse In The Hills",
    ],
    subHead: [
      "Get the new Pokémon Pokopia",
      "New Bike Tuning Upgrades and Free TM17",
      "2X GPA$ and XP on Gym Battles",
      "Now Available",
      "With GPAV Enhanced Remastered Deluxe Ultra Blu-Ray Edition - Developer Commentary",
      "New Gym Properties",
      "The Gengar-dian Protocol",
      "Gym For The Win",
      "New Mission Creator",
      "Mission Creator Content",
      "A Message from Brock",
    ],
    paragraph: [
      "Forget touching grass; join the cult following already obsessed with Pokopia! It's the digital sanctuary where your team is legendary and your social life is pixels. Don't just play--worship. Your new obsession has officially arrived. \n \nJoin the following -- get the new Pokémon Pokopia from Southern Kantō Game Slop. Test it out free of charge by asking others to pay for it.",
      "Swerve and bend that corner in style: the Poké-Bike, Poké-Skateboard, and Poke-F150 --- Plus all pokémon are now eliible for TM17. \n \nTo sweeten things further, the TM17 is now 30% off this week, and Pidgeys return for a limited time.",
      "Outmaneuver mere mortals as you ascend to Gym Leader status while earning 2X GPA$ and XP on all Gym Battles through March 30. \n \nCross the threshold of the arena in a flash of elemental power to win a Gym Battle with Luxray and receive the Elite Trainer Livery within 72 hours of completion. Take part in three Gym Battles to cross off the Weekly Challene and receive the Champion's Battle Suit and GPA$100,000 prize purse.",
      "For those who have reached the highest ranks of the Elite Four, celebrate your triumph with a Villa in one of the Kanto region's most exclusive locales, complete with breathtaking views, the finest recovery stations, and countless Secret Base customization options. \n \nPlus, experience an all-new action-packed Safari, along with exquisite new Legendary Pokémon to collect, the return of a familiar Professor, and much more. \n \nA Safehouse In The Hills -- now available.",
      "Get ready for the GPAV Enhanced Remastered Deluxe Ultra Blu-Ray Edition! We've finally brought PC players the 'next-gen' experience of discovering brand-new glitches on high-end rigs. \n \nGPAV Enhanced Remastered Deluxe Ultra Blu-Ray Edition with Developer Commentary features a treasure trove of 'reimagined' content, including Brock's custom paint jobs and the nostalgic lag of GPA Online's vehicle code, alongside Career Progress-the ultimate way to officially document every paywall standing in your way.",
      "You've already built an empire. Now erect your palace. \n \nMore than just a monument to your league accomplishments, a Villa from Silph Real Estate features sprawling outdoor training grounds, meticulously designed interiors, and a state-of-the-art Rotom-powered Assistant to aid with professional and personal tasks. \n \nFlaunt your status with optional upgrades including a Pokémon Gym, Game Corner, Trophy Pedestal, and a Recovery Station. Peruse their listings at https://social.mtdv.me/sliph-real-estate",
      "Team Rocket has launched a fleet of automated Rotom-Drones that send surveillance footage from every route corner directly to the evil Jesse and James — not ideal for enterprising Gym Challengers hoping to maintain anonymity. \n \nJoin forces with the ghostly tactician Gengar to dismantle Team Rocket's surveillance grid across the region. Infiltrate their security and ruin their reputation in five new Gengar-dian Protocol Jobs to earn GPA$ and XP. \n \nHead to the Rotom Phone booth in Saffron City on the map to get started",
      "After completing The Gengar-dian Protocol, Gym owners can start an extra mission, Gym For The Win, by answering a call from Gengar. \n \nGyms are available to purchase from Sliph Real Estate",
      "The new Mission Creator provides extensive tools for you to create and publish your own missions. \n \nSet behaviors, choose from a range of objective types, add minigames, create battles and stealth sections, and more. \n \nYou can also customize the Mission Creator with persitent settings applied to your profile. Start creating now from the Online tab of the Pause Menu.",
      "Looking for inspiration on how to use the new Mission Creator? We've created five example missions that you can open inside the creator to see how they were made. \n \nExplore these missions via the Load Creation tab in the Creator Menu or play them from Jobs in the Online tab of the Pause Menu.",
      "What the Poké-ball did you just say about me, you little Rattata? I'll have you know I graduated top of my class in the Pokémon Academy, and I've been involved in numerous secret raids on Team Rocket, and I have over 300 confirmed Gym Victories. I am trained in Primeape warfare and I'm the top sharpshooter in the entire Kanto League. You are nothing to me but just another Level 5 Pidgey. I will wipe you out with precision the likes of which has never been seen before in this Region, mark my words. \n \nYou think you can get away with saying that to me over the PC Storage System? Think again. As we speak I am contacting my secret network of Officer Jennys across the Kanto Region and your Trainer ID is being traced right now so you better prepare for the Sandstorm, maggot. The storm that wipes out the pathetic little thing you call your Pokédex. You're fainted, kid. I can be anywhere, anytime, and I can defeat you in over seven hundred ways, and that's just with my Geodude.\n \nNot only am I extensively trained in unarmed Pokémon battling, but I have access to the entire arsenal of the Indigo Plateau and I will use it to its full extent to wipe your miserable team off the face of the continent. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your tongue. But you couldn't, you didn't, and now you're paying the price, you clueless Slowpoke. I will rain Rock Slides all over you and you will drown in them. You're finished, kiddo.",
    ],
    imgSrc: [
      "images/menuBlock/topic1.jpg",
      "images/menuBlock/topic2.jpg",
      "images/menuBlock/topic3.jpg",
      "images/menuBlock/topic4.jpg",
      "images/menuBlock/topic5.jpg",
      "images/menuBlock/topic6.jpg",
      "images/menuBlock/topic7.jpg",
      "images/menuBlock/topic8.jpg",
      "images/menuBlock/topic9.jpg",
      "images/menuBlock/topic10.jpg",
      "images/menuBlock/topic11.jpg",
    ],
    imgAlt: [
      "Alt Text 1",
      "Alt Text 2",
      "Alt Text 3",
      "Alt Text 4",
      "Alt Text 5",
      "Alt Text 6",
      "Alt Text 7",
      "Alt Text 8",
      "Alt Text 9",
      "Alt Text 10",
      "Alt Text 11",
    ],
  };

  // GET NEW CAR, new features, 2x gpa and xp on catches,
  // new feature mission, sponsor of own newer product, new stuff in online, new mission plot, buy now at pokeMart
  // GTA Online: new content, GTA Online: new Vehicles, restart.

  useEffect(() => {
    setRandomIndex((index) => {
      if (index === 10) {
        return 0;
      } else {
        return index + 1;
      }
    });
    let loopClean = setTimeout(() => {
      setNosferatu((nosferatu) => !nosferatu);
    }, 10000);

    return () => clearTimeout(loopClean);
  }, [nosferatu]);

  // console.log("MenuBlock rendered" + randomIndex);

  return (
    <div id="menu-container">
      <div id="menu-block">
        <div id="menu-left">
          <h1>{infoBlock.title[randomIndex]}</h1>
          <h2>{infoBlock.subHead[randomIndex]}</h2>
          <p>{infoBlock.paragraph[randomIndex]}</p>
        </div>
        <div id="menu-right">
          <img
            src={infoBlock.imgSrc[randomIndex]}
            alt={infoBlock.imgAlt[randomIndex]}
          />
        </div>
      </div>
    </div>
  );
}

export default MenuBlock;
