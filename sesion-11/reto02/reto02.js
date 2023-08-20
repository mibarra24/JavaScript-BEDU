async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 'Hello World';
  }
  
  function log() {
    wait().then(result => console.log(result));
  }
  
  log()