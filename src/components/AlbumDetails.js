import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';
import Button from './Button';

const AlbumDetails = ({ album }) => {

  const { title, artist, thumbnail_image, image } = album;
  return (
        <Card>
            <CardItem>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageThumbStyle} 
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={styles.headerContent}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>

            <CardItem>
                <Image
                    style={styles.albumStyle} 
                    source={{ uri: image }} 
                />
            </CardItem>

            <CardItem>
                <Button onPress={() => console.log(title)}/>
            </CardItem>

        </Card>
  );  
};

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageThunbStyle: {
        height: 50,
        width: 50
    },
    albumStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetails;