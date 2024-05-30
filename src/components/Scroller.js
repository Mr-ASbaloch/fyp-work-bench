import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={{ uri: item }} style={styles.image} />
            </View>
        );
    };

    return (
        <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.8}
            layout="stack"
            loop={true}
            autoplay={true}
            autoplayInterval={3000}

        />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: screenWidth * 0.8,
        height: screenWidth * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: '95%',
        height: '90%',
        resizeMode: 'cover',
        borderRadius: 10,
        overflow: 'hidden',

    },
});

export default ImageCarousel;
