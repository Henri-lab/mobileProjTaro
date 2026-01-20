import { MerchantType, FeatureModule, MerchantConfig } from '@/types/merchant'

/**
 * 国外代购商家模版配置
 */
export const overseasShoppingConfig: MerchantConfig = {
  type: MerchantType.OVERSEAS_SHOPPING,
  name: '国外代购商家',
  description: '专为国外代购微商打造的小程序模版',

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
      {
        pagePath: 'pages/index/index',
        text: '商品',
        iconPath: 'assets/icons/product.png',
        selectedIconPath: 'assets/icons/product-active.png',
      },
      {
        pagePath: 'pages/moment/list/index',
        text: '动态',
        iconPath: 'assets/icons/moment.png',
        selectedIconPath: 'assets/icons/moment-active.png',
      },
      {
        pagePath: 'pages/calculator/index',
        text: '计算器',
        iconPath: 'assets/icons/calculator.png',
        selectedIconPath: 'assets/icons/calculator-active.png',
      },
      {
        pagePath: 'pages/customer/list/index',
        text: '客户',
        iconPath: 'assets/icons/customer.png',
        selectedIconPath: 'assets/icons/customer-active.png',
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/icons/profile.png',
        selectedIconPath: 'assets/icons/profile-active.png',
      },
    ],
    color: '#999999',
    selectedColor: '#FF6B6B',
    backgroundColor: '#FFFFFF',
  },

  product: {
    showCategory: true,
    showStock: true,
    supportSpecs: true,
    customFields: [
      {
        key: 'origin',
        label: '产地',
        type: 'text',
        required: true,
      },
      {
        key: 'brand',
        label: '品牌',
        type: 'text',
        required: false,
      },
      {
        key: 'estimatedDelivery',
        label: '预计到货（天）',
        type: 'number',
        required: true,
      },
    ],
  },

  calculator: {
    defaultExchangeRate: 7.2,
    supportedCurrencies: ['USD', 'EUR', 'GBP', 'JPY', 'KRW', 'AUD'],
    shippingMethod: 'weight',
    defaultProfitRate: 0.15,
  },
}
