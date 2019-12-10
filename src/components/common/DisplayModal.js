import React from 'react';
import {View, Modal, StyleSheet, Image, Text} from 'react-native';
import {isSmallDevice} from '../common/Margins';
import {SmallCustomButton} from '.';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#DEDEF0',
    marginTop: 100,
    marginBottom: 100,
  },
  modalContainerTextStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  textViewStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  modalBackgroundStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainerTransparentStyle: {
    padding: 25,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 90,
  },
  buttonView: isSmallDevice()
    ? {
        paddingTop: 24,
        paddingBottom: 24,
      }
    : {
        paddingTop: 4,
        paddingBottom: 4,
      },
  primaryButtonStyle: {
    backgroundColor: '#C7F0DB',
    paddingLeft: 24,
    paddingRight: 24,
  },

  primaryButtonTextStyle: isSmallDevice()
    ? {
        color: '#464159',
        paddingRight: 48,
        paddingLeft: 48,
        paddingTop: 22,
        paddingBottom: 42,
      }
    : {
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 4,
        paddingBottom: 4,
        color: '#464159',
      },
  secondaryButtonStyle: {
    backgroundColor: '#8BBABB',
  },
  secondaryButtonTextStyle: isSmallDevice()
    ? {
        color: '#464159',
        paddingRight: 42.5,
        paddingLeft: 42.5,
        paddingTop: 22,
        paddingBottom: 42,
      }
    : {
        color: '#464159',
        paddingRight: 45.5,
        paddingLeft: 45.5,
        paddingTop: 4,
        paddingBottom: 4,
      },
  logostyle: isSmallDevice()
    ? {
        height: 60,
        width: 66,
        bottom: 145,
      }
    : {
        height: 80,
        width: 86,
      },
  imageView: {
    alignItems: 'center',
    marginTop: 160,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalTextStyle: isSmallDevice()
    ? {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 100,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 12,
      }
    : {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 142,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 42,
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
        <Text style={styles.modalTextStyle}>Custom Modal</Text>
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
