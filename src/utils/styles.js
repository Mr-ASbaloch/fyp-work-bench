import { Platform, StyleSheet } from 'react-native';

const primary = 'white'; // old :#336D15
const bgPrimary='#757b9a';
const blue = '#2B3674';
const pink = '#D066CE';
const white = '#fff';
const grey = 'grey';
const blueSoft = '#E8F2FF';
const blueLight = '#80BDF4';
const blueHeading = '#4D78DE';
const blueLightHeading = '#2ABFCB';
const greenLight = '#87EB9C';
const yellowLight = '#FFF4E6';
const yellow = '#FEA732';
const greenLight90 = '#E6F4E9';
const green = '#2B8234';
const redLight = '#FEE9E8';
const red = '#E13F46';
const blackText = '#1F1F1F';
const placeholderTextColor = '#787575'
const common= '#24306e'

export const colors = {
  primary,
  bgPrimary,
  blue,
  pink,
  white,
  grey,
  blueSoft,
  blueLight,
  blueHeading,
  greenLight,
  yellowLight,
  yellow,
  greenLight90,
  green,
  red,
  redLight,
  blueLightHeading,
  blackText,
  placeholderTextColor,
  common
};

export const commonStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  bgPrimary: {
    backgroundColor: primary,
  },
  btnColor:{
    backgroundColor:'#24306e',
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  textPrimary: {
    color:'#24306e',
  },
  textBtn:{
  color:'#75c9c8',
  },
  textBlue: {
    color: blue,
  },
  textPink: {
    color: pink,
  },
  colorBlack: {
    color: '#000',
  },
  colorWhite: {
    color: '#fff',
    // color: '#a4a9ac',

  },
  colorGrey:{
color:'#000',
  },

  // All other classes
  textCenter: {
    textAlign: 'center',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
  padding0: {
    padding: 0,
  },
  padding1: {
    padding: 5,
  },
  padding2: {
    padding: 10,
  },
  padding3: {
    padding: 15,
  },
  padding4: {
    padding: 20,
  },
  padding5: {
    padding: 25,
  },
  paddingX: {
    paddingHorizontal: 0,
  },
  paddingX1: {
    paddingHorizontal: 5,
  },
  paddingX2: {
    paddingHorizontal: 10,
  },
  paddingX3: {
    paddingHorizontal: 15,
  },
  paddingX4: {
    paddingHorizontal: 20,
  },
  paddingX5: {
    paddingHorizontal: 25,
  },
  paddingX10: {
    paddingHorizontal: 50,
  },
  paddingY0: {
    paddingVertical: 0,
  },
  paddingY1: {
    paddingVertical: 5,
  },
  paddingY2: {
    paddingVertical: 10,
  },
  paddingY3: {
    paddingVertical: 15,
  },
  paddingY4: {
    paddingVertical: 20,
  },
  paddingY5: {
    paddingVertical: 25,
  },
  margin0: {
    margin: 0,
  },
  margin1: {
    margin: 5,
  },
  margin2: {
    margin: 10,
  },
  margin3: {
    margin: 15,
  },
  margin4: {
    margin: 20,
  },
  margin5: {
    margin: 25,
  },
  marginX0: {
    marginHorizontal: 0,
  },
  marginX1: {
    marginHorizontal: 5,
  },
  marginX2: {
    marginHorizontal: 10,
  },
  marginX3: {
    marginHorizontal: 15,
  },
  marginX4: {
    marginHorizontal: 20,
  },
  marginX5: {
    marginHorizontal: 25,
  },
  marginY0: {
    marginVertical: 0,
  },
  marginY1: {
    marginVertical: 5,
  },
  marginY2: {
    marginVertical: 10,
  },
  marginY3: {
    marginVertical: 15,
  },
  marginY4: {
    marginVertical: 20,
  },
  marginY5: {
    marginVertical: 25,
  },
  rounded0: {
    borderRadius: 0,
  },
  rounded1: {
    borderRadius: 5,
  },
  rounded2: {
    borderRadius: 10,
  },
  rounded3: {
    borderRadius: 15,
  },
  rounded4: {
    borderRadius: 20,
  },
  rounded5: {
    borderRadius: 25,
  },
  fs1: {
    fontSize: 15,
  },
  fs2: {
    fontSize: 18,
  },
  fs3: {
    fontSize: 21,
  },
  fs4: {
    fontSize: 24,
  },
  fs5: {
    fontSize: 27,
  },
  fw1: {
    fontWeight: '500',
  },
  fw2: {
    fontWeight: '600',
  },
  fw3: {
    fontWeight: '700',
  },
  fw4: {
    fontWeight: '800',
  },
  fw5: {
    fontWeight: '900',
  },
  marginTop0: {
    marginTop: 0,
  },
  marginTop1: {
    marginTop: 5,
  },
  marginTop2: {
    marginTop: 10,
  },
  marginTop3: {
    marginTop: 15,
  },
  marginTop4: {
    marginTop: 20,
  },
  marginTop5: {
    marginTop: 25,
  },
  marginBottom0: {
    marginBottom: 0,
  },
  marginBottom1: {
    marginBottom: 5,
  },
  marginBottom2: {
    marginBottom: 10,
  },
  marginBottom3: {
    marginBottom: 15,
  },
  marginBottom4: {
    marginBottom: 20,
  },
  marginBottom5: {
    marginBottom: 25,
  },
  marginLeft0: {
    marginLeft: 0,
  },
  marginLeft1: {
    marginLeft: 5,
  },
  marginLeft2: {
    marginLeft: 10,
  },
  marginLeft3: {
    marginLeft: 15,
  },
  marginLeft4: {
    marginLeft: 20,
  },
  marginLeft5: {
    marginLeft: 25,
  },
  marginRight0: {
    marginRight: 0,
  },
  marginRight1: {
    marginRight: 5,
  },
  marginRight2: {
    marginRight: 10,
  },
  marginRight3: {
    marginRight: 15,
  },
  marginRight4: {
    marginRight: 20,
  },
  marginRight5: {
    marginRight: 25,
  },
  paddingTop0: {
    paddingTop: 0,
  },
  paddingTop1: {
    paddingTop: 5,
  },
  paddingTop2: {
    paddingTop: 10,
  },
  paddingTop3: {
    paddingTop: 15,
  },
  paddingTop4: {
    paddingTop: 20,
  },
  paddingTop5: {
    paddingTop: 25,
  },
  paddingBottom0: {
    paddingBottom: 0,
  },
  paddingBottom1: {
    paddingBottom: 5,
  },
  paddingBottom2: {
    paddingBottom: 10,
  },
  paddingBottom3: {
    paddingBottom: 15,
  },
  paddingBottom4: {
    paddingBottom: 20,
  },
  paddingBottom5: {
    paddingBottom: 25,
  },
  paddingLeft0: {
    paddingLeft: 0,
  },
  paddingLeft1: {
    paddingLeft: 5,
  },
  paddingLeft2: {
    paddingLeft: 10,
  },
  paddingLeft3: {
    paddingLeft: 15,
  },
  paddingLeft4: {
    paddingLeft: 20,
  },
  paddingLeft5: {
    paddingLeft: 25,
  },
  paddingRight0: {
    paddingRight: 0,
  },
  paddingRight1: {
    paddingRight: 5,
  },
  paddingRight2: {
    paddingRight: 10,
  },
  paddingRight3: {
    paddingRight: 15,
  },
  paddingRight4: {
    paddingRight: 20,
  },
  paddingRight5: {
    paddingRight: 25,
  },
  dFlex: {
    display: 'flex',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  justifyContentEvenly: {
    justifyContent: 'space-evenly',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCol: {
    flexDirection: 'column',
  },
  flexRowR: {
    flexDirection: 'row-reverse',
  },
  flexColR: {
    flexDirection: 'column-reverse',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignLeft: {
    textAlign: 'left',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  bgWhite: {
    backgroundColor: '#fff',
  },
  shadow1: {
    elevation: 1,
  },
  shadow2: {
    elevation: 2,
  },
  shadow3: {
    elevation: 3,
  },
  shadow4: {
    elevation: 4,
  },
  shadow5: {
    elevation: 5,
  },
  positionAbsolute: {
    position: 'absolute',
  },
  positionRelative: {
    position: 'relative',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  bottomBar: {
    position: 'absolute',
    backgroundColor: colors.white,
    elevation: 3,
    borderTopWidth: 0,
    height: Platform.OS === 'android' ? 80 : 90,
    paddingTop: Platform.OS === 'android' ? 5 : 15,
  },
  scrollView: {
    flex: 1,
    zIndex: 1000,
    paddingBottom: 30,
  },
  pageContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});
