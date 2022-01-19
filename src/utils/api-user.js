export default async () => {
    await new Promise(res => setTimeout(res, 200));
  
    if (document.cookie.includes("videoAuthToken")) {
      return {
        name: "Shu",
        email: "test@test.com",
        avatar: "https://github.com/shuding.png"
      };
    }
  
    const error = new Error("Not authorized!");
    error.status = 403;
    throw error;
};
  