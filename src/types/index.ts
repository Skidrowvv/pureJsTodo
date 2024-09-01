export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface IInitialState {
  todos: ITodo[];
}

export interface IProps {
  children?: React.ReactNode;
  theme: string;
}

export type TThemeContext = [string, any];
