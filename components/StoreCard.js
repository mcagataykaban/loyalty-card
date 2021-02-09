import * as React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { Fontisto } from '@expo/vector-icons'; 

import { Avatar, Card, ListItem, Button, Icon } from 'react-native-elements'

// Note: The latest react-native-elements does not work on expo snacks
// due to an error with how it loads fonts, specifically Fontisto
// as a workaround, this demo uses v1.2.4

export default function App() {
  return (
    <SafeAreaView>
      <Card>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          <Avatar
            rounded
            source={{
              uri:
                'https://javascriptpros.com/wp-content/themes/fmbm_base/img/jsp/apple-touch-icon.png',
            }}
          />
          <Text style={{ marginLeft: 10 }}>JavaScript Pros</Text>
        </View>
        <Text style={{ marginBottom: 10 }}>
          {"I'm baby echo park franzen beard tumblr pabst chambray organic. Mlkshk flexitarian master cleanse pork belly pop-up."}
        </Text>
      </Card>
    </SafeAreaView>
  );
}
