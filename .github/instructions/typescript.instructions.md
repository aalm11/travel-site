---
applyTo: "**/*.ts"
---

# TypeScript 编码规范

## 1. 基本原则

### 1.1 类型安全优先

- 始终显式声明类型，避免使用 `any`
- 使用严格模式 (`strict: true`)
- 充分利用 TypeScript 的类型推断能力
- 优先使用 `unknown` 而不是 `any`

### 1.2 代码可读性

- 代码应该自解释，减少不必要的注释
- 使用有意义的变量名和函数名
- 保持函数简洁，单一职责原则

---

## 2. 命名规范

### 2.1 文件命名

```typescript
// ✅ 推荐
user - profile.ts;
booking - form.component.ts;
destination.types.ts;
use - destinations.composable.ts;

// ❌ 避免
UserProfile.ts;
bookingForm.ts;
```

### 2.2 变量和函数命名

```typescript
// ✅ 使用 camelCase
const userName = "John";
const isLoading = false;
function getUserById(id: string) {}

// ❌ 避免
const user_name = "John";
const IsLoading = false;
```

### 2.3 类和接口命名

```typescript
// ✅ 使用 PascalCase
class UserProfile {}
interface Destination {}
type BookingStatus = "pending" | "confirmed" | "cancelled";

// ✅ 接口不使用 I 前缀
interface User {
  id: string;
  name: string;
}

// ❌ 避免
interface IUser {}
class userProfile {}
```

### 2.4 常量命名

```typescript
// ✅ 使用 UPPER_SNAKE_CASE 表示全局常量
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_COUNT = 3;

// ✅ 使用 camelCase 表示局部常量
const defaultPageSize = 10;
const emptyArray: string[] = [];
```

### 2.5 枚举命名

```typescript
// ✅ 枚举名使用 PascalCase，成员使用 PascalCase
enum BookingStatus {
  Pending = "pending",
  Confirmed = "confirmed",
  Cancelled = "cancelled",
}

// ✅ 或使用 const 断言代替枚举
const BookingStatus = {
  Pending: "pending",
  Confirmed: "confirmed",
  Cancelled: "cancelled",
} as const;

type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus];
```

---

## 3. 类型定义

### 3.1 接口 vs 类型别名

```typescript
// ✅ 使用 interface 定义对象结构
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ 使用 type 定义联合类型、交叉类型、映射类型
type ID = string | number;
type UserRole = "admin" | "user" | "guest";
type PartialUser = Partial<User>;

// ✅ 接口支持声明合并，适合扩展
interface User {
  createdAt: Date;
}

// ✅ 类型别名适合复杂类型操作
type ReadonlyUser = Readonly<User>;
type UserKeys = keyof User;
```

### 3.2 避免使用 any

```typescript
// ❌ 避免
function processData(data: any) {
  return data.value;
}

// ✅ 使用具体类型
function processData(data: { value: string }) {
  return data.value;
}

// ✅ 使用泛型
function processData<T>(data: T): T {
  return data;
}

// ✅ 使用 unknown 替代 any
function processData(data: unknown) {
  if (typeof data === "object" && data !== null && "value" in data) {
    return (data as { value: string }).value;
  }
}
```

### 3.3 使用类型守卫

```typescript
// ✅ 类型谓词
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// ✅ 自定义类型守卫
interface User {
  type: "user";
  name: string;
}

interface Admin {
  type: "admin";
  name: string;
  permissions: string[];
}

function isAdmin(user: User | Admin): user is Admin {
  return user.type === "admin";
}

// ✅ 使用 in 操作符
function hasPermissions(user: User | Admin) {
  if ("permissions" in user) {
    // TypeScript 知道这里 user 是 Admin
    return user.permissions.length > 0;
  }
  return false;
}
```

### 3.4 泛型使用

```typescript
// ✅ 简单泛型
function identity<T>(value: T): T {
  return value;
}

// ✅ 约束泛型
interface HasId {
  id: string;
}

function findById<T extends HasId>(items: T[], id: string): T | undefined {
  return items.find(item => item.id === id);
}

// ✅ 多个泛型参数
function mapObject<K extends string, V, R>(obj: Record<K, V>, fn: (value: V, key: K) => R): Record<K, R> {
  const result = {} as Record<K, R>;
  for (const key in obj) {
    result[key] = fn(obj[key], key);
  }
  return result;
}

// ✅ 默认泛型类型
function createArray<T = string>(length: number, value: T): T[] {
  return Array(length).fill(value);
}
```

