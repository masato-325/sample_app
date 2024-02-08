import React,{useState,useEffect} from 'react';
import { StyleSheet, View ,FlatList} from 'react-native';
import NewsText from '../components/NewsText';
import Constants from 'expo-constants';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const URI = `https://newsapi.org/v2/top-headlines?country=jp&category=entertainment&apiKey=${Constants.expoConfig.extra.newsApiKey}`;

export default function NewsScreen() {

  const navigation = useNavigation();

  const [news,setNews] = useState([]);

  useEffect(() => {
    getNews();
  },[]);

  const getNews = async () => {
    const response = await axios.get(URI);
    //console.log(response);
    setNews(response.data.articles);
  };

  return (
    <View style={styles.container}>
      <FlatList
      data={news}
      renderItem={({item}) => (
        <NewsText 
        title={item.title} 
        subtitle={item.publishedAt}
        imageurl={item.urlToImage}
        onPress = {() => navigation.navigate("詳細ページ",{ article: item })}
        />
    )}
      keyExtractor={(item, index) => item.url || index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',

  }
});
