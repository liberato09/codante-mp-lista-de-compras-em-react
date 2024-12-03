import todo from "../assets/todo.svg";
import trash from "../assets/trash.svg";
import done from "../assets/done.svg";
import type { Item } from "../App.tsx";

type ItemProps = {
  item: Item;
  handleClick: (id: string) => void;
};

export function Item({ item, handleClick }: ItemProps) {
  return (
    <>
      <article className="flex w-full gap-4">
        <button onClick={() => handleClick(item.id)}>
          <img src={item.completed ? done : todo} alt="#" />
        </button>
        <div className="flex-1">
          <p
            className={`${item.completed ? "text-slate-400 line-through" : ""}`}
          >
            {item.name}
          </p>
          <p
            className={`text-sm text-slate-400 ${
              item.completed && "line-through"
            }`}
          >
            {item.quantity}
          </p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </>
  );
}
