import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const NewsText = ({imageurl,title,subtitle,onPress}) => {

  const deta = new Date(subtitle);
  const year = deta.getFullYear(); //このメソッド
  const month = deta.getMonth() + 1;
  const day = deta.getDate();
  const createdAt = year + '年' + month + '月' + day + '日';

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.box} onPress={onPress} >
        <View style={styles.textbox}>
          <Text numberOfLines={3} style={styles.mainText}>
            {title}
          </Text>
          <Text style={styles.subText}>
            {createdAt}
          </Text>
        </View>
        <View style={styles.imagebox}>
          <Image 
          style={{width: 100, height: 100}}
          source={{ url: imageurl }} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export default NewsText;

const styles = StyleSheet.create({
  box: {
    height: 100,
    width: "100%",
    borderColor: 'green',
    borderWidth: 1,
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
    fontSize: 16,
    fontWeight: 'bold',
  },

  subText: {
    fontSize: 13,
    color: 'red',
  },
});
