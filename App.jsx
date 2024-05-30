import {Platform, View, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Orientation from 'react-native-orientation-locker';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import NavigationScreen from './src/navigation/navigationScreen';
import {initializeAuth} from './src/store/slices/authSlice';
import {useDispatch} from 'react-redux';

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

const AppContent = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => {
        SplashScreen.hide();
        setLoading(false);
      }, 2000);
    } else {
      setLoading(false);
    }
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  return loading ? <Loader /> : <NavigationScreen />;
};

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Background opacity
  },
});

export default App;
