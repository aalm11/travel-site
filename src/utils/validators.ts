// 表单验证工具函数
export function isEmail(email: string): boolean {
  return /\S+@\S+\.\S+/.test(email);
}
