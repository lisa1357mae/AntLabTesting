import React from 'react';
import Deck from 'react-native-swiper-deck';
import {View, StyleSheet} from 'react-native';
import {SmallCustomButton} from '../components/common';

const styles = StyleSheet.create({
  cardStyle: {},

  homeButtonStyle: {
    backgroundColor: 'lightblue',
    paddingRight: 10,
    paddingLeft: 10,
  },
  homeButtonTextStyle: {
    color: 'black',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

// const {} = styles;

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
      <View style={{ height: 50, width: 50 }}>
        <Deck
          data={[
            { file: 'https://i.pinimg.com/originals/56/c9/8a/56c98a363ab953d24d36d247c0b1d9a7.jpg' },
            { file: 'https://afktravel.com/wp-content/uploads/2014/08/namaqua-flowers-2.jpg' },
          ]}
          swipeOrientation="horiz"
          imageStyle={{ height: 195, width: 190 }}
          deckStyle={{ width: 50, left: 150, top: 150 }}
          textStyle={{
          //  color: 'purple',
          //  backgroundColor: 'yellow',
            fontSize: 12,
            left: 50,
            top: 40,
          }}
        />
      <View style={{ left: 250, bottom: 20}}>
          <SmallCustomButton
            textStyles={styles.homeButtonTextStyle}
            buttonStyles={styles.homeButtonStyle}
            onPress={() => this.props.navigation.navigate('Profile')}>
            Next
          </SmallCustomButton>
        </View>
      </View>
    );
  }
}
export default Home;
