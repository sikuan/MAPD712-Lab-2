import { StyleSheet, Text, View, TextInput, Button, Switch} from 'react-native';
import React, {useState} from 'react';

export default function App() {
const [value, setValue] = React.useState('placeholder');
const [isEnabled, setIsEnabled] = React.useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[styles.container,
                  isEnabled ? {backgroundColor: 'grey'} : {backgroundColor: 'yellow'}
                  ]}>

      <Switch onValueChange={toggleSwitch}
              value={isEnabled}>
      </Switch>

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
