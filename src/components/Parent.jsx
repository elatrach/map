import React, { useState } from 'react'
import MyMap from './MyMap';
import Counter from './Counter';

const Parent = () => {
    const [count,setCount]=useState(0)
    return (
        <>
        <MyMap updateClick={(val)=>setCount(val)} />
        <Counter nb={count} />
        </>
);
}
export default Parent;