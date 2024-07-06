import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return +((good / total) * 100).toFixed();
  };

  const options = ['good', 'neutral', 'bad'];
  const { good, neutral, bad } = state;

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
