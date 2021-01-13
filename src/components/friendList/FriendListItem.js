import React from 'react'
import PropTypes from "prop-types";
import styles from './Friend.module.css';

function FriendListItem({avatar, name, isOnline, id}) {
    const status = isOnline ? styles.online : styles.offline;
    return (
        <li key={id} className={styles.friendListItem}>
            <span className={status}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};

export default FriendListItem;