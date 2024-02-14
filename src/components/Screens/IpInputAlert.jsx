import {useContext } from 'react'
import {
    Alert
  } from 'react-native'

import { IpContext } from '../../utils'

const IpInputAlert = () => {
    const {updateIpAddress} = useContext(IpContext);
    return (
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
                onPress: ip => updateIpAddress(ip)
              }
            ],
            "plain-text"
          )
    )
}

export default IpInputAlert;