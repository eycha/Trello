import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";
import React from "react";

const food = ["pizza", "mango", "kimchi", "kimbab"]
const front = ["pizza"]
const back = ["kimchi", "kimbab"]
const finalPart = [...front, "감", ...back]
console.log(finalPart)

 
function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name },
      } = event
      
      setToDos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
        const newToDos = {text, id, category: name as any};
        return [...oldToDos.slice(0, targetIndex),
          newToDos,
        ...oldToDos.slice(targetIndex + 1),
        ];
      });
 };
  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
      {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
      {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
    </li>
  );
}

export default ToDo;