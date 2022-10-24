async function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

/*
 * You need to call async wait() and wait to get 10 and return it
 * You can't use "await"!
 */
module.exports = function f() {
  return Promise.all([wait()]).then(() => {
    return 10;
  });
};
