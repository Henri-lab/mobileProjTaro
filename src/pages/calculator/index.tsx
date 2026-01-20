import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Calculator() {
  return (
    <View className='calculator'>
      <Text className='title'>代购计算器</Text>
      <Text className='desc'>汇率转换、运费计算、利润计算</Text>
      <Text className='desc'>功能开发中...</Text>
    </View>
  )
}
