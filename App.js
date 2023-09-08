import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Post from './components/post';
import Audio from './components/Audio';
import Videos from './components/Videos'
import BottomMenu from './components/BottomMenu';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#4F4C85'}></StatusBar>
      <Image source={require('./src/Images/bg.jpg')} style={styles.bg} />
      <View style={styles.tabView}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Text
            style={[
              styles.tabText,
              {
                backgroundColor: selectedTab == 0 ? '#FFBB2E' : 'white',
                borderRadius: 30,
                fontWeight: selectedTab == 0 ? 'bold' : 'normal',
              },
            ]}>
            Post
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Text
            style={[
              styles.tabText,
              {
                backgroundColor: selectedTab == 1 ? '#FFBB2E' : 'white',
                borderRadius: 30,
                fontWeight: selectedTab == 1 ? 'bold' : 'normal',
              },
            ]}>
            Audio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Text
            style={[
              styles.tabText,
              {
                backgroundColor: selectedTab == 2 ? '#FFBB2E' : 'white',
                borderRadius: 30,
                fontWeight: selectedTab == 2 ? 'bold' : 'normal',
              },
            ]}>
            Video
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab == 0 && <Post />}
      {selectedTab == 1 && <Audio />}
      {selectedTab == 2 && <Videos />}
      <BottomMenu/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bg: {
    height: '50%',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  tabView: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tab: {
    flexDirection: 'row',
    width: '33%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  tabText: {
    color: 'black',
    fontSize: 20,
    height: '80%',
    width: '90%',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});
export default App;
