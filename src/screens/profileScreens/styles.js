// styles.js

import { StyleSheet } from 'react-native';
import { colors } from '../../utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    paddingBottom:30
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color:colors.common,
    textAlign: 'center',
    marginTop:20
  },
  input: {
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    // marginBottom: 10,
    // paddingHorizontal: 10,
    width:'95%',
    alignSelf:'center',
    alignItems:'center',
    display: 'flex',
    paddingVertical:13,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 100,
    borderRadius:3,
    color:"#000000",
    marginTop:5

  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.common,
    borderWidth: 1,
    alignSelf: 'center',
    position: 'relative',//
    backgroundColor: 'white',
    marginTop:20

    //padding:15

},
editImage:{
  width:30 , 
  height: 30,
  position:'absolute',
  right:'31%',
  top:34
},
modalContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'rgba(0,0,0,0.5)',

},
modalContent:{
  backgroundColor:'white',
  padding:20,
  borderRadius:10,
  width:'80%',
  height:'auto'

},
modalButton:{
  backgroundColor:colors.common,
  padding:10,
  borderRadius:5,
  color:'white',
  textAlign:'center',
  marginTop:10
},
});
