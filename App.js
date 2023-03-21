import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={{ flex: 1, backgroundColor: '#00A300' }}
        source={{ uri: 'http://qtili.kz' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        hideKeyboardAccessoryView={true}
        originWhitelist={['*']}
        startInLoadingState={true}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A300',
  },
})
