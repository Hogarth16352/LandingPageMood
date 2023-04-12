import { MainIcons } from "../MainIcons/MainIcons"
import { MainImage } from "../MainImage/MainImage";
import { MainTitles } from "../MainTitles/MainTitles";
import './Main.css';


export const Main = () => {
  return (
    <main>
        <MainIcons />
        <article>
            <MainTitles />
            <MainImage />
        </article>
    </main>
  )
}
