import { useState } from 'react';
import { useEffect } from 'react';
import Result from './Result';
import Recommend from './Recommend';

const RandomPage = (props) => {
  const [time, setTime] = useState(3);
  const [step, setStep] = useState();

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  }, [time]);
  return (
    <>
      {time ? (
        <h1>{time}</h1>
      ) : step === 0 ? (
        <Recommend category={props.category} />
      ) : (
        <Result category={props.category} setStep={setStep} />
      )}
    </>
  );
};

export default RandomPage;
