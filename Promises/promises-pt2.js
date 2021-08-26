function setup() {
  noCanvas();
  delay(1000)
    .then(() => createP("hello"))
    .catch((err) => console.error(err));
}

function delay(time) {
  return new Promise((resolve, reject) => {
    // if time of delay is not a number, reject promise, pass an error
    if (isNaN(time)) {
      // passes an error into the console
      reject(new Error("delay requires a number"));
    } else {
      // else resolve promise and execute setTimeout function
      setTimeout(resolve, time);
    }
  });
}
