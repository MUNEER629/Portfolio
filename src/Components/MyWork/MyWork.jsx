import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index}>
              <img src={work.w_img} alt={work.w_name} />
              <h1>{work.w_name}</h1>
              <p>{work.w_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
