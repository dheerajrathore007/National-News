import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
export default class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: '8 Comments',
          image:
            'https://thumbs.dreamstime.com/b/comment-icon-vector-illustration-white-background-127591271.jpg',
        },
        {
          title: ' 34 Likes',
          image:
            'https://cdn2.vectorstock.com/i/1000x1000/54/16/heart-icon-vector-23205416.jpg',
        },
        {
          title: 'Share',
          image:
            'https://cdn2.vectorstock.com/i/1000x1000/83/41/share-icon-isolated-on-white-background-vector-30178341.jpg',
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,

          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Settings')}>
            <Image
              style={{width: 20, height: 20, marginRight: 90, marginLeft: 20}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/271/271220.png',
              }}
            />
          </TouchableOpacity>
          <Image
            style={{width: 20, height: 25, marginLeft: 160}}
            source={{
              uri: 'https://w7.pngwing.com/pngs/860/512/png-transparent-instagram-social-media-save-instagram-instagram-save-social-media-logo-icon-thumbnail.png',
            }}
          />
          <Image
            style={{width: 30, height: 25, marginRight: 20, marginLeft: 10}}
            source={{
              uri: 'https://www.kindpng.com/picc/m/157-1571844_upload-icon-png-image-free-download-searchpng-upload.png',
            }}
          />
        </View>
        <Image
          style={{width: '100%', height: 220, marginTop: 10}}
          source={{
            uri: 'https://w0.peakpx.com/wallpaper/488/66/HD-wallpaper-butterfly-2020-beautiful-flowers-greenery-lovely-nature-nice-purple-views.jpg',
          }}
        />
        <Text
          style={{
            marginTop: 20,
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            marginLeft: 10,
          }}>
          This big green bueen, 4200 almost-iridescent wings this is my screen
          2021 sun on sun is big planet the screen.
        </Text>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Image
            style={{width: '10%', borderRadius: 30, height: 45, marginTop: 20}}
            source={{
              uri: 'https://db8efzmkfmgl7.cloudfront.net/talent/1579248551-WhatsApp.Image.2020.01.13.at.11.44.28.PM.jpeg',
            }}
          />
          <Text style={{marginTop: 30, marginHorizontal: 10, fontSize: 16}}>
            {' '}
            By Andy john 1hr ago
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={true}
            data={this.state.data}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{width: 40, height: 40, marginRight: 10}}
                  source={{uri: item.image}}
                />
                <Text style={{marginTop: 10, marginEnd: 30}}>{item.title}</Text>
              </View>
            )}
            keyExtractor={index => {
              return index;
            }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginHorizontal: 5,
              marginTop: 10,
            }}>
            Nature is the interdependent, which helps maintain the ecosystem.
            Plants, animals, and humans all depend on nature for their survival.
            It supplies oxygen, sunlight, soil, water.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginHorizontal: 5,
              marginTop: 20,
            }}>
            Nature is the interdependent, which helps maintain the ecosystem.
            Plants, animals, and humans all depend on nature for their survival.
            It supplies oxygen, sunlight, soil, water.
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginHorizontal: 5,
              marginTop: 20,
            }}>
            Nature interdependent, which helps will be
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Tags')}>
            <Image
              style={{width: 40, height: 40, marginLeft: 340}}
              source={{
                uri: 'data:image/png;base64,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',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'white',
    height: '100%',
    resizeMode: 'content',
  },
});