import React from 'react';
import { View } from 'react-native';
import Colors from './Colors';

const Hr = (props) => (
  <View
    {...props}
    style={[props.style,
      {
        flexDirection: 'row',
      }]}
  >
    <View style={{
      flex: 1,
      height: 1,
      backgroundColor: Colors.lightgrey,
    }}
    />
  </View>
);

export default Hr;
