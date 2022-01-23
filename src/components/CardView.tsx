import React, { FC } from 'react';
import { Text, StyleSheet, Dimensions, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from "react-native-reanimated";

import { Gradient } from '../assets/images/indext';

const AnimatedBGImage = Animated.createAnimatedComponent(ImageBackground);
const DisplayHeight = Dimensions.get('screen').height;

const CardView: FC<CardViewProps> = props => {
  const { isMatched, value, isShown } = props;

  const rotateY = useDerivedValue(() => {
    return withTiming(isShown ? 180 : 0);
  }, [isShown]);

  const translateY = useDerivedValue(() => {
    return withTiming(isMatched ? -DisplayHeight : 0);
  }, [isMatched]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotateY.value}deg` }],
  }));

  const matchedAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return isMatched ? (
    <TouchableWithoutFeedback onPress={() => props.onPress?.(props.index)}>
      <AnimatedBGImage source={Gradient} style={[styles.container, matchedAnimatedStyle]} />
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback onPress={() => props.onPress?.(props.index)}>
      <AnimatedBGImage source={Gradient} style={[styles.container, animatedStyle]}>
        {isShown ? <Text style={styles.character}>{value}</Text> : null}
      </AnimatedBGImage>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    aspectRatio: 0.7,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: "#000",
    borderWidth: 0.5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  character: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
    transform: [{ rotateY: '180deg' }]
  }
});

export { CardView };
