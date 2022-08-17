import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AntDesign, Octicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
let movieList = require( "./movies");



const styles = StyleSheet.create({
  playButton: {
    borderRadius: "25%",
    width: 260,
    height: 120,
    marginLeft: 30,
    backgroundColor: "#3e3e3e",
    marginBottom: 20,
  },
  remoteIcon: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
    marginBottom: "auto"
  },
  remoteButton: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#3e3e3e",
    borderRadius: "50%",
    display: "flex",
    width: 100,
    height: 100,
  },
  remoteRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  remoteContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: 20,
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
    color: "#ebebeb",
    fontWeight: 'bold',
    textShadowColor: "#141414",
    textShadowRadius: 5,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'left',
    marginTop: -20,
    marginLeft: -17,
    color: "#ebebeb",
    fontWeight: 'bold',
    textShadowColor: "#141414",
    textShadowRadius: 5,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
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
    justifyContent: "center",
    margin: 10,
  },
});

const customPickerStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'white',
  },
  inputAndroid: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default function App() {
  const [category, setCategory] = useState(null)
  const [categories, setCategories] = useState([])
  const [country, setCountry] = useState("Sweden")
  const [movies, setMovies] = useState([])
  const [showRemote, setShowRemote] = useState(false)


  const openURL = (netflix_id) => {
    console.log("OPENURL")
    setShowRemote(true)
    fetch(`http://192.168.8.152:5000/${netflix_id}`)
  }
  
  const keyCommand = (key) => {
    if (key == "close") {
      setShowRemote(false)
    }
    fetch(`http://192.168.8.152:5000/key-command/${key}`)
  }
  
  const Item = ({ title, img, netflixId }) => (
    <ImageBackground source={{uri: img}} resizeMode="cover" style={styles.image}>
      <View style={{padding: 20, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={() => openURL(netflixId)} style={styles.button}><AntDesign style={{alignSelf: "center", marginBottom: 10, textShadowColor: "rgba(0, 0, 0, 0.71)", textShadowRadius: 10, padding: 15}} name="playcircleo" size={80} color="white" /></TouchableOpacity>
      </View>
    </ImageBackground>
  );
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://unogs-unogs-v1.p.rapidapi.com/static/genres',
      headers: {
        'X-RapidAPI-Key': '6f882fb5b5mshb29ecdaca69481fp111c6ajsn4577c25cf140',
        'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
      }
    };
    
    /*axios.request(options).then(function (response) {
      const result = response.data.results
      const items = []
      for (let i = 0; i < result.length; i++) {
        if (i < 2) {
          console.log(result[i])
        }
        let categoryObj = {label: result[i].genre, value: result[i].netflix_id}
        items.push(categoryObj)
      }
      
      setCategories(items)
    }).catch(function (error) {
      console.error(error);
    });*/
    const c = [{
      value: 12739,
      label: "20th Century Period Pieces"
    },
    {
      value: 77213,
      label: "Absurd Comedies"
    }]
    setCategories(c)
    setCategory(c[0].value)
  }, [])
 const Dropdown = () => {
    return (
      <View style={{width: "95%", marginLeft: "auto", marginRight: "auto"}}>
      <Text style={styles.category}>{category && categories && categories.find(element => element.value == category).label}</Text>

      <View style={{display: "flex", flexDirection: "col", height: 60}}>

        <RNPickerSelect
            style={customPickerStyles}
            placeholder={{label: "Choose genre", value: ""}}
            onValueChange={(value) => setCategory(value)}
            items={categories}
        ></RNPickerSelect>
        <AntDesign style={{ marginTop: -28, marginLeft: "auto", marginRight: 20}} name="caretdown" size={14} color="white" />
        </View>
        </View>
    );
  };

  const Remote = () => {
    return (
      <View style={styles.remoteContainer}>
        <View style={styles.remoteRow}>
      <TouchableOpacity style={styles.playButton}onPress={() => keyCommand("space")} ><MaterialCommunityIcons name="play-pause" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>

        </View>
       
        <View style={styles.remoteRow}>
      <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("up")} ><MaterialIcons name="volume-up" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>
      <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("down")} ><MaterialIcons name="volume-down" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>
      </View>
      <View style={styles.remoteRow}>
      <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("f")} ><Octicons name="screen-full" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>
      <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("m")} ><MaterialIcons name="volume-off" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>

      </View>
        <View style={styles.remoteRow}>
      <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("rewind")} ><MaterialIcons name="replay-10" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>
      <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("fast-forward")} ><MaterialIcons name="forward-10" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>
      
      </View>
        <View style={styles.remoteRow}>
        <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("refresh")} ><MaterialIcons name="refresh" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>
      <TouchableOpacity style={styles.remoteButton}onPress={() => keyCommand("close")} ><MaterialIcons name="close" size={60} color="white"  style={styles.remoteIcon}/></TouchableOpacity>
      </View>
     </View>
    )
  }
  

  useEffect(() => {
    /*const options = {
      method: 'GET',
      url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
      params: {
        type: 'movie',
        country_andorunique: country,
        genre_list: category,
        order_by: 'date'
      },
      headers: {
        'X-RapidAPI-Key': '6f882fb5b5mshb29ecdaca69481fp111c6ajsn4577c25cf140',
        'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      const result = response.data.results
      console.log(result)
      setMovies(result)
    }).catch(function (error) {
      console.error(error);
    });*/
      setMovies(movieList[category])
  }, [category])

  const renderItem = ({ item }) => (
    <Item title={item.title} img={item.img} netflixId={item.netflix_id} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {!showRemote ?
      <View>
      <Dropdown/>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.netflix_id}
      />
     </View> 
      : <Remote/>}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

