// API 请求工具（可根据实际情况扩展）
import axios from "axios";
export const api = axios.create({
  baseURL: "/api",
});
