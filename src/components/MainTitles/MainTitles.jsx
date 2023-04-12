import { IoMdArrowDropdownCircle } from 'react-icons/io';
import './MainTitles.css';

export const MainTitles = () => {
  return (
    <section>
        <div className="section-titles">
            <h1>Hi, I'm Alan</h1>
            <h5>Frontend Developer</h5>
        </div>
        <p>High level experience in web design.</p>
        <button>Contact Me <IoMdArrowDropdownCircle/></button>
    </section>
  )
}
