const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise handled!");
  });
