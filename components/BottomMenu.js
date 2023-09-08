import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const BottomMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [menuClick, setmenuClick] = useState(false)
  return (
    <TouchableOpacity style={styles.bottomMenu}>
        {menuClick && (<TouchableOpacity
        style={[
          styles.menuItem,
          {backgroundColor: selectedMenu == 4 ? '#FFBB2E' : '#4F4C85'},
        ]}
        onPress={() => {
          setSelectedMenu(4);
          setmenuClick(false)
        }}>
        <Image
          source={require('../src/Images/cross.png')}
          style={[
            styles.img,
            {tintColor: selectedMenu == 4 ? 'black' : 'white'},
          ]}
        />
      </TouchableOpacity>)}
      {menuClick && ( <TouchableOpacity
        style={[
          styles.menuItem,
          {backgroundColor: selectedMenu == 3 ? '#FFBB2E' : '#4F4C85'},
        ]}
        onPress={() => {
          setSelectedMenu(3);
        }}>
        <Image
          source={require('../src/Images/quesmark.png')}
          style={[
            styles.img,
            {tintColor: selectedMenu == 3 ? 'black' : 'white'},
          ]}
        />
      </TouchableOpacity>)}
     {menuClick && ( <TouchableOpacity
        style={[
          styles.menuItem,
          {backgroundColor: selectedMenu == 2 ? '#FFBB2E' : '#4F4C85'},
        ]}
        onPress={() => {
          setSelectedMenu(2);
          
        }}>
        <Image
          source={require('../src/Images/music.png')}
          style={[
            styles.img,
            {tintColor: selectedMenu == 2 ? 'black' : 'white'},
          ]}
        />
      </TouchableOpacity>)}
     {menuClick && ( <TouchableOpacity
        style={[
          styles.menuItem,
          {backgroundColor: selectedMenu == 1 ? '#FFBB2E' : '#4F4C85'},
        ]}
        onPress={() => {
          setSelectedMenu(1);
          
        }}>
        <Image
          source={require('../src/Images/user.png')}
          style={[
            styles.img,
            {tintColor: selectedMenu == 1 ? 'black' : 'white'},
          ]}
        />
      </TouchableOpacity>)}
     {!menuClick && ( <TouchableOpacity
        style={[
          styles.menuItem,
          {backgroundColor: selectedMenu == 0 ? '#FFBB2E' : '#4F4C85'},
        ]}
        onPress={() => {
          setSelectedMenu(0);
          setmenuClick(true)
        }}>
        <Image
          source={require('../src/Images/menu.png')}
          style={[
            styles.img,
            {tintColor: selectedMenu == 0 ? 'black' : 'white'},
          ]}
        />
      </TouchableOpacity>)}
     
    </TouchableOpacity>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  bottomMenu: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#4F4C85',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  img: {
    width: 30,
    height: 30,
  },
});
