import { useEffect } from "react";
import { SocialIconsMood } from "../SocialIconsMood/SocialIconsMood"
import './Nav.css';

export const Nav = () => {

  useEffect(() => {
    const moodItem = document.querySelector('.mood-item');
    const bodyVery = document.querySelector('#body');

    const handleClick = () => {
      bodyVery.classList.toggle( 'mood' );
    }

    moodItem.addEventListener('click', handleClick);

    return () => {
      moodItem.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Services</li>
            <li>Porfolio</li>
            <li>Contact me</li>
            <li className = "mood-item"><SocialIconsMood /></li>
        </ul>
    </nav>
  )
}

// const MoodItem = document.querySelector('.mood-item');
// const BodyVery = document.querySelector('#body');


// MoodItem.addEventListener('click', () => {
//   BodyVery.classList.toggle( 'mood' );
// })