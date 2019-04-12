import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#cedaed',
  },
});

const ScreenContainer = (props) => {
  return <View {...props} style={[styles.container, props.style]}>{props.children}</View>;
};

export { ScreenContainer };
