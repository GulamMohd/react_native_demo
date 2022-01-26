import React, { useState } from 'react';
import { View, Platform, Text } from 'react-native';
import { Button, } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export const SingleDatePageDemo = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [strDate, setStrDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (mode==='date') {
      setStrDate(currentDate.getDay() + '-' + currentDate.getMonth() + '-' + currentDate.getYear());
    } else {
      setStrDate(currentDate.getHours() + ':' + currentDate.getMinutes());
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={{ margin: 10 }}>
      <View >
        <Button mode='contained' onPress={showDatepicker} title="" >Show date picker!</Button>
      </View>
      <View>
        <Button mode='contained' style={{ marginTop: 10 }} onPress={showTimepicker} title="" >Show time picker!</Button>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}

      <Text style={{marginTop:20,fontSize:30,alignSelf:'center'}}>{strDate}</Text>
    </View>
  );
};

export default SingleDatePageDemo;