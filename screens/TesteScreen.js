// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, Platform } from 'react-native';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
// import { useNavigation } from '@react-navigation/native'

// export default function TesteScreen(){

//     const navigation = useNavigation();

//     const [date, setDate] = useState(new Date());
//     const [mode, setMode] = useState('date');
//     const [show, setShow] = useState(false);
//     const [text, setText] = useState('Vazio');

//     const onChange = (event,selectedDate) => {
//         const currentDate = selectedDate || date;   
//         setShow(Platform.OS === 'android');
//         setDate(currentDate);
    
//     let tempDate = new Date(currentDate);
//     let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/'  + tempDate.getFullYear();
//     let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
//     setText(fDate + '\n' + fTime)

//     console.log(fDate + ' (' + fTime + ')')    
//     }

//     const showMode = (currentMode) =>{
//         setShow(true);
//         setMode(currentMode);
//      }


//     return(
//         <View style={styles.container}>
//             <Text style={{fontWeight:'bold', fontSize: 20}}>{text}</Text>
//             <View style={{margin:20}}>
//                 <Button title='DataPicker' onPress={() => showMode('date')}/>
//             </View>
//             <View style={{margin:20}}>
//                 <Button title='TimePicker' onPress={() => showMode('time')}/>
//             </View>

//             {show && (
//                 <DateTimePickerAndroid
//                 testID='dateTimePicker'
//                 value={date}
//                 mode={mode}
//                 is24Hour={true}
//                 display='default'
//                 onChange={onChange}
//                 />)}


//             <StatusBar style='auto'/>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex : 1,
//         backgroundColor:'#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });