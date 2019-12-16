const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // ..
  setTimeout(() => {
    resolve(1);
  }, 2000);

  // reject(new Error('message'))
});

p.then(result => console.log('Result', result));
