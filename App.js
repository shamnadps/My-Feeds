/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';

// implemented without image with header
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View, Text, Image ,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const users = [
    {
      title: '1',
      text: '1',
       avatar: require('./images/road.jpg')
    },
    {
      title: '2',
      text: '1',
      avatar: require('./images/road.jpg')
   },
   {
    title: '3',
    text: '1',
     avatar: require('./images/road.jpg')
  },
  {
    title: '4',
    text: '1',
    avatar: require('./images/road.jpg')
 },
 {
   title: '5',
   text: '1',
   avatar: require('./images/road.jpg')
}
   ]
  return (
    <SafeAreaProvider>
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          
            
            {
              users.map((u, i) => {
              return (
                <Card>
                <Card.Title>{u.title}</Card.Title>
                    <Card.Image key={i} source={u.avatar}
                    containerStyle={{height: 150}}>
                      
                    </Card.Image>
                    <Text>
                        {u.text}
                      </Text>
                      <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                    <Card.Divider/>
                    </Card>
                    );
                  })
              }
          
        </View>
      </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
