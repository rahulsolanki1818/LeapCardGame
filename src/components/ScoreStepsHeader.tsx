import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScoreView } from './ScoreView';

interface ScoreStepsHeaderProps {
  matches: number;
  steps: number;
}

const ScoreStepsHeader: React.FC<ScoreStepsHeaderProps> = props => {
  return (
    <View style={styles.scoreStepsView}>
      <ScoreView fieldName='Matches' value={props.matches} />
      <ScoreView fieldName='Steps' value={props.steps} />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreStepsView: {
    flexDirection: 'row',
    margin: 10,
  },
});

export { ScoreStepsHeader };
