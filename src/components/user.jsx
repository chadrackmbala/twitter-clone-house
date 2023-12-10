import { useParams } from "react-router-dom";
import UsersService from "../utils/tweetsData";
import Tweet from "./tweet";

export default function User(props) {
    const { id } = useParams();
    const data = UsersService.getUsers();
    const user = data.find((user) => user.id === id);

    return (
        <>
            <img src={props.tweet.tweetAvatar} alt="" />
        </>
    );
};