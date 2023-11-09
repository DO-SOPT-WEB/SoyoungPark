import { useState } from 'react';
import { useEffect } from 'react';
import Result2 from './Result2';

const RandomPage = (props) => {
  const [time, setTime] = useState(3);
  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  return <>{time ? <h1>{time}</h1> : <Result2 category={props.category} />}</>;
};

export default RandomPage;
