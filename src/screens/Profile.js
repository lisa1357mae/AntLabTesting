import React from 'react';
import { Button, View, Text } from 'react-native';
import {

  ScreenContainer,

} from '../components/common';
// import Deck from 'react-native-swiper-deck';

class Profile extends React.Component {
  static navigationOptions = {
    title: 'Home'
   };
render() {
 return (
   <ScreenContainer style = {{flex: 1, backgroundColor: 'lightblue'}}>
     <View>
<Text style ={{fontSize: 18, color: 'grey'}}> Profile Screen</Text>
   </View>
   <View style={{top: 100}}>
   <Button
     title="Go to Home screen"
     onPress={() => this.props.navigation.navigate('Home')}
    />
</View>
</ScreenContainer>
);
}
}
export default Profile;
