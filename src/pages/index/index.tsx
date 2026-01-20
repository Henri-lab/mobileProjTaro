import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Index() {
  // 跳转到朋友圈动态
  const goToMoment = () => {
    Taro.navigateTo({
      url: '/pages/moment/list/index'
    })
  }

  // 跳转到计算器
  const goToCalculator = () => {
    Taro.navigateTo({
      url: '/pages/calculator/index'
    })
  }

  // 跳转到客户管理
  const goToCustomer = () => {
    Taro.navigateTo({
      url: '/pages/customer/list/index'
    })
  }

  // 跳转到购物车
  const goToCart = () => {
    Taro.navigateTo({
      url: '/pages/cart/index'
    })
  }

  return (
    <View className='index'>
      <View className='header'>
        <Text className='title'>商家助手</Text>
        <Text className='subtitle'>国外代购微商模版</Text>
      </View>

      <View className='content'>
        <View className='card' onClick={goToCart}>
          <Text className='card-title'>🛍️ 商品管理</Text>
          <Text className='card-desc'>管理您的商品库存</Text>
        </View>

        <View className='card' onClick={goToMoment}>
          <Text className='card-title'>📱 朋友圈动态</Text>
          <Text className='card-desc'>发布商品推广动态</Text>
        </View>

        <View className='card' onClick={goToCalculator}>
          <Text className='card-title'>🧮 代购计算器</Text>
          <Text className='card-desc'>汇率、运费、利润计算</Text>
        </View>

        <View className='card' onClick={goToCustomer}>
          <Text className='card-title'>👥 客户管理</Text>
          <Text className='card-desc'>管理客户信息和订单</Text>
        </View>
      </View>

      <View className='footer'>
        <Text className='footer-text'>Powered by Taro + React</Text>
      </View>
    </View>
  )
}
