import React from 'react';
import Deck from 'react-native-swiper-deck';
import { Button, View } from 'react-native';
import {

  ScreenContainer,

} from '../components/common';


class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScreenContainer style={{ flex: 1, backgroundColor: 'black' }}>

        <View style={{ right: 15, top: 30 }}>
          <Deck

            data={[
              { file: 'https://i.pinimg.com/originals/56/c9/8a/56c98a363ab953d24d36d247c0b1d9a7.jpg' },
              { file: 'https://imgnooz.com/sites/default/files/wallpaper/nature/60890/beautiful-sky-white-flower-wallpapers-60890-9393731.jpg' },
              { file: 'https://afktravel.com/wp-content/uploads/2014/08/namaqua-flowers-2.jpg' },
              { file: 'https://www.holinnbayside.com/blog/wp-content/uploads/2019/02/renee-fisher-669112-unsplash-260x430.jpg' },
            ]}
            swipeOrientation="horiz"
          />
        </View>
        <Button
          title="Go to Profile screen"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </ScreenContainer>
    );
  }
}
export default Home;
