import React, { useContext } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native'

import { IpContext, IpContextProvider } from '@src/utils';
import IpInputAlert from '@components/screens/IpInputAlert';
import RemoteController from '@components/screens/RemoteController';
import MousePad from './src/components/screens/MousePad';

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
  const [toggleView, setToggleView] = React.useState(false);

  return ipAddress === undefined ? <IpInputAlert /> : toggleView ? <MousePad setToggleView={setToggleView} ipAddress={ipAddress} /> : <RemoteController setToggleView={setToggleView} ipAddress={ipAddress} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
})

export default App;