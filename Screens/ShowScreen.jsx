import React from "react";
import { WebView } from 'react-native-webview';

const ShowScreen = (props) => {
  const { route } = props;
  const { article } = route.params;
  //console.log(article);
  return (
    <WebView source={{ uri: article.url }} style={{ flex: 1 }} />
  );
}

export default ShowScreen;