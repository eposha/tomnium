const useSetPrevURL = () => {
  const pushWithPrevURL = () => {
    //@ts-ignore
    window.history.pushState({prevUrl: window.location.href}, null);
  };

  return {pushWithPrevURL};
};

export default useSetPrevURL;
