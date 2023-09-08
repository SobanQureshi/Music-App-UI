import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const Post = () => {
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
          <View style={[styles.postItem,{marginBottom: data.length-1 == index ? 50 : 0}]}>
            <Image source={item.image} style={styles.postItemImg}/>
            <Text style={styles.postItemText}>{item.title}</Text>
            <Text style={styles.postItemText}>{item.description}</Text>
          </View>
          )
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  postItem: {
    width: '90%',
    height: 230,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    backgroundColor: 'white',
    elevation: 5,
    marginTop: 20,
    alignSelf: 'center',
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    marginBottom:100
  },
  postItemImg:{
    width:'100%',
    height:'70%',
    borderRadius:90
  },
  postItemText:{
    fontSize:18,
    marginLeft:20,
    marginTop:5,
    fontWeight:'400',
    color:'black'
  }
});
export default Post;
