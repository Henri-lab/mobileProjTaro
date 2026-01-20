/**
 * 动态类型
 */
export enum MomentType {
  PRODUCT = 'product',           // 商品推广
  REVIEW = 'review',             // 客户评价
  SHOWCASE = 'showcase',         // 晒单
  ANNOUNCEMENT = 'announcement', // 公告
}

/**
 * 动态可见性
 */
export enum MomentVisibility {
  PUBLIC = 'public',
  CUSTOMERS_ONLY = 'customers_only',
  PRIVATE = 'private',
}

/**
 * 动态中的商品
 */
export interface MomentProduct {
  id: string
  name: string
  image: string
  price: number
}

/**
 * 动态评论
 */
export interface MomentComment {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  content: string
  createdAt: string
}

/**
 * 朋友圈动态
 */
export interface Moment {
  id: string
  type: MomentType
  content: string
  images: string[]

  // 关联商品
  products?: MomentProduct[]

  // 关联订单（晒单）
  orderId?: string

  // 点赞
  likes: number
  likedByMe: boolean

  // 评论
  comments: MomentComment[]
  commentCount: number

  // 可见性
  visibility: MomentVisibility

  createdAt: string
  updatedAt: string
}
