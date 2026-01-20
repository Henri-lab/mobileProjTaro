/**
 * 订单状态
 */
export enum OrderStatus {
  PENDING = 'pending',           // 待支付
  PAID = 'paid',                 // 已支付
  PROCESSING = 'processing',     // 处理中
  SHIPPED = 'shipped',           // 已发货
  COMPLETED = 'completed',       // 已完成
  CANCELLED = 'cancelled',       // 已取消
  REFUNDED = 'refunded',         // 已退款
}

/**
 * 支付状态
 */
export enum PaymentStatus {
  UNPAID = 'unpaid',
  PAID = 'paid',
  REFUNDED = 'refunded',
}

/**
 * 物流状态
 */
export enum ShippingStatus {
  PENDING = 'pending',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
}

/**
 * 订单项
 */
export interface OrderItem {
  id: string
  productId: string
  productName: string
  productImage: string
  specs?: string
  price: number
  quantity: number
  subtotal: number
}

/**
 * 收货地址
 */
export interface ShippingAddress {
  id: string
  name: string
  phone: string
  province: string
  city: string
  district: string
  detail: string
  isDefault: boolean
}

/**
 * 客户信息
 */
export interface CustomerInfo {
  id: string
  name: string
  phone: string
  avatar?: string
}

/**
 * 订单信息
 */
export interface Order {
  id: string
  orderNo: string
  customerId: string
  customerInfo: CustomerInfo

  items: OrderItem[]

  totalAmount: number
  discountAmount: number
  shippingFee: number
  finalAmount: number

  status: OrderStatus
  paymentStatus: PaymentStatus
  shippingStatus: ShippingStatus

  shippingAddress?: ShippingAddress
  remark?: string

  createdAt: string
  updatedAt: string
  paidAt?: string
  shippedAt?: string
  completedAt?: string
}
