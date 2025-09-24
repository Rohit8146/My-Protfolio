import React from "react";
import Heading from "../Heading/Heading";
import "./workexp.css";
import ExpCard from "./ExpCard";
import cardImageOne from '../../assets/images/work-exp-1.png'
import cardImageTwo from '../../assets/images/work-exp-2.png'
import cardImageThree from '../../assets/images/work-exp-3.png'
import cardImageFour from '../../assets/images/work-exp-4.png'
function WorkExp() {
    const data = [
        {
            title : 'CIB on the Mobile',
            para : 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
            image : cardImageOne
        },
        {
            title : 'CIB on the Mobile',
            para : 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
            image : cardImageTwo
        },
        {
            title : 'CIB on the Mobile',
            para : 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
            image : cardImageThree
        },
        {
            title : 'CIB on the Mobile',
            para : 'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
            image : cardImageFour
        }
    ]
  return (
    <div className="work-exp">
      <div className="container">
        <Heading title="Work Experience" />
        <div className="Card-container">
            {data.map( (item) =>  <ExpCard title={item.title} image={item.image} para={item.para} />
            )}
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
