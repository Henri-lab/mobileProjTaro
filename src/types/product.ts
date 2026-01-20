/**
 * 商品状态
 */
export enum ProductStatus {
  ON_SALE = 'on_sale',
  OFF_SALE = 'off_sale',
  SOLD_OUT = 'sold_out',
}

/**
 * 商品规格
 */
export interface ProductSpec {
  id: string
  name: string
  options: SpecOption[]
}

export interface SpecOption {
  id: string
  value: string
  price?: number
  stock?: number
}

/**
 * 代购商品信息
 */
export interface OverseasProductInfo {
  // 原产地
  origin: string
  // 原价（外币）
  originalPrice: number
  // 货币类型
  currency: string
  // 汇率
  exchangeRate: number
  // 运费
  shippingFee: number
  // 预计到货时间（天）
  estimatedDeliveryDays: number
  // 采购链接
  purchaseUrl?: string
}

/**
 * 商品基础信息
 */
export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  categoryId: string
  stock: number
  sales: number
  status: ProductStatus

  // 规格
  specs?: ProductSpec[]

  // 自定义字段（根据商家类型动态）
  customFields?: Record<string, any>

  // 代购专用字段
  overseasInfo?: OverseasProductInfo

  createdAt: string
  updatedAt: string
}

/**
 * 商品分类
 */
export interface Category {
  id: string
  name: string
  icon?: string
  parentId?: string
  sort: number
}
