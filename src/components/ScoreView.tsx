import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Texture } from '../assets/images/indext';

interface ScoreViewProps {
  fieldName: string;
  value: string | number;
}

const ScoreView: React.FC<ScoreViewProps> = props => {
  return (
    <ImageBackground source={Texture} style={styles.container} blurRadius={50}>
      <Text style={styles.fieldName}>{props.fieldName}: </Text>
      <Text style={styles.fieldName}>{props.value}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    marginHorizontal: 2,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    borderColor: 'white',
  },
  fieldName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export { ScoreView };
