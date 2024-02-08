import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const NewsText = ({imageurl,title,subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.textbox}>
          <Text style={styles.mainText}>
            {title}
          </Text>
          <Text style={styles.subText}>
            {subtitle}
          </Text>
        </View>
        <View style={styles.imagebox}>
          <Image 
          style={{width: 100, height: 100}}
          source={{ url: imageurl }} />
        </View>
      </View>
    </View>
  );
}
export default NewsText;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
  },

  textbox: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between'
  },

  imagebox: {
    width: 100,
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  subText: {
    fontSize: 16,
  },
});
