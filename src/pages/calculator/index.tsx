import { View, Text, Input, Picker } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

export default function Calculator() {
  // 货币列表
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'KRW', 'AUD']
  const currencyNames = {
    USD: '美元',
    EUR: '欧元',
    GBP: '英镑',
    JPY: '日元',
    KRW: '韩元',
    AUD: '澳元'
  }

  // 状态
  const [currency, setCurrency] = useState(0) // 货币索引
  const [originalPrice, setOriginalPrice] = useState('') // 原价
  const [exchangeRate, setExchangeRate] = useState('7.2') // 汇率
  const [weight, setWeight] = useState('') // 重量(kg)
  const [shippingRate, setShippingRate] = useState('80') // 运费单价(元/kg)
  const [profitRate, setProfitRate] = useState('15') // 利润率(%)

  // 计算结果
  const calculate = () => {
    const price = parseFloat(originalPrice) || 0
    const rate = parseFloat(exchangeRate) || 7.2
    const w = parseFloat(weight) || 0
    const shipRate = parseFloat(shippingRate) || 80
    const profit = parseFloat(profitRate) || 15

    // 人民币价格
    const cnyPrice = price * rate
    // 运费
    const shippingFee = w * shipRate
    // 成本
    const cost = cnyPrice + shippingFee
    // 利润
    const profitAmount = cost * (profit / 100)
    // 最终售价
    const finalPrice = cost + profitAmount

    return {
      cnyPrice: cnyPrice.toFixed(2),
      shippingFee: shippingFee.toFixed(2),
      cost: cost.toFixed(2),
      profitAmount: profitAmount.toFixed(2),
      finalPrice: finalPrice.toFixed(2)
    }
  }

  const result = calculate()

  // 复制结果
  const copyResult = () => {
    const text = `
【代购计算】
原价: ${originalPrice} ${currencies[currency]}
汇率: ${exchangeRate}
人民币: ¥${result.cnyPrice}
重量: ${weight}kg
运费: ¥${result.shippingFee}
成本: ¥${result.cost}
利润(${profitRate}%): ¥${result.profitAmount}
售价: ¥${result.finalPrice}
    `.trim()

    Taro.setClipboardData({
      data: text,
      success: () => {
        Taro.showToast({
          title: '已复制到剪贴板',
          icon: 'success'
        })
      }
    })
  }

  // 分享到朋友圈
  const shareToMoment = () => {
    Taro.showToast({
      title: '分享功能开发中',
      icon: 'none'
    })
  }

  return (
    <View className='calculator'>
      <View className='section'>
        <Text className='section-title'>💰 商品信息</Text>

        <View className='form-item'>
          <Text className='label'>货币类型</Text>
          <Picker
            mode='selector'
            range={currencies.map(c => `${c} (${currencyNames[c]})`)}
            value={currency}
            onChange={(e) => setCurrency(Number(e.detail.value))}
          >
            <View className='picker'>
              {currencies[currency]} ({currencyNames[currencies[currency]]})
            </View>
          </Picker>
        </View>

        <View className='form-item'>
          <Text className='label'>原价</Text>
          <Input
            className='input'
            type='digit'
            placeholder='请输入原价'
            value={originalPrice}
            onInput={(e) => setOriginalPrice(e.detail.value)}
          />
        </View>

        <View className='form-item'>
          <Text className='label'>汇率</Text>
          <Input
            className='input'
            type='digit'
            placeholder='请输入汇率'
            value={exchangeRate}
            onInput={(e) => setExchangeRate(e.detail.value)}
          />
        </View>
      </View>

      <View className='section'>
        <Text className='section-title'>📦 物流信息</Text>

        <View className='form-item'>
          <Text className='label'>重量 (kg)</Text>
          <Input
            className='input'
            type='digit'
            placeholder='请输入重量'
            value={weight}
            onInput={(e) => setWeight(e.detail.value)}
          />
        </View>

        <View className='form-item'>
          <Text className='label'>运费单价 (元/kg)</Text>
          <Input
            className='input'
            type='digit'
            placeholder='请输入运费单价'
            value={shippingRate}
            onInput={(e) => setShippingRate(e.detail.value)}
          />
        </View>
      </View>

      <View className='section'>
        <Text className='section-title'>💵 利润设置</Text>

        <View className='form-item'>
          <Text className='label'>利润率 (%)</Text>
          <Input
            className='input'
            type='digit'
            placeholder='请输入利润率'
            value={profitRate}
            onInput={(e) => setProfitRate(e.detail.value)}
          />
        </View>
      </View>

      <View className='result-section'>
        <Text className='result-title'>📊 计算结果</Text>

        <View className='result-item'>
          <Text className='result-label'>人民币价格</Text>
          <Text className='result-value'>¥{result.cnyPrice}</Text>
        </View>

        <View className='result-item'>
          <Text className='result-label'>运费</Text>
          <Text className='result-value'>¥{result.shippingFee}</Text>
        </View>

        <View className='result-item'>
          <Text className='result-label'>成本</Text>
          <Text className='result-value highlight'>¥{result.cost}</Text>
        </View>

        <View className='result-item'>
          <Text className='result-label'>利润</Text>
          <Text className='result-value success'>¥{result.profitAmount}</Text>
        </View>

        <View className='result-item final'>
          <Text className='result-label'>建议售价</Text>
          <Text className='result-value primary'>¥{result.finalPrice}</Text>
        </View>
      </View>

      <View className='actions'>
        <View className='btn btn-secondary' onClick={copyResult}>
          <Text className='btn-text'>复制结果</Text>
        </View>
        <View className='btn btn-primary' onClick={shareToMoment}>
          <Text className='btn-text'>分享到朋友圈</Text>
        </View>
      </View>
    </View>
  )
}
