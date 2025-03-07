//Input.js
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Header = (props) => {
  return (
      <TextInput 
        style={styles.input} 
        {...props}      
      />)
    ;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    marginBottom: 8,
    fontSize: 14
  },
});

export default Header;