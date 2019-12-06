import React from 'react';
import {View, Modal, StyleSheet, Text} from 'react-native';
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
  //  backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'yellow',
    marginTop: 100,
    marginBottom: 100,
  },
  modalContainerTextStyle: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: 92,
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
    backgroundColor: 'green',
  },

  primaryButtonTextStyle: {
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 4,
    paddingBottom: 4,
    color: 'red',
  },

  secondaryButtonStyle: {
    backgroundColor: 'orange',
  },
  secondaryButtonTextStyle: {
    color: 'magenta',
    paddingRight: 45,
    paddingLeft: 45,
    paddingTop: 4,
    paddingBottom: 4,
  },
});

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
        <Text style={styles.modalContainerTextStyle}>Custom Modal</Text>
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
