Taro + React 多商家类型项目模版系统 - 实施计划
项目概述
创建一个基于 Taro 3.x + React + TypeScript 的多商家类型项目模版系统，首个实现类型为国外代购微商商家。项目采用单项目多模版架构，通过配置文件切换不同商家类型，实现高度可扩展性。

目标目录: /Users/henrifox/Desktop/codeEx/mobileProjTaro（当前为空）

支持平台: 微信小程序、支付宝小程序、抖音小程序、H5 网页版

核心功能: 商品展示+购物车、朋友圈式动态、客户管理、代购计算器

技术栈
框架: Taro 3.x + React 18 + TypeScript
状态管理: Zustand + Immer
样式: Sass
工具库: dayjs, lodash-es, zod
图标: @tarojs/icons
实施步骤
第一阶段：项目初始化与基础配置
1. 创建 Taro 项目

cd /Users/henrifox/Desktop/codeEx/mobileProjTaro
npx @tarojs/cli init merchant-template
交互式选项:

项目名称: merchant-template
模板: React
TypeScript: 是
CSS 预处理器: Sass
包管理工具: npm
2. 安装核心依赖

cd merchant-template
npm install zustand immer dayjs lodash-es zod @tarojs/icons
npm install -D @types/lodash-es
3. 配置多平台支持
修改 config/index.ts:

添加微信、支付宝、抖音、H5 平台配置
配置环境变量支持（MERCHANT_TYPE）
配置代理和请求域名
创建平台配置文件:

project.config.json (微信小程序)
project.alipay.json (支付宝小程序)
project.tt.json (抖音小程序)
第二阶段：核心架构搭建
4. 创建目录结构

src/
├── config/                    # 配置中心
│   ├── index.ts              # 配置导出
│   ├── merchant-types.ts     # 商家类型定义
│   ├── templates/            # 商家模版配置
│   │   ├── index.ts
│   │   └── overseas-shopping.ts  # 国外代购配置
│   └── platform.ts           # 平台配置
│
├── types/                     # TypeScript 类型定义
│   ├── merchant.ts           # 商家相关类型
│   ├── product.ts            # 商品类型
│   ├── order.ts              # 订单类型
│   ├── customer.ts           # 客户类型
│   ├── moment.ts             # 动态类型
│   └── common.ts             # 通用类型
│
├── store/                     # Zustand 状态管理
│   ├── useAppStore.ts        # 应用全局状态
│   ├── useProductStore.ts    # 商品状态
│   ├── useCartStore.ts       # 购物车状态
│   ├── useOrderStore.ts      # 订单状态
│   ├── useCustomerStore.ts   # 客户状态
│   └── useMomentStore.ts     # 动态状态
│
├── services/                  # API 服务层
│   ├── request.ts            # 请求封装
│   ├── product.ts            # 商品 API
│   ├── order.ts              # 订单 API
│   ├── customer.ts           # 客户 API
│   └── moment.ts             # 动态 API
│
├── utils/                     # 工具函数
│   ├── platform.ts           # 平台判断
│   ├── storage.ts            # 存储封装
│   ├── currency.ts           # 货币/汇率工具
│   ├── calculator.ts         # 代购计算器
│   └── format.ts             # 格式化工具
│
├── hooks/                     # 自定义 Hooks
│   ├── useAuth.ts            # 认证 Hook
│   ├── usePlatform.ts        # 平台适配 Hook
│   └── useShare.ts           # 分享 Hook
│
├── components/                # 组件库
│   ├── Business/             # 业务组件
│   │   ├── ProductCard/      # 商品卡片
│   │   ├── CartItem/         # 购物车项
│   │   ├── OrderCard/        # 订单卡片
│   │   ├── CustomerCard/     # 客户卡片
│   │   ├── MomentCard/       # 动态卡片
│   │   └── Calculator/       # 计算器组件
│   └── Common/               # 通用 UI 组件
│       ├── Button/
│       ├── Input/
│       ├── Modal/
│       └── Loading/
│
└── pages/                     # 页面
    ├── index/                # 首页（商品列表）
    ├── product/              # 商品模块
    ├── cart/                 # 购物车
    ├── order/                # 订单模块
    ├── moment/               # 朋友圈动态
    ├── customer/             # 客户管理
    ├── calculator/           # 代购计算器
    └── profile/              # 个人中心
