function promiseAll(promises) {
    return new Promise((resolve, reject) => {
      let results = [];
      let pending = promises.length;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(result => {
          results[i] = result;
          pending--;
          if (pending === 0) resolve(results);
        }).catch(reject);
      }
      if (promises.length === 0) resolve(results);
    })
  }

  function soon(value) {
    return new Promise(resolve => {
      setTimeout(() => resolve(value), 1000)
    })
  }
  
  // Test cases
  promiseAll([])
    .then(results => {
      console.log('Expected result []: ', results)
    })
  
  promiseAll([soon(1), soon(2), soon(3)])
    .then(results => {
      console.log('Expected result [1, 2, 3]: ', results)
    })
  
  promiseAll([soon(1), Promise.reject('X'), soon(3)])
    .then(results => {
      console.log('We should not get here')
    })
    .catch(error => {
      console.log('Expected error X: ', error)
    })