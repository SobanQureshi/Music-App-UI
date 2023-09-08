import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Audio = () => {
  const [selectedAudio, setSelectedAudio] = useState(-1);
  const [data, setData] = useState([
    {
      image: require('../src/Images/image1.jpg'),
      title: 'Title',
      description: 'Description',
    },
    {
      image: require('../src/Images/image2.jpg'),
      title: 'Title',
      description: 'Description',
    },
    {
      image: require('../src/Images/image3.jpg'),
      title: 'Title',
      description: 'Description',
    },
    {
      image: require('../src/Images/image4.jpg'),
      title: 'Title',
      description: 'Description',
    },
  ]);
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={[
                styles.audioItem,
                {marginBottom: data.length - 1 == index ? 50 : 0, backgroundColor:selectedAudio == index ? "#FFBB2E" : 'white'},
                
              ]}
              onPress={() => {
                setSelectedAudio(index);
              }}>
              <View style={styles.audioLeftView}>
                <Image
                  source={selectedAudio == index ? require('../src/Images/pause-btn.png'): require('../src/Images/play-btn.png')}
                  style={[styles.playBtn,{tintColor:selectedAudio == index ? 'black' : '#FFBB2E'}]}
                />
                <Text style={styles.audioItemText}>5:02</Text>
                <Text style={styles.audioItemText}>{item.title}</Text>
              </View>
              <Image
                source={item.image}
                style={[styles.playBtn, {marginRight: 10}]}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  audioItem: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'space-between',
  },
  playBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  audioItemText: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: '400',
    color: 'black',
  },
  audioLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Audio;