### 3.5 实用类型工具

```typescript
// ✅ Partial - 所有属性可选
type PartialUser = Partial<User>;

// ✅ Required - 所有属性必填
type RequiredUser = Required<PartialUser>;

// ✅ Readonly - 所有属性只读
type ReadonlyUser = Readonly<User>;

// ✅ Pick - 选择部分属性
type UserPreview = Pick<User, "id" | "name">;

// ✅ Omit - 排除部分属性
type UserWithoutEmail = Omit<User, "email">;

// ✅ Record - 创建映射类型
type UserRoles = Record<string, "admin" | "user">;

// ✅ NonNullable - 排除 null 和 undefined
type NonNullableString = NonNullable<string | null | undefined>;

// ✅ ReturnType - 获取函数返回类型
function getUser() {
  return { id: "1", name: "John" };
}
type User = ReturnType<typeof getUser>;

// ✅ Parameters - 获取函数参数类型
type GetUserParams = Parameters<typeof getUserById>;
```

---

## 4. 函数定义

### 4.1 函数类型声明

```typescript
// ✅ 函数声明
function add(a: number, b: number): number {
  return a + b;
}

// ✅ 箭头函数
const subtract = (a: number, b: number): number => {
  return a - b;
};

// ✅ 可选参数
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}!`;
}

// ✅ 默认参数
function createUser(name: string, role: string = "user"): User {
  return { name, role };
}

// ✅ 剩余参数
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

// ✅ 函数重载
function format(value: string): string;
function format(value: number): string;
function format(value: Date): string;
function format(value: string | number | Date): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return value.toString();
  return value.toISOString();
}
```

### 4.2 异步函数

```typescript
// ✅ 明确声明返回类型
async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

// ✅ 错误处理
async function fetchUserSafe(id: string): Promise<User | null> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

// ✅ 使用类型守卫处理错误
function isError(error: unknown): error is Error {
  return error instanceof Error;
}

async function handleRequest() {
  try {
    // ...
  } catch (error) {
    if (isError(error)) {
      console.error(error.message);
    }
  }
}
```

---

## 5. 类和面向对象

### 5.1 类定义

```typescript
// ✅ 完整的类定义
class User {
  // 属性声明
  private id: string;
  public name: string;
  protected email: string;
  readonly createdAt: Date;

  // 构造函数
  constructor(id: string, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
  }

  // 方法
  public getProfile(): UserProfile {
    return {
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
    };
  }

  // 静态方法
  static createGuest(): User {
    return new User("guest", "Guest User", "guest@example.com");
  }
}

// ✅ 使用参数属性简化
class User {
  readonly createdAt = new Date();

  constructor(private id: string, public name: string, protected email: string) {}
}
```

### 5.2 抽象类和接口

```typescript
// ✅ 抽象类
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string;

  move(): void {
    console.log(`${this.name} is moving`);
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof!";
  }
}

// ✅ 实现接口
interface Flyable {
  fly(): void;
  altitude: number;
}

class Bird implements Flyable {
  altitude = 0;

  fly(): void {
    this.altitude += 10;
    console.log(`Flying at ${this.altitude}m`);
  }
}
```

---

## 6. Vue 3 特定规范

### 6.1 组合式 API 类型

```typescript
// ✅ defineProps 类型定义
import { defineProps } from "vue";

interface Props {
  title: string;
  count?: number;
  items: string[];
}

const props = defineProps<Props>();

// ✅ 带默认值
const props = withDefaults(defineProps<Props>(), {
  count: 0,
  items: () => [],
});

// ✅ defineEmits 类型定义
interface Emits {
  (e: "update", value: string): void;
  (e: "delete", id: number): void;
}

const emit = defineEmits<Emits>();

// ✅ ref 类型
import { ref, Ref } from "vue";

const count = ref<number>(0);
const user = ref<User | null>(null);

// ✅ reactive 类型
import { reactive } from "vue";

