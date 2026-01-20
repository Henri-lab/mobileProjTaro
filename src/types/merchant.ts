/**
 * 商家类型枚举
 */
export enum MerchantType {
  OVERSEAS_SHOPPING = 'overseas_shopping',  // 国外代购
  RESTAURANT = 'restaurant',                // 餐饮
  BEAUTY = 'beauty',                        // 美容
  EDUCATION = 'education',                  // 教育
}

/**
 * 功能模块枚举
 */
export enum FeatureModule {
  PRODUCT = 'product',           // 商品展示
  CART = 'cart',                 // 购物车
  ORDER = 'order',               // 订单管理
  MOMENT = 'moment',             // 朋友圈动态
  CUSTOMER = 'customer',         // 客户管理
  CALCULATOR = 'calculator',     // 计算器
  RESERVATION = 'reservation',   // 预约（餐饮/美容）
  COURSE = 'course',             // 课程（教育）
}

/**
 * TabBar 配置
 */
export interface TabBarConfig {
  list: Array<{
    pagePath: string
    text: string
    iconPath: string
    selectedIconPath: string
  }>
  color: string
  selectedColor: string
  backgroundColor: string
}

/**
 * 商品模块配置
 */
export interface ProductModuleConfig {
  // 是否显示分类
  showCategory: boolean
  // 是否显示库存
  showStock: boolean
  // 是否支持规格
  supportSpecs: boolean
  // 自定义字段
  customFields?: Array<{
    key: string
    label: string
    type: 'text' | 'number' | 'select'
    required: boolean
  }>
}

/**
 * 计算器配置（代购专用）
 */
export interface CalculatorConfig {
  // 默认汇率
  defaultExchangeRate: number
  // 支持的货币
  supportedCurrencies: string[]
  // 运费计算方式
  shippingMethod: 'weight' | 'volume' | 'fixed'
  // 默认利润率
  defaultProfitRate: number
}

/**
 * 预约配置
 */
export interface ReservationConfig {
  // 预约时间间隔（分钟）
  timeSlotInterval: number
  // 提前预约天数
  advanceBookingDays: number
  // 营业时间
  businessHours: {
    start: string
    end: string
  }
}

/**
 * 商家配置接口
 */
export interface MerchantConfig {
  type: MerchantType
  name: string
  description: string

  // 启用的功能模块
  enabledModules: FeatureModule[]

  // 主题配置
  theme: {
    primaryColor: string
    secondaryColor: string
    brandColor: string
  }

  // 导航配置
  tabBar: TabBarConfig

  // 商品配置
  product?: ProductModuleConfig

  // 计算器配置（代购专用）
  calculator?: CalculatorConfig

  // 预约配置（餐饮/美容专用）
  reservation?: ReservationConfig
}
