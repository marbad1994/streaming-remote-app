import React from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    MaterialCommunityIcons,
} from '@expo/vector-icons'
import { cursorCommand, netflixSearch, scrollCommand } from '@src/utils';

const MousePad = ({setToggleView, ipAddress}) => {
    const [text, onChangeText] = React.useState('');
    return (
        <View style={styles.remoteContainer}>
            <TouchableOpacity
                    style={styles.toggleRemote}
                    onPress={() => setToggleView(false)}
                >
                    <MaterialCommunityIcons
                        name="remote-tv"
                        size={40}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
            <View style={{display: "flex", flexDirection: "row", marginTop: 70, marginBottom: 20}}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder='Search for a movie...'
                placeholderTextColor={'white'}
                value={text}
            /><TouchableOpacity
                    style={styles.searchIcon}
                    onPress={() => netflixSearch(text, ipAddress)}
                >
                    <MaterialCommunityIcons
                        name="movie-search"
                        size={40}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
                </View>
            <View style={styles.remoteRow}>

                <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => cursorCommand('up', ipAddress)}
                >
                    <MaterialCommunityIcons
                        name="arrow-up-drop-circle"
                        size={60}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.remoteRow}>


            </View>
            <View style={styles.remoteRow}>
                <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => cursorCommand('left', ipAddress)}
                >
                    <MaterialCommunityIcons
                        name="arrow-left-drop-circle"
                        size={60}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => cursorCommand('click', ipAddress)}
                >
                    <MaterialCommunityIcons
                        name="cursor-default"
                        size={60}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.playButton}
                    onPress={() => cursorCommand('right', ipAddress)}
                >
                    <MaterialCommunityIcons
                        name="arrow-right-drop-circle"
                        size={60}
                        color="white"
                        style={styles.remoteIcon}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.playButton}
                onPress={() => cursorCommand('down', ipAddress)}
            >
                <MaterialCommunityIcons
                    name="arrow-down-drop-circle"
                    size={60}
                    color="white"
                    style={styles.remoteIcon}
                />
            </TouchableOpacity>
            <View style={styles.remoteRow}>

<TouchableOpacity
    style={styles.playButton}
    onPress={() => scrollCommand('up', ipAddress)}
>
    <MaterialCommunityIcons
        name="arrow-collapse-up"
        size={60}
        color="white"
        style={styles.remoteIcon}
    />
</TouchableOpacity>
<TouchableOpacity
    style={styles.playButton}
    onPress={() => scrollCommand('down', ipAddress)}
>
    <MaterialCommunityIcons
        name="arrow-collapse-down"
        size={60}
        color="white"
        style={styles.remoteIcon}
    />
</TouchableOpacity>
</View>
        </View>
    );
};

const styles = StyleSheet.create({
    playButton: {
        borderRadius: '25%',
        width: "30%",
        height: 120,
        backgroundColor: '#3e3e3e',
        marginBottom: 20,
    },
    searchIcon: {
        backgroundColor: '#3e3e3e',
        marginBottom: 20,
        padding: 15,
        borderRadius: "5%",
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
        gap: "20%",
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
    input: {
        height: 65,
        borderWidth: 1,
        padding: 10,
        marginTop: 3,
        width: "70%",
        color: 'white',
        borderColor: "white",
      },
    toggleRemote: {
        backgroundColor: '#9d0000',
        position: 'absolute',
        top: 0,
        right: 10,
        marginBottom: 20,
        padding: 10,
        borderRadius: "50%",
    },
})

export default MousePad;
