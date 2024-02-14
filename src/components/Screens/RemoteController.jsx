import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import {
    MaterialCommunityIcons,
  } from '@expo/vector-icons'
import Remote from '../organisms/Remote';
import { keyCommand, IpContext } from '../../utils';
   
const RemoteController = () => {
    const {ipAddress} = React.useContext(IpContext);

    return (
        <View style={styles.remoteContainer}>
            <View style={styles.remoteRow}>
                <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => keyCommand('space', ipAddress)}
                >
                    <MaterialCommunityIcons
                        name="play-pause"
                        size={60}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
            </View>
            <Remote />
        </View>
    );
};

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
})

export default RemoteController;
