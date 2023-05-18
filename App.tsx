/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Avatar from './src/components/Avatar';
import {MaterialIcon} from './src/components/Icon';
import HorizontalLineDivider from './src/components/Divider';
import RoundedRectangle from './src/components/RoundedRectangle';
import {View} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
    },
    viewBackground: {
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'normal',
      color: '#888',
    },
    socialMediaRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginVertical: 20,
      marginHorizontal: 30,
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: 'gold',
      justifyContent: 'center',
      alignItems: 'center',
    },
    customRectangle: {
      marginHorizontal: 30,
      marginVertical: 30,
    },
    skills: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: 30,
    },
  });

  const socialMediaData = [
    {name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com'},
    {name: 'Twitter', icon: 'twitter', url: 'https://www.twitter.com'},
    {
      name: 'Github',
      icon: 'github',
      url: 'https://www.github.com/tarikwaleed',
    },
    {
      name: 'Linkedin',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/tarikwaleed',
    },
    // Add more social media data here...
  ];
  const skills = [
    'Node.js',
    'PHP',
    'Python',
    'MySQL',
    'PostgreSQL',
    'HTML',
    'CSS',
    'JS',
    'Bootstrap',
  ];
  const projects = [
    'Angular GoodReads Clone',
    'Nest.Js todo App',
    'Python Automation Scripts',
  ];
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={[styles.container, styles.viewBackground]}>
          <Avatar imageSource={require('./profile3.jpg')} size={150} />
          <View style={[styles.container, styles.viewBackground]}>
            <Text style={styles.name}>Tarik Waleed</Text>
            <Text style={styles.title}>Backend Engineer</Text>
          </View>
        </View>
        <View style={[styles.socialMediaRow, styles.viewBackground]}>
          {socialMediaData.map((socialMedia, index) => (
            <TouchableOpacity
              key={index}
              style={styles.circle}
              onPress={() => Linking.openURL(socialMedia.url)}>
              <MaterialIcon
                size="extraLarge"
                color="black"
                name={socialMedia.icon}
              />
            </TouchableOpacity>
          ))}
        </View>
        {/* Skills */}
        <HorizontalLineDivider color="grey" thickness={3} />
        <RoundedRectangle
          width={100}
          height={50}
          borderRadius={10}
          backgroundColor="gold"
          style={styles.customRectangle}
          text="Skills"
        />
        <View style={styles.skills}>
          {skills.map((text, index) => (
            <RoundedRectangle
              key={index}
              width={100}
              height={50}
              borderRadius={10}
              backgroundColor="lightblue"
              text={text}
              textColor="white"
            />
          ))}
        </View>
        {/* Projects */}
        <HorizontalLineDivider color="grey" thickness={3} />
        <RoundedRectangle
          width={100}
          height={50}
          borderRadius={10}
          backgroundColor="gold"
          style={styles.customRectangle}
          text="Projects"
        />
        <View style={styles.skills}>
          {projects.map((text, index) => (
            <RoundedRectangle
              key={index}
              width={350}
              height={50}
              borderRadius={10}
              backgroundColor="lightblue"
              text={text}
              textColor="white"
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
