import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {SmallCustomButton} from '../components/common';
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  middleContent: {
    padding: 16,
    marginTop: 24,
  },
  nameViewStyle: {
    marginRight: 60,
  },
  nameTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  logoutTabStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 24,
    paddingBottom: 24,
  },
  customTextStyle: {
    color: 'black',
  },
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
    paddingRight: 90,
    paddingLeft: 90,
    backgroundColor: 'white',
  },
  primaryButtonTextStyle: {
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 4,
    paddingBottom: 4,
    color: 'red',
  },
  secondaryButtonStyle: {
    backgroundColor: 'white',
    paddingRight: 90,
    paddingLeft: 90,
  },
  secondaryButtonTextStyle: {
    color: 'blue',
    paddingRight: 45,
    paddingLeft: 45,
    paddingTop: 4,
    paddingBottom: 4,
  },
  containerWrapper: {
    flex: 1,
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const {
      middleContent,
      nameViewStyle,
      nameTextStyle,
      logoutTabStyle,
      customTextStyle,
      container,
      modalContainer,
      innerContainer,
      buttonView,
      primaryButtonStyle,
      primaryButtonTextStyle,
      secondaryButtonStyle,
      secondaryButtonTextStyle,
    } = styles;

    const modalBackgroundStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };
    const innerContainerTransparentStyle = {padding: 25};

    return (
      <View style={styles.containerWrapper}>
        <View style={middleContent}>
          <View style={nameViewStyle}>
            <Text style={nameTextStyle}>Settings</Text>
          </View>
          <View style={[container, modalBackgroundStyle]}>
            <Modal
              animationType="fade"
              transparent
              visible={this.state.modalVisible}
              onRequestClose={() => {}}>
              <View style={modalContainer}>
                <View style={[innerContainer, innerContainerTransparentStyle]}>
                  <View style={buttonView}>
                    <SmallCustomButton
                      buttonStyles={primaryButtonStyle}
                      textStyles={primaryButtonTextStyle}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                        this.props.navigation.navigate('login');
                        this.props.logoutUser();
                      }}>
                      Log Out
                    </SmallCustomButton>
                  </View>
                  <View style={buttonView}>
                    <SmallCustomButton
                      buttonStyles={secondaryButtonStyle}
                      textStyles={secondaryButtonTextStyle}
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      Cancel
                    </SmallCustomButton>
                  </View>
                </View>
              </View>
            </Modal>
          </View>

          <View style={logoutTabStyle}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Text style={customTextStyle}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Profile;