interface State {
  loading: boolean;
  error: string | null;
  data: User[];
}

const state = reactive<State>({
  loading: false,
  error: null,
  data: [],
});

// ✅ computed 类型
import { computed, ComputedRef } from "vue";

const fullName = computed<string>(() => {
  return `${user.value?.firstName} ${user.value?.lastName}`;
});
```

### 6.2 组合函数类型

```typescript
// ✅ 组合函数返回类型
import { ref, Ref } from "vue";

interface UseCounterReturn {
  count: Ref<number>;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export function useCounter(initialValue = 0): UseCounterReturn {
  const count = ref(initialValue);

  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => (count.value = initialValue);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

// ✅ 泛型组合函数
export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  const fetchData = async () => {
    loading.value = true;
    try {
      const response = await fetch(url);
      data.value = await response.json();
    } catch (e) {
      error.value = e as Error;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    fetchData,
  };
}
```

---

## 7. 数组和对象操作

### 7.1 数组类型

```typescript
// ✅ 数组类型声明
const numbers: number[] = [1, 2, 3];
const users: Array<User> = [];

// ✅ 只读数组
const readonlyNumbers: readonly number[] = [1, 2, 3];
const readonlyUsers: ReadonlyArray<User> = [];

// ✅ 元组
const tuple: [string, number] = ["age", 25];
const coordinate: [x: number, y: number, z?: number] = [10, 20];

// ✅ 数组方法类型推断
const names = users.map(user => user.name); // string[]
const adults = users.filter(user => user.age >= 18); // User[]
const firstUser = users.find(user => user.id === "1"); // User | undefined
```

### 7.2 对象类型

```typescript
// ✅ 对象类型声明
const user: { name: string; age: number } = {
  name: "John",
  age: 30,
};

// ✅ 索引签名
interface StringMap {
  [key: string]: string;
}

const config: StringMap = {
  apiUrl: "https://api.example.com",
  version: "1.0.0",
};

// ✅ Record 类型
const userRoles: Record<string, UserRole> = {
  john: "admin",
  jane: "user",
};

// ✅ 可选属性
interface Config {
  apiUrl: string;
  timeout?: number;
  retries?: number;
}
```

---

## 8. 模块和导入

### 8.1 导入导出

```typescript
// ✅ 命名导出
export interface User {
  id: string;
  name: string;
}

export function createUser(name: string): User {
  return { id: generateId(), name };
}

// ✅ 默认导出
export default class UserService {
  getUser(id: string): Promise<User> {
    // ...
  }
}

// ✅ 类型导出
export type { User, UserRole };
export type { User as IUser };

// ✅ 导入
import { User, createUser } from "./user";
import type { User } from "./types";
import UserService from "./user-service";
```

### 8.2 命名空间 (避免使用)

```typescript
// ❌ 避免使用命名空间
namespace Utils {
  export function format(value: string): string {
    return value.trim();
  }
}

// ✅ 使用 ES 模块
// utils.ts
export function format(value: string): string {
  return value.trim();
}

// main.ts
import { format } from "./utils";
```

---

## 9. 错误处理

### 9.1 自定义错误类

```typescript
// ✅ 自定义错误类
class ApiError extends Error {
  constructor(message: string, public statusCode: number, public details?: unknown) {
    super(message);
    this.name = "ApiError";
  }
}

class ValidationError extends Error {
  constructor(message: string, public field: string) {
    super(message);
    this.name = "ValidationError";
  }
}

// ✅ 使用
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    if (!response.ok) {
      throw new ApiError("Failed to fetch", response.status);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`API Error ${error.statusCode}:`, error.message);
    } else if (error instanceof ValidationError) {
      console.error(`Validation Error in ${error.field}:`, error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}
```

### 9.2 结果类型模式

```typescript
// ✅ Result 类型
type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E };

async function fetchUserSafe(id: string): Promise<Result<User>> {
  try {
    const user = await fetchUser(id);
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: error as Error };
  }
}

// ✅ 使用
const result = await fetchUserSafe("123");
if (result.success) {
  console.log(result.data.name);
} else {
  console.error(result.error.message);
}
```

---

## 10. 最佳实践

### 10.1 使用 const 断言

```typescript
// ✅ const 断言保持字面量类型
const colors = ["red", "green", "blue"] as const;
type Color = (typeof colors)[number]; // 'red' | 'green' | 'blue'

