import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface CardViewProps {}

const CardView: React.FC<CardViewProps> = props => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CardView;
