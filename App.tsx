import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import colors from './src/theme/colors';
import font from './src/theme/fonts';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.post}>
        {/*Header*/}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
            }}
            style={styles.userAvatar}
          />
          <Text style={styles.userName}>vadimnotjustdev</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            style={styles.treeDots}
          />
        </View>
        {/*Content*/}
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
          }}
          style={styles.image}
        />
        {/*Footer*/}
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: font.weight.bold,
    color: colors.black,
  },
  treeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default App;
