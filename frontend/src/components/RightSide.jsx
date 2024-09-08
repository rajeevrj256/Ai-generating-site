import React, { useContext } from 'react'
import styles from './RightSide.module.css';
import { UserInput } from '../store/Input_data';

const RightSide = () => {
  const { fetchdata } = useContext(UserInput)

  return (
    <div className={styles.RightSide}>
      <textarea
        className={styles.TextArea}
        value={`${fetchdata}`}
        readOnly
      />
    </div>
  );
};

export default RightSide
