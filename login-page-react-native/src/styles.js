import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    viewLogo: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%',
    },
    input: {
      width: '90%',
      backgroundColor: '#777',
      opacity: 0.7,
      marginBottom: 20,
      borderRadius: 10,
      fontSize: 20,
      color: '#777',
      padding: 7,
    },
    btnSubmit: {
      backgroundColor: '#ff6a02',
      padding: 10,
      borderRadius: 10,
      width: '90%',
      marginBottom: 20,
    
    },
  
    btnSubmitText: {
      color: '#fff',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  
    btnCreateAcText: {
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
  
    btnForgotText: {
      textDecorationLine: 'underline',
    }
  });
  
  export default styles;