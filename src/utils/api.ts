// API 请求工具（可根据实际情况扩展）
// Note: axios is not installed, using fetch API instead
export const api = {
  get: async (url: string) => {
    const response = await fetch(`/api${url}`);
    return response.json();
  },
  post: async (url: string, data: unknown) => {
    const response = await fetch(`/api${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
