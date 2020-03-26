import React from "react";

import star from '../../img/star.png';
import fork from '../../img/fork.png';
import './Card.css';

const Card = (props) => {
    return(
        <div className="Card">
            <div className="Card--Left">
                <img src={props.href} className="Card--LeftImg" />
                <h1 className="Card--LeftTag"><span style={{height : '1rem', width: '1rem', backgroundColor: props.color, borderRadius: "50%"}}></span>{props.lang}</h1>
            </div>
            <div className="Card--Right">
                <a target="_blank" href={props.url} ><h1 className="Card--RightHeading">{props.author} / {props.repoName}</h1></a>
                <p className="Card--RightPara">{props.content}</p>
                <div className="Card--RightStats">
                    <div className="Card--RightStatsBox">
                        <img src={star} className="Card--RightStatsBoxImg" />
                        <h2 className="Card--RightStatsBocStat">{props.stars}</h2>
                    </div>
                    <div className="Card--RightStatsBox">
                        <img src={fork} className="Card--RightStatsBoxImg" />
                        <h2 className="Card--RightStatsBocStat">{props.forks}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;