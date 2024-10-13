// CountdownComponent.js
import { useEffect, useState } from "react";
import { startCountDown } from "../utils/countdownTimer"; // Adjust the path based on your project structure

const CountdownComponent = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const countDownDate = new Date("Nov 5, 2024 15:37:25").getTime();

    // Start the countdown and update the state
    startCountDown(countDownDate, setTimeLeft);
  }, []);

  return (
    <div>
      {timeLeft.expired ? (
        <h1>EXPIRED</h1>
      ) : (
        <h1>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </h1>
      )}
    </div>
  );
};

export default CountdownComponent;
