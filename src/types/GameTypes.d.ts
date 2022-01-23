interface CardItemState {
  isMatched: boolean;
  isShown: boolean;
  value: string;
}

interface MemoryState {
  characters: Array<CardItemState>;
  stepsCount: number;
  matches: number;
  lastSelectedIndex?: number;
}

type Action<T> = { type: keyof T | 'reset', value: any };

interface CardViewProps extends CardItemState {
  index: number;
  onPress?: (index: number) => void;
}