5. 实现类型系统
关键类型定义:

商家类型枚举 (types/merchant.ts):

MerchantType: 商家类型（国外代购、餐饮、美容等）
FeatureModule: 功能模块（商品、购物车、订单等）
MerchantConfig: 商家配置接口
商品类型 (types/product.ts):

Product: 商品基础信息
OverseasProductInfo: 代购商品专用字段（产地、汇率、运费等）
Category: 商品分类
订单类型 (types/order.ts):

Order: 订单信息
OrderItem: 订单项
OrderStatus: 订单状态枚举
客户类型 (types/customer.ts):

Customer: 客户信息
CustomerStats: 客户统计
CustomerGroup: 客户分组
动态类型 (types/moment.ts):

Moment: 朋友圈动态
MomentType: 动态类型（商品推广、晒单、评价等）
6. 实现配置系统
国外代购模版配置 (config/templates/overseas-shopping.ts):


{
  type: MerchantType.OVERSEAS_SHOPPING,
  enabledModules: [
    FeatureModule.PRODUCT,
    FeatureModule.CART,
    FeatureModule.ORDER,
    FeatureModule.MOMENT,
    FeatureModule.CUSTOMER,
    FeatureModule.CALCULATOR,
  ],
  theme: {
    primaryColor: '#FF6B6B',
    secondaryColor: '#4ECDC4',
    brandColor: '#FFE66D',
  },
  tabBar: {
    list: [
      { pagePath: 'pages/index/index', text: '商品' },
      { pagePath: 'pages/moment/list/index', text: '动态' },
      { pagePath: 'pages/calculator/index', text: '计算器' },
      { pagePath: 'pages/customer/list/index', text: '客户' },
      { pagePath: 'pages/profile/index', text: '我的' },
    ],
  },
  calculator: {
    defaultExchangeRate: 7.2,
    supportedCurrencies: ['USD', 'EUR', 'GBP', 'JPY', 'KRW'],
    shippingMethod: 'weight',
    defaultProfitRate: 0.15,
  },
}
配置管理器 (config/index.ts):

getCurrentMerchantConfig(): 获取当前商家配置
isModuleEnabled(): 检查功能模块是否启用
getThemeConfig(): 获取主题配置
支持通过环境变量 MERCHANT_TYPE 切换商家类型
第三阶段：状态管理实现
7. 实现 Zustand Store
核心 Store:

应用全局状态 (store/useAppStore.ts):

商家配置
用户信息
系统状态（加载、网络状态）
购物车状态 (store/useCartStore.ts):

购物车商品列表
添加/删除/更新商品
全选/取消全选
计算总价和总数量
商品状态 (store/useProductStore.ts):

商品列表
分类列表
搜索和筛选
商品详情
订单状态 (store/useOrderStore.ts):

订单列表
创建订单
订单状态更新
客户状态 (store/useCustomerStore.ts):

客户列表
客户分组
客户统计
动态状态 (store/useMomentStore.ts):

动态列表
发布动态
点赞和评论
第四阶段：核心功能实现
8. 商品展示模块
页面:

pages/index/index.tsx: 商品列表（首页）
pages/product/detail/index.tsx: 商品详情
pages/product/category/index.tsx: 分类页
pages/product/search/index.tsx: 搜索页
组件:

ProductCard: 商品卡片（支持代购信息展示）
ProductList: 商品列表
CategoryNav: 分类导航
功能:

商品列表展示（瀑布流/列表模式）
商品详情（图片轮播、规格选择、代购信息）
分类筛选
搜索功能
9. 购物车模块
页面:

pages/cart/index.tsx: 购物车
组件:

CartItem: 购物车商品项
功能:

商品列表展示
数量增减
全选/取消全选
删除商品
结算（跳转订单创建）
10. 订单模块
页面:

pages/order/list/index.tsx: 订单列表
pages/order/detail/index.tsx: 订单详情
pages/order/create/index.tsx: 创建订单
组件:

OrderCard: 订单卡片
功能:

订单列表（全部/待支付/待发货/已完成）
订单详情
创建订单（填写收货地址、备注）
订单状态更新
11. 朋友圈动态模块
页面:

