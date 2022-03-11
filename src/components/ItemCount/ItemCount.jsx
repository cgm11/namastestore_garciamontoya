import React, {useState, useEffect} from "react";

import styles from './styles.module.css'

const ItemCount = (props) => {
  const { stock, initial = 1 } = props;
  const [count, setCount] = useState(initial)
  const [addDisabled, setAddDisabled] = useState(false)
  const [subtractDisabled, setSubtractDisabled] = useState(false)

  const addUnit = () => {
      if(count < stock) {
        setCount(count + 1)
      } else {
        setCount(stock)        
      }
  }

  const subtractUnit = () => {
    if(count > 1) setCount(count - 1)
  }

  useEffect(() => {
    count < stock ? setAddDisabled(false) : setAddDisabled(true)
    count > 1 ? setSubtractDisabled(false) : setSubtractDisabled(true)
  }, [count, stock])

  return (
    <div className={styles.itemCountContainer}>
      <button className={styles.countButton} onClick={subtractUnit} disabled={subtractDisabled}>-</button>
      <div className={styles.countInput}>{count}</div>
      <button className={styles.countButton} onClick={addUnit} disabled={addDisabled}>+</button>
    </div>
  );
};

export default ItemCount;