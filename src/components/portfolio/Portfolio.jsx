import { useState, useEffect} from 'react';
import PortfolioList from '../portfoliList/PortfolioList';
import './portfolio.scss';
import {
   featuredPortfolio,
   webPortfolio,
   mobilePortfolio,
   designPortfolio,
   contentPortfolio,
 } from "../../data";
export default function Portfolio() {
const [selected, setSelected] = useState('featured');
const [data, setData] = useState([])



    const list = [
      {
        id: "featured",
        title: "Featured",
      },
      {
        id: "web",
        title: "Web App",
      },
      {
        id: "mobile",
        title: "Mobile App",
      },
      {
        id: "design",
        title: "Design",
      },
      {
        id: "content",
        title: "Content",
      },
    ];

 
useEffect(() => {
   switch (selected) {
     case "featured":
       setData(featuredPortfolio);
       break;
     case "web":
       setData(webPortfolio);
       break;
     case "mobile":
       setData(mobilePortfolio);
       break;
     case "design":
       setData(designPortfolio);
       break;
     case "content":
       setData(contentPortfolio);
       break;
     default:
       setData(featuredPortfolio);
   }
 }, [selected]);


  return (
     <div className="portfolio" id='portfolio'>
        <h1>Portfolioed</h1>
        <ul>
         {list.map((item) => (
            <PortfolioList key={item.id} title = {item.title} active = {selected === item.id} setSelected = {setSelected} id = {item.id}/>
         ))}
        </ul>

        <div className="container">
         {data.map((element) => (
                     <div className="item" key={element.id}>
                     <img src= {element.img} alt={element.title} />
                     <h3>{element.title}</h3>
                  </div>
         ))}

        </div>
     </div>
  )
}
