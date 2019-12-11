import React from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, Text} from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    color: 'darkgrey',
    paddingLeft: 5,
  },
  containerStyle: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

const Input = ({label, value, onChangeText, placeholder}) => {
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autocorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
};

export {Input};
