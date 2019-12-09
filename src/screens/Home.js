import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SmallCustomButton, ScreenContainer} from '../components/common';

const styles = StyleSheet.create({
  homeButtonStyle: {
    backgroundColor: '#6C7B95',
    paddingRight: 46,
    paddingLeft: 46,
    paddingTop: 14,
    paddingBottom: 14,
  },
  homeButtonTextStyle: {
    color: 'black',
    fontSize: 14,
  },
  containerStyle: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 23,
  },
});

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f0f1f3',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <ScreenContainer style={{ backgroundColor:'#C7F0DB' }}>
      <View style={styles.containerStyle}>
        <SmallCustomButton
          textStyles={styles.homeButtonTextStyle}
          buttonStyles={styles.homeButtonStyle}
          onPress={() => this.props.navigation.navigate('Profile')}>
          Next Screen
        </SmallCustomButton>

      </View>
        </ScreenContainer>
    );
  }
}
export default Home;
