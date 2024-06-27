import React from "react";

interface I {
  items: string[];
  remove: (item: string) => void;
}

export const SkillList: React.FC<I> = ({ items, remove }) => {
  const [dragIndex, setDragIndex] = React.useState<number>();

  const handleItemDragStart = (e: React.DragEvent<HTMLParagraphElement>) => {
    setDragIndex(Number((e.target as any).dataset.id));
  };

  const handleItemDragEnd: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setDragIndex(undefined);
  };

  function handleListDragOver(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    const id = Number((e.target as any).dataset.id);
    if (id === undefined || isNaN(id)|| dragIndex === undefined || id === undefined || dragIndex === id) {
      return;
    }
    const to = id;
    const from = dragIndex;
    items.splice(to, 0, items.splice(from, 1)[0]);
    setDragIndex(to);
  }

  return (
    <div onDragOver={handleListDragOver}>
      {items.map((skill, index) => {
        return (
          <p key={index} draggable data-id={index} onDragStart={handleItemDragStart} onDragEnd={handleItemDragEnd}
            style={{ color: index === dragIndex ? '#555' : undefined, cursor: items.length > 1 ? 'move' : undefined }}>
            {skill}
            <button onClick={() => remove(skill)}>Delete</button>
          </p>);
      })}
    </div>);
};