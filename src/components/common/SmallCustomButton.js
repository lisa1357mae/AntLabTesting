import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapperStyle: {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 14,
    paddingLeft: 14,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
  outlineWrapperStyle: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
  },
  outlineTextStyle: {
    color: 'black',
  },
});

const SmallCustomButton = ({
  onPress,
  children,
  buttonStyles,
  textStyles,
  disabled,
  outline,
}) => {
  const {
    wrapperStyle,
    textStyle,
    outlineWrapperStyle,
    outlineTextStyle,
  } = styles;
  const wrapperStyleFlat = {
    ...wrapperStyle,
    ...(outline && outlineWrapperStyle),
    ...buttonStyles,
  };
  const textStyleFlat = {
    ...textStyle,
    ...(outline && outlineTextStyle),
    ...textStyles,
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={wrapperStyleFlat}
      disabled={disabled}>
      <Text style={textStyleFlat}>{children}</Text>
    </TouchableOpacity>
  );
};

SmallCustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  outline: PropTypes.bool,
};

SmallCustomButton.defaultProps = {
  outline: false,
};

export {SmallCustomButton};
