import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/AppBar';

import ImageCarousel from '../../components/Scroller';

import { useNavigation } from '@react-navigation/native';
import DashboardCard from '../../components/dashBoardCard';
import HelpAndSupportCard from '../../components/supportCard';
// import HomCard from '../../components/homeCard';


// const Tab = createBottomTabNavigator();

const Dashboard = ({ navigation }) => {
  // const navigation = useNavigation();

  const images = [
    'https://st3.depositphotos.com/4218696/35198/i/450/depositphotos_351982344-stock-photo-cheerful-international-students-celebrating-successful.jpg',
    'https://media.istockphoto.com/id/1406888053/photo/a-group-of-cheerful-people-at-graduation-holding-diplomas-or-certificates-up-together-and.jpg?s=612x612&w=0&k=20&c=8LRkx77cpb1clqj2tHqOY--uO8Mj6DB8Qd1Y3RdDRyQ=',
    'https://www.samaa.tv/images/scholarships-in-hungary.jpg',
    'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9uYWx8ZW58MHx8MHx8fDA%3D',
    // Add more image URLs as needed
  ];

  return (
    <>
      <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} >

          <ImageCarousel images={images} />
          {/* <Text style={styles.cardText}>Dashboard</Text> */}
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              marginBottom: 15,
              color: 'black',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Support Provided
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: '100%',
              paddingHorizontal: 10,
            }}>
            <DashboardCard imageSource={require('../../assets/icons/menu.png')}
              subTitle=" Scholarship list"
              onPress={() => navigation.navigate('applyForm')}
            />
            <DashboardCard imageSource={require('../../assets/icons/search.png')}
              subTitle=" Search Scholarships"
            // onPress={''}
            />
            <DashboardCard imageSource={require('../../assets/icons/aim.png')}
              subTitle="Achieve Dreams"
            // onPress={''}
            />
            <DashboardCard imageSource={require('../../assets/icons/protection.png')}
              subTitle="Account Safety"
              onPress={() => {
                navigation.navigate('safetyTips')

              }}
            />
            <DashboardCard imageSource={require('../../assets/icons/customer-support.png')}
              subTitle="Help center"
              onPress={() => {
                navigation.navigate('Contact')

              }}
            />
            <DashboardCard imageSource={require('../../assets/icons/setting.png')}
              subTitle="Status"
              onPress={() => {
                navigation.navigate('Status')

              }}
            />
          </View>

          <HelpAndSupportCard
            title="Need Help?"
            description="If you have any questions or issues, feel free to contact our support team."
            source={require('../../assets/icons/customer.png')}
            onPressButton={() => navigation.navigate('Support')}
          />


        </ScrollView>
      </View>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    width: '25%',
    // padding: 10,
    // marginRight: 10,
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
    width: 30,
    height: 30,
    alignSelf: 'center',
    // padding: 15,
    margin: 5,
  },
  cardText: {
    backgroundColor: 'white',

    // padding: 10,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#24306e',
  },
});
