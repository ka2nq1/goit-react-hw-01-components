import React from 'react'
import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css';

function TransactionHistory({items}) {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.head}>
                <tr className={styles.headList}>
                    <th className={styles.headListItem}>Type</th>
                    <th className={styles.headListItem}>Amount</th>
                    <th className={styles.headListItem}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.tbody}>
                {items.map((item) => (
                    <tr className={styles.bodyList} key={item.id}>
                        <th className={styles.bodyListItem}>{item.type}</th>
                        <th className={styles.bodyListItem}>{item.amount}</th>
                        <th className={styles.bodyListItem}>{item.currency}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};

export default TransactionHistory;