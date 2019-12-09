import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Quote from 'react-native-quote-generator';
import {DisplayModal} from '../components/common';

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
    paddingTop: 4,
    paddingBottom: 4,
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
    fontWeight: 'bold',
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
    backgroundColor: 'green',
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
  containerWrapperStyle: {
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
  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#f0f1f3',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    const {
      middleContent,
      nameViewStyle,
      nameTextStyle,
      logoutTabStyle,
      customTextStyle,
    } = styles;

    return (
      <View style={styles.containerWrapperStyle}>
        <View style={middleContent}>
          <View style={nameViewStyle}>
            <Text style={nameTextStyle}>Profile Screen</Text>
          </View>
          <DisplayModal
            visibility={this.state.modalVisible}
            setVisibility={this.setModalVisible}
            buttons={[
              {
                text: 'Log Out',
                onPress: () => {
                  this.props.navigation.navigate('Home');
                },
                isPrimary: true,
              },
              {
                text: 'Cancel',
                onPress: () => {},
              },
            ]}
          />
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
