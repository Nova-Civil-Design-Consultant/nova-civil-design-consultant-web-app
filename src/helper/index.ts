const checkSession = () => {
  const session = localStorage.getItem("userSession");
  if (session) {
    const { loginTime } = JSON.parse(session);
    const currentTime = Date.now();
    const fiveHours = 5 * 60 * 60 * 1000; // 5 hours in milliseconds

    if (currentTime - loginTime < fiveHours) {
      return JSON.parse(session);
    } else {
      localStorage.removeItem("userSession"); // Remove expired session
    }
  }
  return null;
};

export default checkSession;
