import './topbar.scss';
import { BsPersonFill, BsEnvelopeFill } from "react-icons/bs";
export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}> 
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius. </a>
          <div className="itemContainer">
            < BsPersonFill className='icon'/>
            <span>+44 924 12 74</span>
          </div>

          <div className="itemContainer">
            < BsEnvelopeFill className='icon'/>
            <span>info@genius.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
