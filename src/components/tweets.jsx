import React from 'react';
import Tweet from './tweet';
// import tweetsData from '../utils/tweetsData';
import UsersService from '../utils/tweetsData';
import User from './user';

export default function Tweets() {
    const tweetsData = UsersService.getUsers();
    return (
        <>
            <div>
                {tweetsData.map((tweeObject, index) => {
                    return (
                        <>
                            <Tweet tweet={tweeObject} key={index} />
                            <User tweet={tweeObject} key={index} />
                        </>
                    )
                })}
            </div>
        </>
    );
};