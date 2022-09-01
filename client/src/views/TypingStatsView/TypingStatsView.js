import style from "./TypingStatsView.module.css";

const TypingStats = ({ typingStats }) => {
  if (!typingStats) {
    return <div>You must first complete the test!</div>;
  }
  return (
    <div className={style.statsContainer}>
      <div>Avg time of typing character:</div>
      {Object.entries(typingStats.avgTypingTimes)
        .sort()
        .map((entry) => {
          const char = entry[0];
          const time = entry[1];
          return (
            <div key={char}>
              <span>{`${char}:`.padEnd(7, "\xa0")}</span>
              <span>{`${time} ms`} </span>
            </div>
          );
        })}
    </div>
  );
};

export default TypingStats;
