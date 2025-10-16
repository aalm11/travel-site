// 格式化工具函数
export function formatPrice(price: number): string {
  return `￥${price.toFixed(2)}`;
}
