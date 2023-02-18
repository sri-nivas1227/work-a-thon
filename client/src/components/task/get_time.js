export const getTime = (startTime) => {
  const currentTime = new Date();
  const elapsedTime = currentTime - startTime;
  const hours = Math.floor(elapsedTime / 3600000); // calculate hours
  const minutes = Math.floor((elapsedTime / 60000) % 60); // calculate minutes
  const seconds = Math.floor((elapsedTime / 1000) % 60); // calculate seconds
  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ];
};

export const notify = (time) => {
  if (parseInt(time[0]) === 0 && parseInt(time[1]) === 0) {
    return;
  }
  // console.log("I've been summonned");
  let check_time = parseInt(time[1], 10) % 2;
  // console.log(`${check_time}, ${parseInt(time[2], 10)}`);
  if (check_time === 0 && parseInt(time[2], 10) === 0) {
    console.log("take a break");
  }
};
