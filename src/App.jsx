import { useState, useEffect } from 'react';
import './App.scss';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  const [day, setTimerDays] = useState();
  const [hour, setTimerHours] = useState();
  const [minute, setTimerMinutes] = useState();
  const [second, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date(2021, 9, 1).getTime();
    console.log(countDownDate);

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <div className="App">
      <h1>We're launching soon </h1>
      <Counter hour={hour} day={day} minute={minute} second={second} />
      <Footer />
    </div>
  );
}

export default App;
