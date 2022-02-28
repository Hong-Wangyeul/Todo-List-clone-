import React, { useCallback, useEffect, useState, useRef } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, []); //state나 props가 변경될 때마다 불러옴. 하지만 두번째 인자에 []을 넣어주면 처음에만 불러옴. []에 count를 넣어준다면 count가 변경될 때만 불러온다. 즉, 원하는 데이터가 바뀔 때만 변경을 원하면 두번째 인자에 배열에 넣어주면 된다.

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
