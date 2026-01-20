import { View, Text, Image, Button } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

// 模拟动态数据
const mockMoments = [
  {
    id: '1',
    type: 'product',
    content: '🔥新品上架！韩国🇰🇷爆款面膜，补水保湿效果超好！现货速抢，手慢无！',
    images: [],
    products: [
      { id: '1', name: '韩国补水面膜', price: 89, image: '' }
    ],
    likes: 15,
    likedByMe: false,
    commentCount: 3,
    createdAt: '2小时前'
  },
  {
    id: '2',
    type: 'showcase',
    content: '感谢亲的信任❤️ 已经是第三次回购啦！看看这满满的好评~',
    images: [],
    likes: 28,
    likedByMe: true,
    commentCount: 8,
    createdAt: '5小时前'
  },
  {
    id: '3',
    type: 'product',
    content: '日本🇯🇵直邮！资生堂红腰子精华，抗老神器！限时特价中💰',
    images: [],
    products: [
      { id: '2', name: '资生堂红腰子', price: 580, image: '' }
    ],
    likes: 42,
    likedByMe: false,
    commentCount: 12,
    createdAt: '昨天 20:30'
  }
]

export default function MomentList() {
  const [moments, setMoments] = useState(mockMoments)

  // 点赞
  const handleLike = (id: string) => {
    setMoments(moments.map(m => {
      if (m.id === id) {
        return {
          ...m,
          likedByMe: !m.likedByMe,
          likes: m.likedByMe ? m.likes - 1 : m.likes + 1
        }
      }
      return m
    }))
  }

  // 分享
  const handleShare = (moment) => {
    Taro.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })

    Taro.showToast({
      title: '点击右上角分享',
      icon: 'none'
    })
  }

  // 复制内容
  const handleCopy = (content: string) => {
    Taro.setClipboardData({
      data: content,
      success: () => {
        Taro.showToast({
          title: '已复制到剪贴板',
          icon: 'success'
        })
      }
    })
  }

  // 发布新动态
  const handlePublish = () => {
    Taro.showToast({
      title: '发布功能开发中',
      icon: 'none'
    })
  }

  return (
    <View className='moment-list'>
      {/* 发布按钮 */}
      <View className='publish-btn' onClick={handlePublish}>
        <Text className='publish-text'>+ 发布动态</Text>
      </View>

      {/* 动态列表 */}
      <View className='moments'>
        {moments.map(moment => (
          <View key={moment.id} className='moment-card'>
            {/* 头部 */}
            <View className='moment-header'>
              <View className='avatar'>👤</View>
              <View className='info'>
                <Text className='name'>我的店铺</Text>
                <Text className='time'>{moment.createdAt}</Text>
              </View>
              <View className='type-tag'>
                {moment.type === 'product' && '商品推广'}
                {moment.type === 'showcase' && '客户晒单'}
              </View>
            </View>

            {/* 内容 */}
            <View className='moment-content'>
              <Text className='content-text'>{moment.content}</Text>
            </View>

            {/* 商品卡片 */}
            {moment.products && moment.products.length > 0 && (
              <View className='product-cards'>
                {moment.products.map(product => (
                  <View key={product.id} className='product-card'>
                    <View className='product-image'>🛍️</View>
                    <View className='product-info'>
                      <Text className='product-name'>{product.name}</Text>
                      <Text className='product-price'>¥{product.price}</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* 互动栏 */}
            <View className='moment-actions'>
              <View className='action-left'>
                <View
                  className={`action-btn ${moment.likedByMe ? 'liked' : ''}`}
                  onClick={() => handleLike(moment.id)}
                >
                  <Text className='action-icon'>{moment.likedByMe ? '❤️' : '🤍'}</Text>
                  <Text className='action-text'>{moment.likes}</Text>
                </View>
                <View className='action-btn'>
                  <Text className='action-icon'>💬</Text>
                  <Text className='action-text'>{moment.commentCount}</Text>
                </View>
              </View>
              <View className='action-right'>
                <View
                  className='action-btn'
                  onClick={() => handleCopy(moment.content)}
                >
                  <Text className='action-icon'>📋</Text>
                  <Text className='action-text'>复制</Text>
                </View>
                <View
                  className='action-btn'
                  onClick={() => handleShare(moment)}
                >
                  <Text className='action-icon'>📤</Text>
                  <Text className='action-text'>分享</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* 底部提示 */}
      <View className='list-footer'>
        <Text className='footer-text'>已显示全部动态</Text>
      </View>
    </View>
  )
}
