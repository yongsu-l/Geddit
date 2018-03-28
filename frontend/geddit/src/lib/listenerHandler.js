function listenerHandler(element, event, func, options) {
  return {
    addListener() {
      element.addEventListener(event, func, options);
    },
    rmvListener() {
      element.removeEventListener(event, func);
    }
  };
}

export default listenerHandler;