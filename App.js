import { StyleSheet, Text, View, TextInput, Button, Switch} from 'react-native';
import React, {useState} from 'react';

export default function App() {
const [value, setValue] = React.useState('placeholder');
const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const [color, setColor] = React.useState('yellow');

  return (
    <View style={[styles.container,
                 {backgroundColor:color}]}
          onValueChange = {color => setColor(color)}>

      <Switch onValueChange={toggleSwitch}
              value={isEnabled}
              onClick={() => setColor('grey')}></Switch>

      <TextInput style={styles.edit}
                 clearTextFocus = 'ture'
                 onChangeText = {text => setValue(text)}>
      </TextInput>
      <Text style={styles.textView}>{value}</Text>
      <Button title='Clear' onPress={() => setValue('')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center'
  },
  edit:{
    borderWidth: 2,
    borderColor:'black',
    width:'90%'
  },
  textView:{
    fontSize: 28,
    borderWidth: 3,
    borderColor: 'red',
    color: "black"
  }
});
