const API_GATEWAY_URL = "https://your-api-gateway-url.com";

const authService = {
  login: async (email, password) => {
    try {
      const response = await fetch(`${API_GATEWAY_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    } catch (error) {
      console.error("Login request failed", error);
      return { success: false, message: "Request failed" };
    }
  },

  register: async (email, password) => {
    try {
      const response = await fetch(`${API_GATEWAY_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    } catch (error) {
      console.error("Registration request failed", error);
      return { success: false, message: "Request failed" };
    }
  },
};

export default authService;