pages/moment/list/index.tsx: 动态列表
pages/moment/detail/index.tsx: 动态详情
pages/moment/publish/index.tsx: 发布动态
组件:

MomentCard: 动态卡片
功能:

动态列表（瀑布流）
发布动态（文字+图片+关联商品）
点赞和评论
晒单功能
12. 客户管理模块
页面:

pages/customer/list/index.tsx: 客户列表
pages/customer/detail/index.tsx: 客户详情
pages/customer/group/index.tsx: 分组管理
组件:

CustomerCard: 客户卡片
功能:

客户列表
客户详情（订单记录、统计信息）
客户分组和标签
客户搜索
13. 代购计算器模块
页面:

pages/calculator/index.tsx: 计算器
组件:

CurrencyConverter: 汇率转换器
ShippingCalculator: 运费计算器
ProfitCalculator: 利润计算器
功能:

汇率实时转换（支持多种货币）
运费计算（按重量/体积）
利润计算（成本+运费+利润率）
计算结果保存和分享
14. 个人中心模块
页面:

pages/profile/index.tsx: 个人中心
pages/settings/index.tsx: 设置页
功能:

用户信息展示
订单统计
客户统计
设置（商家信息、通知、关于）
第五阶段：工具函数与服务层
15. 工具函数实现
关键工具:

平台判断 (utils/platform.ts):

isWeapp(): 是否微信小程序
isAlipay(): 是否支付宝小程序
isTT(): 是否抖音小程序
isH5(): 是否 H5
存储封装 (utils/storage.ts):

setStorage(): 设置存储
getStorage(): 获取存储
removeStorage(): 删除存储
货币工具 (utils/currency.ts):

convertCurrency(): 货币转换
formatCurrency(): 货币格式化
代购计算器 (utils/calculator.ts):

calculateShipping(): 计算运费
calculateProfit(): 计算利润
calculateFinalPrice(): 计算最终价格
格式化工具 (utils/format.ts):

formatDate(): 日期格式化
formatPhone(): 手机号格式化
formatNumber(): 数字格式化
16. API 服务层实现
请求封装 (services/request.ts):

基于 Taro.request 封装
统一错误处理
请求/响应拦截器
Token 管理
API 服务:

services/product.ts: 商品相关 API
services/order.ts: 订单相关 API
services/customer.ts: 客户相关 API
services/moment.ts: 动态相关 API
第六阶段：UI 组件库
17. 通用组件实现
基础组件:

Button: 按钮组件
Input: 输入框组件
Modal: 模态框组件
Toast: 提示组件
Loading: 加载组件
Empty: 空状态组件
ImageUploader: 图片上传组件
Tag: 标签组件
特点:

支持主题定制
响应式设计
多平台适配
第七阶段：多平台适配
18. 平台差异处理
适配策略:

条件编译: 使用 Taro 的条件编译处理平台差异
API 封装: 统一封装不同平台的 API
样式适配: 使用 CSS 变量和平台特定样式
关键适配点:

导航栏样式
TabBar 配置
分享功能
支付功能
授权流程
19. 配置文件
微信小程序 (project.config.json):


{
  "miniprogramRoot": "dist/",
  "projectname": "merchant-template",
  "appid": "your-appid",
  "setting": {
    "es6": false,
    "minified": false
  }
}
支付宝小程序 (project.alipay.json):


{
  "miniprogramRoot": "dist/",
  "component2": true
}
抖音小程序 (project.tt.json):


{
  "miniprogramRoot": "dist/",
  "projectname": "merchant-template"
}
第八阶段：开发调试与打包上线
20. 开发调试流程
开发命令:


# 微信小程序
npm run dev:weapp

# 支付宝小程序
npm run dev:alipay

# 抖音小程序
npm run dev:tt

# H5
npm run dev:h5
调试工具:

微信开发者工具
支付宝开发者工具
抖音开发者工具
Chrome DevTools (H5)
调试技巧:

使用 Taro DevTools
真机调试
网络代理（Charles/Fiddler）
21. 打包上线流程
构建命令:


# 微信小程序
npm run build:weapp

# 支付宝小程序
npm run build:alipay

# 抖音小程序
npm run build:tt

# H5
npm run build:h5
上线步骤:

微信小程序:

使用微信开发者工具上传代码
在微信公众平台提交审核
审核通过后发布
支付宝小程序:

