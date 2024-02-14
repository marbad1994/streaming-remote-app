import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert
} from 'react-native'
import React, { useState } from 'react'
import {
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'


const styles = StyleSheet.create({
  playButton: {
    borderRadius: '25%',
    width: 260,
    height: 120,
    backgroundColor: '#3e3e3e',
    marginBottom: 20,
  },
  remoteIcon: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  remoteButton: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#3e3e3e',
    borderRadius: '50%',
    display: 'flex',
    width: 100,
    height: 100,
  },
  remoteRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  remoteContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: "100%",
    justifyContent: 'center',
    flexDirection: 'column',
    width: "100%",
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#141414',
  },
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  movie: {
    opacity: 1,
    zIndex: 1,
    width: 300,
    height: 150,
    margin: 10,
  },
  category: {
    fontSize: 24,
    marginLeft: 20,
    marginRight: 20,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#ebebeb',
    fontWeight: 'bold',
    textShadowColor: '#141414',
    textShadowRadius: 5,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'left',
    marginTop: -20,
    marginLeft: -17,
    color: '#ebebeb',
    fontWeight: 'bold',
    textShadowColor: '#141414',
    textShadowRadius: 5,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    color: '#000',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
})


export default function App() {
  const [ipAddress, setIpAddress] = useState()
  const keyCommand = (key) => {
    fetch(`http://${ipAddress}:5000/api/v1/key-command/${key}`)
  }

  const Remote = () => {
    return (
      <View style={styles.remoteContainer}>
        <View style={styles.remoteRow}>
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => keyCommand('space')}
          >
            <MaterialCommunityIcons
              name="play-pause"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.remoteRow}>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('up')}
          >
            <MaterialIcons
              name="volume-up"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('down')}
          >
            <MaterialIcons
              name="volume-down"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.remoteRow}>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('f')}
          >
            <Octicons
              name="screen-full"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('m')}
          >
            <MaterialIcons
              name="volume-off"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.remoteRow}>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('rewind')}
          >
            <MaterialIcons
              name="replay-10"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('fast-forward')}
          >
            <MaterialIcons
              name="forward-10"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.remoteRow}>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('refresh')}
          >
            <MaterialIcons
              name="refresh"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.remoteButton}
            onPress={() => keyCommand('s')}
          >
            <MaterialIcons
              name="skip-next"
              size={60}
              color="white"
              style={styles.remoteIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {ipAddress === undefined ? 
   Alert.prompt(
    "Enter ip address",
    "The ip address should be printed in the terminal when you run the server",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK",
        onPress: ip => setIpAddress(ip)
      }
    ],
    "plain-text"
  ) :

        <Remote />}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
