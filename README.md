# 多商家类型小程序模版系统

基于 Taro 3.x + React + TypeScript 的多商家类型项目模版系统，首个实现类型为**国外代购微商商家**。

## 项目特点

- ✅ **多平台支持**: 微信小程序、支付宝小程序、抖音小程序、H5 网页版
- ✅ **类型安全**: 完整的 TypeScript 类型定义
- ✅ **配置驱动**: 通过配置文件控制功能模块和主题
- ✅ **高度可扩展**: 清晰的架构，便于添加新商家类型

## 技术栈

- **框架**: Taro 4.x + React 18 + TypeScript
- **状态管理**: Zustand + Immer
- **样式**: Sass
- **工具库**: dayjs, lodash-es, zod

## 项目结构

```
merchant-template/
├── src/
│   ├── app.tsx                    # 应用入口
│   ├── app.config.ts              # 应用配置
│   ├── app.scss                   # 全局样式
│   │
│   ├── config/                    # 配置中心
│   │   ├── index.ts              # 配置管理器
│   │   └── templates/            # 商家模版配置
│   │       └── overseas-shopping.ts  # 国外代购配置
│   │
│   ├── types/                     # TypeScript 类型定义
│   │   ├── merchant.ts           # 商家类型
│   │   ├── product.ts            # 商品类型
│   │   ├── order.ts              # 订单类型
│   │   ├── customer.ts           # 客户类型
│   │   ├── moment.ts             # 动态类型
│   │   └── common.ts             # 通用类型
│   │
│   └── pages/                     # 页面
│       ├── index/                # 首页（商品列表）
│       ├── cart/                 # 购物车
│       ├── moment/list/          # 朋友圈动态
│       ├── calculator/           # 代购计算器
│       ├── customer/list/        # 客户管理
│       └── profile/              # 个人中心
│
├── config/                        # Taro 构建配置
│   ├── index.ts                  # 基础配置
│   ├── dev.ts                    # 开发环境
│   └── prod.ts                   # 生产环境
│
├── project.config.json           # 微信小程序配置
├── project.alipay.json           # 支付宝小程序配置
├── project.tt.json               # 抖音小程序配置
├── package.json
└── tsconfig.json
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发调试

```bash
# 微信小程序
cd /Users/henrifox/Desktop/codeEx/mobileProjTaro
npm run dev:weapp

# 支付宝小程序
npm run dev:alipay

# 抖音小程序
npm run dev:tt

# H5
npm run dev:h5
```

**注意**: 请确保在项目根目录 `/Users/henrifox/Desktop/codeEx/mobileProjTaro` 下运行命令。

### 生产构建

```bash
# 微信小程序
npm run build:weapp

# 支付宝小程序
npm run build:alipay

# 抖音小程序
npm run build:tt

# H5
npm run build:h5
```

## 核心功能

### 国外代购微商模版

- 🛍️ **商品管理**: 商品列表、详情、分类、搜索
- 🛒 **购物车**: 添加商品、数量管理、结算
- 📦 **订单管理**: 创建订单、订单列表、订单详情
- 📱 **朋友圈动态**: 发布商品推广、晒单、评价
- 👥 **客户管理**: 客户列表、分组、标签、订单记录
- 🧮 **代购计算器**: 汇率转换、运费计算、利润计算

## 配置系统

### 切换商家类型

通过环境变量 `MERCHANT_TYPE` 切换不同商家类型：

```bash
# 国外代购（默认）
MERCHANT_TYPE=overseas_shopping npm run dev:weapp

# 未来可添加其他类型
# MERCHANT_TYPE=restaurant npm run dev:weapp
# MERCHANT_TYPE=beauty npm run dev:weapp
```

### 商家配置

在 `src/config/templates/` 目录下创建新的商家类型配置文件，参考 `overseas-shopping.ts`。

配置项包括：
- 启用的功能模块
- 主题颜色
- TabBar 配置
- 商品模块配置
- 特定功能配置（如计算器、预约等）

## 扩展性

### 添加新商家类型

1. 在 `src/types/merchant.ts` 中添加新的商家类型枚举
2. 在 `src/config/templates/` 中创建新的配置文件
3. 在 `src/config/index.ts` 中注册新模版
4. 根据需要添加特定的页面和组件

### 添加新功能模块

1. 在 `FeatureModule` 枚举中添加新模块
2. 在商家配置中启用该模块
3. 创建对应的页面、组件、Store
4. 在 `app.config.ts` 中添加路由配置

## 开发规范

- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 组件采用函数式组件 + Hooks
- 样式使用 Sass，支持 CSS 变量
- 路径别名 `@/` 指向 `src/` 目录

## 调试工具

- **微信开发者工具**: 用于微信小程序调试
- **支付宝开发者工具**: 用于支付宝小程序调试
- **抖音开发者工具**: 用于抖音小程序调试
- **Chrome DevTools**: 用于 H5 调试

## 常见问题

### 1. 编译失败

确保在项目根目录下运行命令：
```bash
cd /Users/henrifox/Desktop/codeEx/mobileProjTaro
npm run dev:weapp
```

### 2. 依赖安装失败

清除缓存后重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3. 类型错误

确保 TypeScript 版本正确：
```bash
npm install typescript@5.3.3 --save-dev
```

## 项目状态

当前版本为初始模版，已完成：

- ✅ 项目初始化和配置
- ✅ 类型系统定义
- ✅ 配置系统实现
- ✅ 基础页面创建
- ✅ 多平台配置

待完成功能：

- ⏳ 状态管理实现
- ⏳ API 服务层
- ⏳ UI 组件库
- ⏳ 业务组件
- ⏳ 完整页面功能

## 许可证

MIT

## 联系方式

如有问题或建议，欢迎提 Issue。
