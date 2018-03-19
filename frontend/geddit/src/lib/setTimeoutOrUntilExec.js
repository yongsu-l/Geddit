function setTimeoutOrUntilExec(func, timeout) {
  var state = false;
  const check = () => {
    if (state) func();
    else state = true;
  }
  
  setTimeout(check, timeout);
  return check;
}

export default setTimeoutOrUntilExec;