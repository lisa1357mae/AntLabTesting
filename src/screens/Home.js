import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Quote from 'react-native-quote-generator';
import Deck from 'react-native-swiper-deck';
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
    color: '#C7F0DB',
    fontSize: 14,
  },
  containerStyle: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 23,
  },
  screenContainerStyle: {
    backgroundColor: '#C7F0DB',
  },
  quoteView: {
    flex: 1,
    marginTop: 10,
  },
  deckView: {
    marginTop: 10,
    paddingBottom: 10,
  },
  newImageStyle: {
    height: 175,
    width: 175,
    borderRadius: 5,
  },
  newDeckStyle: {
    bottom: 100,
  },
  newtextStyle: {
    color: 'transparent',
  },
  footerTextStyle: {
    marginLeft: 115,
    fontWeight: 'bold',
    color: '#6C7B95',
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
      <ScreenContainer style={styles.screenContainerStyle}>
        <View style={styles.containerStyle}>
          <SmallCustomButton
            textStyles={styles.homeButtonTextStyle}
            buttonStyles={styles.homeButtonStyle}
            onPress={() => this.props.navigation.navigate('Profile')}>
            Next Screen
          </SmallCustomButton>
        </View>
        <View style={styles.quoteView}>
          <Quote />
        </View>
        <View style={styles.deckView}>
          <Deck
            data={[
              {
                file:
                  'https://i.pinimg.com/originals/56/c9/8a/56c98a363ab953d24d36d247c0b1d9a7.jpg',
              },
              {
                file:
                  'https://afktravel.com/wp-content/uploads/2014/08/namaqua-flowers-2.jpg',
              },
            ]}
            swipeOrientation="horiz"
            imageStyle={styles.newImageStyle}
            deckStyle={styles.newDeckStyle}
            textStyle={styles.newtextStyle}
          />
        </View>
        <Text style={styles.footerTextStyle}>Swipe me</Text>
      </ScreenContainer>
    );
  }
}
export default Home;
