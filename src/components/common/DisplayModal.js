import React from 'react';
import {View, Modal, StyleSheet, Text, Image} from 'react-native';
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: 100,
    marginBottom: 100,
  },
  modalContainerTextStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: 'center',
  //  alignItems: 'center',
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

  buttonView: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  primaryButtonStyle: {
    backgroundColor: '#8BBABB',
    paddingLeft: 24,
    paddingRight: 24,
  },

  primaryButtonTextStyle: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingTop: 4,
    paddingBottom: 4,
    color: 'black',
  },

  secondaryButtonStyle: {
    backgroundColor: '#C7F0DB',
  },
  secondaryButtonTextStyle: {
    color: 'black',
    paddingRight: 46,
    paddingLeft: 46,
    paddingTop: 4,
    paddingBottom: 4,
  },
  logostyle: {
    height: 80,
    width: 85,
  },
  imageView: {
    marginTop: 190,
    flexDirection: 'row',
    justifyContent: 'center',
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
