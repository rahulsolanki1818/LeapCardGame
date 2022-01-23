interface CardItemState {
  isMatched: boolean;
  isShown: boolean;
  value: string;
}
interface CardViewProps extends CardItemState {
  index: number;
  onPress?: (index: number) => void;
}

