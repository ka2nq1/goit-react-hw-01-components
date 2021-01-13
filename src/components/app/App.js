import React from 'react';
import Profile from '../profile/Profile';
import user from '../profile/user.json';
import Statistics from '../statistics/Statistics';
import statisticalData from '../statistics/statistical-data.json';
import FriendList from '../friendList/FriendList';
import friends from '../friendList/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';
import styles from './App.module.css';




function App() {
    return (
        <div className={styles.container}>
            <Profile {...user}/>
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions}/>
        </div>
    )
};

export default App