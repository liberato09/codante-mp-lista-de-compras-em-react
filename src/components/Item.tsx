import todo from "../assets/todo.svg";
import trash from "../assets/trash.svg";
import type { Item } from "../App.tsx";

type ItemProps = {
  item: Item;
};

export function Item({ item }: ItemProps) {
  return (
    <>
      <article className="flex w-full gap-4">
        <img src={todo} alt="#" />
        <div className="flex-1">
          <p>{item.name}</p>
          <p className="text-sm text-slate-400">{item.quantity}</p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </>
  );
}