const config = {
  apiUrl: "https://api.example.com",
  timeout: 3000,
} as const;
```

### 10.2 类型收窄

```typescript
// ✅ typeof 类型守卫
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// ✅ instanceof 类型守卫
function handle(error: Error | string) {
  if (error instanceof Error) {
    console.error(error.stack);
  } else {
    console.error(error);
  }
}

// ✅ 判别联合类型
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  size: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
  }
}
```

### 10.3 避免类型断言

```typescript
// ❌ 避免不必要的类型断言
const user = JSON.parse(jsonString) as User;

// ✅ 使用类型守卫验证
function isUser(obj: unknown): obj is User {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "name" in obj &&
    typeof (obj as User).id === "string" &&
    typeof (obj as User).name === "string"
  );
}

const parsed = JSON.parse(jsonString);
if (isUser(parsed)) {
  // 现在 parsed 是 User 类型
  console.log(parsed.name);
}
```

### 10.4 使用映射类型

```typescript
// ✅ 映射类型创建变体
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

interface User {
  name: string;
  age: number;
}

type UserGetters = Getters<User>;
// {
//   getName: () => string
//   getAge: () => number
// }
```

### 10.5 条件类型

```typescript
// ✅ 条件类型
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// ✅ 提取类型
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type Result = UnwrapPromise<Promise<string>>; // string

// ✅ 排除类型
type NonNullable<T> = T extends null | undefined ? never : T;

type NotNull = NonNullable<string | null>; // string
```

---

## 11. 性能考虑

### 11.1 避免过度类型计算

```typescript
// ❌ 避免复杂的嵌套条件类型
type Complex<T> = T extends A ? (T extends B ? (T extends C ? D : E) : F) : G;

// ✅ 简化或拆分类型
type Step1<T> = T extends A ? T : never;
type Step2<T> = Step1<T> extends B ? T : never;
```

### 11.2 使用类型别名

```typescript
// ✅ 复用类型定义
type ID = string | number;
type Timestamp = number;
type ApiResponse<T> = {
  data: T;
  timestamp: Timestamp;
  id: ID;
};
```

---

## 12. 代码风格

### 12.1 缩进和格式

- 使用 2 空格缩进
- 使用分号结尾
- 使用单引号
- 配置 Prettier 自动格式化

### 12.2 注释规范

```typescript
// ✅ 使用 JSDoc 注释
/**
 * 根据 ID 获取用户信息
 * @param id - 用户 ID
 * @returns 用户对象，如果不存在则返回 null
 * @throws {ApiError} 当 API 请求失败时
 */
async function getUserById(id: string): Promise<User | null> {
  // 实现...
}

// ✅ TODO 注释
// TODO: 添加缓存机制
// FIXME: 修复边界情况处理
// NOTE: 这里需要特殊处理
```

### 12.3 文件组织

```typescript
// ✅ 推荐的文件结构顺序
// 1. 导入语句
import { ref, computed } from "vue";
import type { User } from "@/types";

// 2. 类型定义
interface Props {
  user: User;
}

// 3. 常量
const DEFAULT_PAGE_SIZE = 10;

// 4. 组合函数/工具函数
function formatName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

// 5. 主要逻辑
export default function useUserProfile() {
  // ...
}
```

---

## 13. 配置建议

### 13.1 tsconfig.json 推荐配置

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "moduleResolution": "bundler",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  }
}
```

---

## 14. 常见陷阱

### 14.1 避免的模式

```typescript
// ❌ 空接口
interface Empty {}

// ❌ 使用 Object 类型
function process(obj: Object) {}

// ❌ 使用 Function 类型
const callback: Function = () => {};

// ❌ 不必要的类型断言
const user = {} as User;

// ✅ 正确的方式
function process(obj: Record<string, unknown>) {}
const callback: () => void = () => {};
const user: User = {
  id: "1",
  name: "John",
  email: "john@example.com",
};
```

---

**文档版本**: 1.0  
**最后更新**: 2025 年 10 月 16 日
