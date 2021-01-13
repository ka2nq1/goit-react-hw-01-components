import React from 'react'
import PropTypes from "prop-types";
import FriendListItem from './FriendListItem';
import styles from './Friend.module.css';

function FriendList({friends}) {
    return (
        <ul className={styles.friendList}>
            {
                friends.map((friend) => (<FriendListItem key={friend.id} {...friend} />))
            }
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;
