import React from 'react';
import Deck from 'react-native-swiper-deck';
import { Button, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  cardStyle: {

  },
});

// const {} = styles;

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
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
          imageStyle={{ height: 190, width: 105 }}
          deckStyle={{ width: 50, left: 150, top: 150 }}
          textStyle={{
            color: 'purple',
            backgroundColor: 'yellow',
            fontSize: 12,
            left: 50,
            top: 40,
          }}
        />
        <View style={{ flex: 1, width: 120, left: 200 }}>
          <Button
            title="Go to Next"
            onPress={() => this.props.navigation.navigate('Profile')}
          />
        </View>
      </View>
    );
  }
}
export default Home;
