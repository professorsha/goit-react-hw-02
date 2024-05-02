import css from './App.module.css';
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Notification from '../Notification/Notification';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedFeedback = localStorage.getItem('my-feedback');
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('my-feedback', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = feedbackType => {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };

  const handleReset = () => {
    setClicks({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

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
        {totalFeedback > 0 && <Options onCount={handleReset}>Reset</Options>}
      </div>
      {totalFeedback === 0 && <Notification></Notification>}
      {totalFeedback > 0 && (
        <Feedback
          good={clicks.good}
          neutral={clicks.neutral}
          bad={clicks.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </div>
  );
}
