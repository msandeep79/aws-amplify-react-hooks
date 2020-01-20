// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { GREY } from '../../constants'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h4: {
    fontFamily: '3270Narrow',
    fontSize: 18,
    color: GREY
  }
})

type Props = {
  title: string,
  style: TextStyleProp
}

const H4 = memo<Props>(({ title, style }) => {
  const { container, h4 } = styles
  return (
    <View style={container}>
      <Text style={[h4, style]}>{title}</Text>
    </View>
  )
})

export { H4 }
