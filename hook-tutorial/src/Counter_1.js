import React, {useState} from 'react';  

// class Counter extend React -> 클래스로 쓰는 방법
// 함수형 방법 
const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div> 
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>
            <button onClick={() => setValue(value+1)}>+1</button>
            <button onClick={() => setValue(value-1)}>-1</button>
        </div>
    );
};

export default Counter;