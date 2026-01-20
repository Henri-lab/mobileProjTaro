import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <View className='header'>
        <Text className='title'>商家助手</Text>
        <Text className='subtitle'>国外代购微商模版</Text>
      </View>

      <View className='content'>
        <View className='card'>
          <Text className='card-title'>🛍️ 商品管理</Text>
          <Text className='card-desc'>管理您的商品库存</Text>
        </View>

        <View className='card'>
          <Text className='card-title'>📱 朋友圈动态</Text>
          <Text className='card-desc'>发布商品推广动态</Text>
        </View>

        <View className='card'>
          <Text className='card-title'>🧮 代购计算器</Text>
          <Text className='card-desc'>汇率、运费、利润计算</Text>
        </View>

        <View className='card'>
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
