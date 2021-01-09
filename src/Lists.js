import React,{Component} from 'react';
import Test1 from './Test';
import "./Lists.css";

class Lists extends Component {
    
    render() {
       const myDetails = [
          {
            name: "nir bahadur",
            age: 21,
            city: "gorkha nepal",
          },
          {
            name: "kham bahadur",
            age: 48,
            city: "tanahaun ",
          },
          {
            name: "dil bahadur",
            age: 54,
            city: "kathmandu",
          },
        ];
      const mDetail = myDetails.map(function (item, index) {
        return <div>
            <Test1
              myname={myDetails[index].name}
              myage={myDetails[index].age}
              mycity={myDetails[index].city}
            />
          </div>
        
        })
          
         
      return (
          <div className="mainDiv">
              <h3>My Details</h3>
              <div calssName="daTas">
                v{mDetail}
              </div>
            </div>
       )
       
   }
    
}
export default Lists;