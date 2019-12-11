import React from 'react';
import {View, Modal, StyleSheet, Image, Text} from 'react-native';
import {SmallCustomButton} from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0.1, 0.5, 0.5, 0.4)',
    marginBottom: 56,
    marginTop: 240,
    marginRight: 26,
    marginLeft: 26,
    borderRadius: 5,
  },
  innerContainer: {
    marginBottom: 34,
    marginTop: 8,
  },
  buttonView: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  primaryButtonStyle: {
    backgroundColor: '#C7F0DB',
    paddingLeft: 24,
    paddingRight: 24,
    marginRight: 8,
    marginLeft: 8,
  },
  primaryButtonTextStyle: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 4,
    paddingBottom: 4,
    color: '#464159',
  },
  secondaryButtonStyle: {
    backgroundColor: '#8BBABB',
    marginRight: 8,
    marginLeft: 8,
  },
  secondaryButtonTextStyle: {
    color: '#464159',
    paddingRight: 45.5,
    paddingLeft: 45.5,
    paddingTop: 4,
    paddingBottom: 4,
  },
  logostyle: {
    height: 80,
    width: 86,
  },
  imageView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  modalTextStyle: {
    paddingLeft: 2,
    paddingRight: 2,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6C7B95',
  },
  modalTextWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 8,
  },
});

const logo = require('../../images/anthrowarelogo.png');

const ModalButton = ({text, onPress, isPrimary}) => (
  <View style={styles.buttonView}>
    <SmallCustomButton
      buttonStyles={
        isPrimary ? styles.primaryButtonStyle : styles.secondaryButtonStyle
      }
      textStyles={
        isPrimary
          ? styles.primaryButtonTextStyle
          : styles.secondaryButtonTextStyle
      }
      onPress={onPress}>
      {text}
    </SmallCustomButton>
  </View>
);

export const DisplayModal = ({visibility, setVisibility, buttons}) => (
  <View style={[styles.container]}>
    <Modal
      animationType="fade"
      transparent
      visible={visibility}
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalTextWrapper}>
          <Text style={styles.modalTextStyle}>Custom Modal</Text>
        </View>
        <View style={styles.imageView}>
          <Image style={styles.logostyle} source={logo} />
        </View>

        <View style={[styles.innerContainer]}>
          {buttons.map(({text, onPress, isPrimary}) => (
            <ModalButton
              key={text}
              text={text}
              onPress={() => {
                setVisibility(false);
                onPress();
              }}
              isPrimary={isPrimary}
            />
          ))}
        </View>
      </View>
    </Modal>
  </View>
);

export default DisplayModal;
