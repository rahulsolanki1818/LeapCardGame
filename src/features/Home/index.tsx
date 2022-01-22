import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface HomeProps { }

const Home: React.FC<HomeProps> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { Home };
