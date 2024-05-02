import css from './App.module.css';
import { useState } from 'react';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = feedbackType => {
    // console.log(feedbackType);
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
    // console.log(clicks);
    // Тут використовуй сеттер, щоб оновити стан
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  // console.log(totalFeedback);
  // const [isVisible, setIsVisible] = useState(false);

  // const handleToggle = () => {
  //   setIsVisible(!isVisible);
  // };
  // const handleClickGood = () => {
  //   setClicks({...clicks,
  //     good:clicks.good + 1,});
  // };
  // const handleClickNeutral = () => {
  //   setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  // };
  // const handleClickBad = () => {
  //   setClicks({ ...clicks, bad: clicks.bad + 1 });
  // };
  const handleReset = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div className={css.container}>
      <Description />
      <div className={css.containerButton}>
        <Options value={clicks.good} onCount={() => updateFeedback('good')}>
          Good
        </Options>
        <Options
          value={clicks.neutral}
          onCount={() => updateFeedback('neutral')}
        >
          Neutral
        </Options>
        <Options value={clicks.bad} onCount={() => updateFeedback('bad')}>
          Bad
        </Options>
        <Options onCount={handleReset}>Reset</Options>
      </div>
      {(totalFeedback===0)&&(<Notification></Notification>)}
      {(totalFeedback>0)&& (<Feedback good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} total={totalFeedback}/>)}
      
      
    </div>
  );
}
