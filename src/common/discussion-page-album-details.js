import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './card';
import  CardSectionGeneral from './card-section-general';
//import { Button } from './button';

const DiscussionPageAlbumDetail = ({ dataPassed }) => {
    //making use of destructuring
    // const { title, artist, thumbnail_image, image, url } = dataPassed;
    const { downloadURL } = dataPassed;
    const { albumDetailsContainer,
        titleTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;
    console.log("$$$$$$$$$$$$$$$$$$$ DiscussionPageAlbumDetail $$$$$$$$$$$$$$$$$$$$$$$ Called ********************",downloadURL)
    return (
        <Card>
            {/* <CardSectionGeneral>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }}></Image>
                </View>
                <View style={albumDetailsContainer}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSectionGeneral> */}
            <CardSectionGeneral>
            <View style={thumbnailContainerStyle}>
        <Image style={thumbnailStyle} source={{ uri: downloadURL }}></Image>
    </View>
            </CardSectionGeneral>

            {/* <CardSectionGeneral>
                <Button onPressEvent={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSectionGeneral> */}
        </Card>
    )
}

{/* <Card>
{/* <CardSectionGeneral>
    <View style={thumbnailContainerStyle}>
        <Image style={thumbnailStyle} source={{ uri: thumbnail_image }}></Image>
    </View>
    <View style={albumDetailsContainer}>
        <Text style={titleTextStyle}>{title}</Text>
        <Text>{artist}</Text>
    </View>
</CardSectionGeneral> 
<CardSectionGeneral>
        <Image style={imageStyle} source={{ uri: dataPassed}}/>
</CardSectionGeneral>

// <CardSectionGeneral>
//     <Button onPressEvent={() => Linking.openURL(url)}>
//         Buy Now
//     </Button>
// </CardSectionGeneral>
</Card> */}

const styles = {
    albumDetailsContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    titleTextStyle : {
        fontSize : 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft : 10,
        marginRight : 10
    },
    imageStyle : {
        height : 200,
        flex: 1,
        width : null
    }
}


// {
// <Text>{props.dataPassed.title}</Text>
// <Text>{props.dataPassed.artist}</Text> }
export default DiscussionPageAlbumDetail ;