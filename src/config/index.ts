import { MerchantType, MerchantConfig, FeatureModule } from '@/types/merchant'
import { overseasShoppingConfig } from './templates'

/**
 * 商家模版配置映射
 */
const merchantTemplates: Record<MerchantType, MerchantConfig> = {
  [MerchantType.OVERSEAS_SHOPPING]: overseasShoppingConfig,
  // 未来添加其他模版
  [MerchantType.RESTAURANT]: {} as MerchantConfig,
  [MerchantType.BEAUTY]: {} as MerchantConfig,
  [MerchantType.EDUCATION]: {} as MerchantConfig,
}

/**
 * 当前商家类型（可通过环境变量或配置文件切换）
 * 默认为国外代购类型
 */
const CURRENT_MERCHANT_TYPE = (process.env.MERCHANT_TYPE as MerchantType) || MerchantType.OVERSEAS_SHOPPING

/**
 * 获取当前商家配置
 */
export function getCurrentMerchantConfig(): MerchantConfig {
  return merchantTemplates[CURRENT_MERCHANT_TYPE]
}

/**
 * 检查功能模块是否启用
 */
export function isModuleEnabled(module: FeatureModule): boolean {
  const config = getCurrentMerchantConfig()
  return config.enabledModules.includes(module)
}

/**
 * 获取主题配置
 */
export function getThemeConfig() {
  return getCurrentMerchantConfig().theme
}

/**
 * 获取 TabBar 配置
 */
export function getTabBarConfig() {
  return getCurrentMerchantConfig().tabBar
}

/**
 * 获取商品模块配置
 */
export function getProductConfig() {
  return getCurrentMerchantConfig().product
}

/**
 * 获取计算器配置
 */
export function getCalculatorConfig() {
  return getCurrentMerchantConfig().calculator
}

export { CURRENT_MERCHANT_TYPE }
