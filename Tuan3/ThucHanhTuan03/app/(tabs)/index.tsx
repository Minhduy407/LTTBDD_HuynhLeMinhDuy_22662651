import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// You can import supported modules from npm

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{flex: 3, alignItems:'center'}}>
        <Image source={require('@/assets/images/logo1.png')} style={{width: 200, height: 200, alignSelf: 'center'}} />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.title}>
          GROW YOUR BUSINESS
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.paragraph}>
          We will help you growing your business using online server
        </Text>
      </SafeAreaView>
      <SafeAreaView style={{flex: 1, flexDirection: 'row', gap: 100, alignItems: 'center'}}>
       <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>SIGN UP</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#0db6e0ff',
    padding: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title:{
    margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    padding: 10,
    flex: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#edff49ff",
    height: 50,
  },
  text:{
    fontWeight:'bold'
  }
});
