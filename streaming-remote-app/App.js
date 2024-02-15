import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'

import { IpContext, IpContextProvider } from '@src/utils';
import IpInputAlert from '@components/screens/IpInputAlert';
import RemoteController from '@components/screens/RemoteController';


const App = () => {
  return (
    <IpContextProvider>
      <SafeAreaView style={styles.container}>
        <Content />
        <StatusBar style="auto" />
      </SafeAreaView>
    </IpContextProvider>
  )
}

const Content = () => {
  const { ipAddress } = useContext(IpContext);
  return ipAddress === undefined ? <IpInputAlert /> : <RemoteController />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
})

export default App;