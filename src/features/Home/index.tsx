import React, { Reducer, useCallback, useEffect, useReducer } from 'react';
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity, ListRenderItem, Image, StatusBar, ImageBackground } from 'react-native';
import { Texture } from '../../assets/images/indext';
import { CardView, ScoreStepsHeader, ScoreView } from '../../components';
import { getRandomAlphabets } from '../../utils';

const MemoryState: MemoryState = {
  characters: [],
  stepsCount: 0,
  matches: 0
}

const memoryReducer: Reducer<MemoryState, Action<MemoryState>> = (state, action) => {
  if (action.type === 'reset') {
    return { ...state, ...action.value };
  }
  return { ...state, [action.type]: action.value }
}

const Home: React.FC = () => {
  const [state, dispatch] = useReducer(memoryReducer, MemoryState);

  useEffect(() => onReset(), []);

  const onReset = useCallback(() => {
    const objs = getRandomAlphabets();
    dispatch({
      type: 'reset',
      value: {
        ...MemoryState,
        characters: Object.keys(objs).map(key => ({
          value: objs[key],
          isMatched: false,
          isShown: false,
        }))
      }
    });
    dispatch({
      type: 'lastSelectedIndex',
      value: null,
    });
  }, [])

  const onSelect = (currenIndex: number) => {
    let { characters, lastSelectedIndex: firstIndex } = state;

    if (currenIndex === firstIndex) {
      return;
    }

    characters = characters.map((char, i) => {
      char.isShown = (i === currenIndex) || (i === firstIndex);
      return char;
    });

    if (firstIndex === undefined || firstIndex === null) {
      dispatch({
        type: 'reset',
        value: { characters, lastSelectedIndex: currenIndex }
      });
      return;
    }

    dispatch({
      type: 'characters',
      value: characters,
    });

    setTimeout(() => {
      if (firstIndex === null || firstIndex === undefined) {
        return;
      }

      const first = characters[firstIndex];
      const second = characters[currenIndex];
      let { matches } = state;

      if (first?.value === second?.value) {
        first.isMatched = true;
        second.isMatched = true;
        matches++;
      } else {
        first.isShown = false;
        second.isShown = false;
      }

      characters[firstIndex] = first;
      characters[currenIndex] = second;

      dispatch({
        type: 'reset',
        value: {
          matches,
          lastSelectedIndex: null,
          stepsCount: state.stepsCount + 1,
        },
      })
    }, 700);
  };

  const renderItem: ListRenderItem<CardItemState> = (props) => (
    <CardView
      index={props.index}
      isMatched={props.item.isMatched}
      isShown={props.item.isShown}
      value={props.item.value}
      onPress={onSelect}
    />
  );

  const footerButton = () => (
    <TouchableOpacity style={styles.reset} onPress={onReset}>
      <Text style={styles.resetText}>Restart</Text>
    </TouchableOpacity>
  )

  return (
    <ImageBackground source={Texture} style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />

      <SafeAreaView style={styles.container}>
        <FlatList<CardItemState>
          data={state.characters}
          keyExtractor={(item, index) => index.toString()}
          numColumns={4}
          scrollEnabled={false}
          renderItem={renderItem}
          ListHeaderComponent={
            <ScoreStepsHeader matches={state.matches} steps={state.stepsCount} />
          }
          ListFooterComponent={footerButton}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreStepsView: {
    flexDirection: 'row',
    margin: 10,
  },
  reset: {
    flexGrow: 1,
    width: '50%',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderColor: 'white',
  },
  resetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export { Home };
