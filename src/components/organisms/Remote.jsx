import React from 'react';
import { View,StyleSheet } from 'react-native';
import RemoteButton from '../molecules/RemoteButton';
import {
    Octicons,
    MaterialIcons,
  } from '@expo/vector-icons'

const RemoteData = [
    [{ keyStroke: 'up', iconName: 'volume-up', IconLib: MaterialIcons },
    { keyStroke: 'down', iconName: 'volume-down', IconLib: MaterialIcons }],
    [{ keyStroke: 'f', iconName: 'screen-full', IconLib: Octicons },
    { keyStroke: 'm', iconName: 'volume-off', IconLib: MaterialIcons }],
    [{ keyStroke: 'rewind', iconName: 'replay-10', IconLib: MaterialIcons },
    { keyStroke: 'fast-forward', iconName: 'forward-10', IconLib: MaterialIcons }],
    [{ keyStroke: 'refresh', iconName: 'refresh', IconLib: MaterialIcons },
    { keyStroke: 's', iconName: 'skip-next', IconLib: MaterialIcons }],
]

const Remote = () => {
  return (
    <>
      {RemoteData.map((data, index) => (
        <View key={index} style={styles.remoteRow}>
            {data.map((item, index) => {
                return <RemoteButton key={index} keyStroke={item.keyStroke} iconName={item.iconName} IconLib={item.IconLib} />
            })}
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
    remoteRow: {
        display: 'flex',
        flexDirection: 'row',
      },
});

export default Remote;
