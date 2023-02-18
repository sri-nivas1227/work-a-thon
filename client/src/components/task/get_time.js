const getTime = (startTime) => {
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

export default getTime;
