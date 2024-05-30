import { View, StatusBar } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/authScreens/RegisterScreen';
import LoginScreen from '../screens/authScreens/LoginScreen';
import FirstScreen from '../screens/firstScreen';
import StartScreen from '../screens/SecondScreen';
import ForgotScreen from '../screens/authScreens/ForgotPassword';
import OtpScreen from '../screens/authScreens/OtpVerification';
import ResetPassword from '../screens/ResetPassword';

import ProfileScreen from '../screens/profileScreens/index';
import EditProfile from '../screens/profileScreens/editProfile';
import TermsOfUse from '../screens/TermsConditions';

import ScholarshipList from '../screens/scholarship';
import PersonalData from '../screens/scholarship/apply';
import FormComponent from '../screens/scholarship/secondStepForm';
import FamilyExpenditures from '../screens/scholarship/thirdForm';
import UtilitiesAndExpenditures from '../screens/scholarship/fifthForm';
import CongratulationScreen from '../screens/scholarship/success';
import auth from '@react-native-firebase/auth';
import SplashScreen from '../screens/Splash';
import TabNavigation from '../screens/Dashboard/bottomNavigation';
import AccountSafety from '../screens/accountSafety';
import ContactUsScreen from '../screens/contactUS';
import SupportAndServices from '../screens/customerSupport';
import NoComplaintFoundScreen from '../screens/customerSupport/complaint';
import NoVideoFoundScreen from '../screens/customerSupport/video';
import Setting from '../screens/settings';
import CheckStatus from '../screens/scholarshipStatus';
import StatusResult from '../screens/scholarshipStatus/statusResult';
import NotificationScreen from '../screens/notification';
import Header from '../components/AppBar';
import PrivacyPolicyScreen from '../screens/privacyPolicy';
import AboutUsScreen from '../screens/aboutUs';
import ComplaintScreen from '../screens/customerSupport/complaintForm';
import FourthForm from '../screens/scholarship/fourthForm';
import ScholarshipDetail from '../screens/scholarship/ScholarShipDetails';

const stack = createNativeStackNavigator();
const StatusBarWrapper = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {children}
    </View>
  );
};
export default function NavigationScreen() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setInitializing(true);
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      console.log('user', user);
      if (initializing) setInitializing(false);
    });
    setInitializing(false);
    return subscriber; // unsubscribe on unmount
  }, [user]);

  if (initializing) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <StatusBarWrapper>
        <stack.Navigator>
          {/* <stack.Screen
                name="dashBoard"
                component={TabNavigation}
                options={{
                  headerShown: false,
                }}
              /> */}
          {user ? (
            <>

              <stack.Screen
                name="dashBoard"
                component={TabNavigation}
                options={{
                  headerShown: false,
                }}
              />
               <stack.Screen
                name="Details"
                component={ScholarshipDetail}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="profile"
                component={ProfileScreen}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="editProfile"
                component={EditProfile}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Terms"
                component={TermsOfUse}
                // options={{
                //   headerShown: false,
                // }}
              />
              <stack.Screen
                name="applyForm"
                component={PersonalData}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="secondForm"
                component={FormComponent}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="thirdForm"
                component={FamilyExpenditures}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="fourthForm"
                component={FourthForm}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Support"
                component={SupportAndServices}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Complaint"
                component={NoComplaintFoundScreen}
              // options={{
              //   headerShown: false,
              // }}
              />
                <stack.Screen
                name="Scholarships"
                component={ScholarshipList}
              // options={{
              //   headerShown: false,
              // }}
              />
              <stack.Screen
                name="Tutorial"
                component={NoVideoFoundScreen}
              // options={{
              //   headerShown: false,
              // }}
              />

              <stack.Screen
                name="fifthForm"
                component={UtilitiesAndExpenditures}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="congratsScreen"
                component={CongratulationScreen}
                options={{
                  headerShown: false,
                }}
              />

              <stack.Screen name="ResetPassword" component={ResetPassword} />

              <stack.Screen
                name="scholarship"
                component={ScholarshipList}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="safetyTips"
                component={AccountSafety}
                // options={{
                //   headerShown: false,
                // }}
              />

              <stack.Screen
                name="Contact"
                component={ContactUsScreen}
                // options={{
                //   headerShown: false,
                // }}
              />
              <stack.Screen
                name="Status"
                component={CheckStatus}
                options={{
                  // headerShown: false,
                  title: 'Check Your Status',
                }}
              />
              <stack.Screen
                name="StatusResult"
                component={StatusResult}
              // options={{
              //   headerShown: false,
              // }}
              />
              <stack.Screen
                name="AppBar"
                component={Header}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Setting"
                component={Setting}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Notification"
                component={NotificationScreen}
              // options={{
              //   title: 'C',
              // }}
              />
               <stack.Screen
                name="Terms and Conditions"
                component={TermsOfUse}
              // options={{
              //   title: 'C',
              // }}
              />
               <stack.Screen
                name="Privacy Policy"
                component={PrivacyPolicyScreen}
              // options={{
              //   title: 'C',
              // }}
              />
                <stack.Screen
                name="Complaints"
                component={ComplaintScreen}
              // options={{
              //   title: 'C',
              // }}
              />
               <stack.Screen
                name="About Us"
                component={AboutUsScreen}
              // options={{
              //   title: 'C',
              // }}
              />
                <stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  headerShown: false,
                  title: 'Login',
                }}
              />
              <stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="ForgotPassword"
                component={ForgotScreen}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Otp"
                component={OtpScreen}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <>
              <stack.Screen
                name="first"
                component={FirstScreen}
                options={{
                  headerShown: false,
                  title: 'Login',
                }}
              />

              <stack.Screen
                name="start"
                component={StartScreen}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{
                  headerShown: false,
                  title: 'Login',
                }}
              />
              <stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="ForgotPassword"
                component={ForgotScreen}
                options={{
                  headerShown: false,
                }}
              />
              <stack.Screen
                name="Otp"
                component={OtpScreen}
                options={{
                  headerShown: false,
                }}
              />

            </>
          )}
        </stack.Navigator>
      </StatusBarWrapper>
    </NavigationContainer>
  );
}
