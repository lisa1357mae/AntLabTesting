import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DisplayModal} from '../components/common';

const styles = StyleSheet.create({
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
    color: '#464159',
  },
  logoutTabStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 24,
    paddingBottom: 24,
  },
  customTextStyle: {
    color: '#8BBABB',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWrapperStyle: {
    flex: 1,
    backgroundColor: '#6C7B95',
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
                text: 'Go Home',
                onPress: () => {
                  this.props.navigation.navigate('Home');
                },
                isPrimary: true,
              },
              {
                text: 'Cancel Modal',
                onPress: () => {},
              },
            ]}
          />
          <View style={logoutTabStyle}>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Text style={customTextStyle}>Open Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
export default Profile;
