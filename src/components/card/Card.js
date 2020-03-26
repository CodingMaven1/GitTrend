import React from "react";

import star from '../../img/star.png';
import fork from '../../img/fork.png';
import './Card.css';

const Card = (props) => {
    return(
        <div className="Card">
            <div className="Card--Left">
                <img src={props.href} className="Card--LeftImg" />
                <div className="Card--LeftInfo">
                    <div style={{backgroundColor: props.color}} className="Card--LeftColor"></div>
                    <h1 className="Card--LeftTag">{props.lang}</h1>
                </div>
            </div>
            <div className="Card--Right">
                <a target="_blank" href={props.url} ><h1 className="Card--RightHeading">{props.author} / {props.repoName}</h1></a>
                <p className="Card--RightPara">{props.content}</p>
                <div className="Card--RightStats">
                    <div className="Card--RightStatsBox">
                        <img src={star} className="Card--RightStatsBoxImg" />
                        <h2 className="Card--RightStatsBoxStat">{props.stars}</h2>
                    </div>
                    <div className="Card--RightStatsBox">
                        <img src={fork} className="Card--RightStatsBoxImg" />
                        <h2 className="Card--RightStatsBoxStat">{props.forks}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;