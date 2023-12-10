import React from "react"
import { Link } from "react-router-dom";

export default function Tweet(props) {
    console.log(props.tweet.tweetGroup);
    return (
        <>
            <div className="tweet">
                <div className="tweet-avatar">
                <Link to={`/users/${props.tweet.id}`}><img src={props.tweet.tweetAvatar} alt="" /></Link>
                    
                </div>
                <div className="tweet-content">
                    <div className="tweet-body">
                        <div className="tweet-title">
                            <h3>{props.tweet.tweetTitle}</h3>
                            <img src={props.tweet.tweetGroup} alt="" />
                            <p className="gray-text">{props.tweet.tweetP}</p>
                        </div>
                        <p className="tweet-text">
                        {props.tweet.tweetText}
                        </p>
                        <img src={props.tweet.tweetImage} className="tweet-image"  />
                    </div>
                    <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={props.tweet.tweetComment} alt="" />
                            <p>{props.tweet.details.comments}</p>
                        </div>
                        <div className="tweet-action">
                            <img src={props.tweet.tweetFlech} alt="" />
                            <p>{props.tweet.details.fleche}</p>
                        </div>
                        <div className="tweet-action">
                            <img src={props.tweet.tweetHeart} alt="" />
                            <p>{props.tweet.details.likes}</p>
                        </div>
                        <div className="tweet-action">
                            <img src={props.tweet.tweetShare} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}