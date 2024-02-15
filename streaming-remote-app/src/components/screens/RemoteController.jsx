import React from 'react';
import { View, TouchableOpacity, StyleSheet} from 'react-native';
import {
    MaterialCommunityIcons,
  } from '@expo/vector-icons'
import Remote from '@components/organisms/Remote';
import { keyCommand } from '@src/utils';
   
const RemoteController = ({setToggleView, ipAddress}) => {
    return (
        <View style={styles.remoteContainer}>
            <TouchableOpacity
                    style={styles.searchIcon}
                    onPress={() => setToggleView(true)}
                >
                    <MaterialCommunityIcons
                        name="movie-search"
                        size={40}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
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
        marginTop: 60,
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
    searchIcon: {
        backgroundColor: '#9d0000',
        position: 'absolute',
        top: 0,
        right: 10,
        marginBottom: 20,
        padding: 10,
        borderRadius: "50%",
    },
})

export default RemoteController;
