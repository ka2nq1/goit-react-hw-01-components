import React from 'react';
import PropTypes from "prop-types";
import styles from './Profile.module.css';

function Profile(props) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={props.avatar} alt={props.name} className={styles.avatar}/>
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers<br /></span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views<br /></span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes<br /></span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
    props: PropTypes.object,
};

export default Profile;