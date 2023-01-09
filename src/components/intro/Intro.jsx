import "./intro.scss";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
export default function Intro() {
const [text] = useTypewriter({
    words: ["Developer", "Designer", "Content Creator"],
    loop: 0,

  });


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Safak Kocaoglu</h1>
          <h3>Freelance <span>{text}</span><Cursor cursorColor="rgb(255, 208, 0)"/>
          </h3>
        </div>

      </div>
      <a href="#portfolio">
        <div class="down"></div>
        </a>
    </div>
  );
}
