import { useState } from 'react';
import { useEffect } from 'react';
import Result from './Result';

const RandomPage = (props) => {
  const [time, setTime] = useState(3);
  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  return <>{time ? <h1>{time}</h1> : <Result category={props.category} />}</>;
};

export default RandomPage;
