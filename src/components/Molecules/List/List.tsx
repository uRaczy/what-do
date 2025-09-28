import { TextLine } from "../../Atoms";

type Props = {
  list: string[];
};

export const List = ({ list }: Props) => {
  const todoList = list.map((element) => (
    <TextLine value={element} key={element} />
  ));
  return todoList;
};
