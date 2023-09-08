import React, {useState} from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';

const Videos = () => {
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
        numColumns={2}
        data={data}
        renderItem={({item, index}) => {
          return (
            <View style={{width:"50%"}}>
              <View style={styles.videoItem}>
                <Image source={item.image} style={styles.videoImg} />
                <Text style={styles.postItemText}>{item.title}</Text>
                <Text style={styles.postItemText}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoItem: {
    width: '72%',
    height: 200,
    backgroundColor: 'white',
    borderTopLeftRadius:75,
    borderTopRightRadius:75,
    marginLeft:25,
    marginTop:20,
    elevation:10,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  videoImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    // // marginLeft: 10,
    // marginRight: 10,
  },
  postItemText:{
    fontSize:16,
    marginLeft:20,
    marginTop:3,
    fontWeight:'400',
    color:'black'
  }
});

export default Videos;
