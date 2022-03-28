import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import { useEffect,useState } from 'react';


const WEATHER_API_KEY = 'dba6a2f6187b02f0a210de34fb78db54'
const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?'



export default function App() {

  const [errorMessage, setErrorMessage]= useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')



useEffect(() => {
  load()
}, [])

const load = async () => {
  try{
    let {status} = await Location.requestForegroundPermissionsAsync()
  
    console.log(status)

    if (status !== 'granted') {
      setErrorMessage('Access to location is needed to run the app')
      return
    }

    const location = await Location.getCurrentPositionAsync()
    
    const {latitude, longitude} = location.coords

    console.log("latitude, longitude", latitude, longitude)

    const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`

    const response = await fetch(weatherUrl)

    const result = await response.json()

    console.log(response)
    if(response.ok) {
      setCurrentWeather(result)
    }else{
      console.log("-----", result.message)
      setErrorMessage(result.message)
    }

   
   

  } catch (error) {
    setErrorMessage(error.message)
  }


}

if(currentWeather) {
  const {
    main : {temp},
  } = currentWeather

 return (
    <View style={styles.container}>
      <Text>{temp}</Text>
      <StatusBar style="auto" />
    </View>
  )
}else{
  return(
    <View style={styles.container}>
    <Text>{errorMessage}</Text>
    <StatusBar style="auto" />
  </View>

  )
}
}








const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
