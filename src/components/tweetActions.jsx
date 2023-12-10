import {Group, Comments, FLeche, Heart, Share} from '../icons/index'

export default function TweetActions () {
    return (
        <>
            <div className="tweet-actions">
                        <div className="tweet-action">
                            <img src={Comments} alt="" />
                            <p>19</p>
                        </div>
                        <div className="tweet-action">
                            <img src={FLeche} alt="" />
                            <p>48</p>
                        </div>
                        <div className="tweet-action">
                            <img src={Heart} alt="" />
                            <p>482</p>
                        </div>
                        <div className="tweet-action">
                            <img src={Share} alt="" />
                        </div>
                    </div>
        </>
    )
}