使用支付宝开发者工具上传代码
在支付宝开放平台提交审核
审核通过后发布
抖音小程序:

使用抖音开发者工具上传代码
在抖音开放平台提交审核
审核通过后发布
H5:

部署到服务器（Nginx/CDN）
配置域名和 HTTPS
配置缓存策略
关键文件清单
配置文件
config/index.ts: Taro 构建配置
src/config/index.ts: 商家配置管理器
src/config/templates/overseas-shopping.ts: 国外代购配置
project.config.json: 微信小程序配置
project.alipay.json: 支付宝小程序配置
project.tt.json: 抖音小程序配置
类型定义
src/types/merchant.ts: 商家类型
src/types/product.ts: 商品类型
src/types/order.ts: 订单类型
src/types/customer.ts: 客户类型
src/types/moment.ts: 动态类型
状态管理
src/store/useAppStore.ts: 应用状态
src/store/useCartStore.ts: 购物车状态
src/store/useProductStore.ts: 商品状态
src/store/useOrderStore.ts: 订单状态
src/store/useCustomerStore.ts: 客户状态
src/store/useMomentStore.ts: 动态状态
核心页面
src/pages/index/index.tsx: 商品列表首页
src/pages/product/detail/index.tsx: 商品详情
src/pages/cart/index.tsx: 购物车
src/pages/order/create/index.tsx: 创建订单
src/pages/moment/list/index.tsx: 动态列表
src/pages/customer/list/index.tsx: 客户列表
src/pages/calculator/index.tsx: 代购计算器
src/pages/profile/index.tsx: 个人中心
核心组件
src/components/Business/ProductCard/index.tsx: 商品卡片
src/components/Business/CartItem/index.tsx: 购物车项
src/components/Business/OrderCard/index.tsx: 订单卡片
src/components/Business/CustomerCard/index.tsx: 客户卡片
src/components/Business/MomentCard/index.tsx: 动态卡片
src/components/Business/Calculator/: 计算器组件
工具函数
src/utils/platform.ts: 平台判断
src/utils/storage.ts: 存储封装
src/utils/currency.ts: 货币工具
src/utils/calculator.ts: 代购计算器
src/utils/format.ts: 格式化工具
服务层
src/services/request.ts: 请求封装
src/services/product.ts: 商品 API
src/services/order.ts: 订单 API
src/services/customer.ts: 客户 API
src/services/moment.ts: 动态 API
验证测试
功能测试
商品模块:

商品列表展示
商品详情查看
分类筛选
搜索功能
购物车模块:

添加商品到购物车
修改商品数量
删除商品
全选/取消全选
结算功能
订单模块:

创建订单
订单列表查看
订单详情查看
订单状态更新
动态模块:

发布动态
动态列表查看
点赞和评论
关联商品
客户管理:

客户列表查看
客户详情查看
客户分组
客户搜索
代购计算器:

汇率转换
运费计算
利润计算
多平台测试
微信小程序真机测试
支付宝小程序真机测试
抖音小程序真机测试
H5 浏览器测试
性能测试
页面加载速度
列表滚动性能
图片加载优化
内存占用
扩展性说明
添加新商家类型
在 src/types/merchant.ts 中添加新的商家类型枚举
在 src/config/templates/ 中创建新的配置文件
在 src/config/index.ts 中注册新模版
根据需要添加特定的页面和组件
通过环境变量 MERCHANT_TYPE 切换
添加新功能模块
在 FeatureModule 枚举中添加新模块
在商家配置中启用该模块
创建对应的页面、组件、Store
在 app.config.ts 中添加路由配置
项目优势
高度可配置: 通过配置文件控制功能模块和主题
类型安全: 完整的 TypeScript 类型定义
状态管理: Zustand 轻量级状态管理
多平台支持: 一套代码，多端运行
组件复用: 业务组件与商家类型解耦
易于扩展: 清晰的架构，便于添加新功能
开发体验: 完善的工具链和调试流程
预计产出
✅ 完整的 Taro + React 项目模版
✅ 国外代购微商商家完整功能
✅ 支持微信、支付宝、抖音、H5 四端
✅ 可配置的商家类型系统
✅ 完整的开发、调试、打包、上线流程
✅ 详细的代码注释和文档
