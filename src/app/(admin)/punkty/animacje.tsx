import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { View, Button, StyleSheet , Text} from 'react-native';
  
  export default function AnimatedStyleUpdateExample() {
    const randomWidth = useSharedValue(10);
    const randomHeight = useSharedValue(10);
  
    const config = {
      duration: 500,
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    };
  
    const style = useAnimatedStyle(() => {
      return {
        width: withTiming(randomWidth.value, config),
        height: withTiming(randomWidth.value, config),
      };
    });
  
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, style]} />
        <Button
          title="Odpalamy"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
            randomHeight.value = Math.random() * 350;
          }}
        />
        <Text>Tak, chciałem dodać animacje rzucania kostkami, ale nie do końca wyszło, ok?</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 100,
      height: 80,
      backgroundColor: 'black',
      margin: 30,
    },
  });
  