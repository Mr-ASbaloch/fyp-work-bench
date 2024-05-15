import {StyleSheet, Text, View, Image} from 'react-native';
import {Avatar, Card} from 'react-native-paper';

const DashBoard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 5,
            color: 'black',
          }}>
          Support Provided
        </Text>
        <View
          style={{borderColor: 'grey', borderWidth: 0.5, margin: 20}}></View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 5,
            color: 'black',
          }}>
          We Got You Covered!
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
          }}>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={require('../assets/images/criteria.png')}
            />
            <Text style={styles.cardText}>Search by criteria</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={require('../assets/images/Vector.png')}
            />
            <Text
              style={styles.cardText}
              onPress={() => {
                navigation.navigate('scholarship');
              }}>
              Scholarship list
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={require('../assets/icons/left.png')}
            />
            <Text
              onPress={() => {
                navigation.navigate('Profile');
              }}
              style={styles.cardText}>
              Profile
            </Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={require('../assets/images/dreams.png')}
            />
            <Text style={styles.cardText}>Achieve Dreams</Text>
          </View>
        </View>
        <Card
          style={{
            backgroundColor: '#D9D9D9',
          }}>
          <Avatar.Image
            size={80}
            source={require('../assets/images/avatar.png')}
            style={{
              alignSelf: 'center',
              margin: 10,
            }}
          />
          <Card.Content>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',

                margin: 5,
              }}>
              Achieve your dreams ‘Access scholarships that match your education
              financial needs and achieve your goals
            </Text>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingBottom: 5,
  },
  main: {
    // flex: 1,
    paddingHorizontal: 20,
    // margin: 20,
    marginTop: 20,
    width: '100%',
  },
  card: {
    width: '45%',
    padding: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginBottom: 20,
  },
  cardImage: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    // padding: 15,
    margin: 5,
  },
  cardText: {
    backgroundColor: 'white',

    padding: 10,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#24306e',
  },
});
