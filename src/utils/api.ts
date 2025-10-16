// API 请求工具（可根据实际情况扩展）
// Using fetch API instead of axios for now
export const api = {
  async get(url: string) {
    const response = await fetch(url);
    return response.json();
  },
  async post(url: string, data: unknown) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
