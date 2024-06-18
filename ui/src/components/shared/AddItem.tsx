import React from "react";

interface I {
  addText?: string;
  add: (val: string) => void;
}

export const AddItem: React.FC<I> = ({ addText, add }) => {
  const [adding, setAdding] = React.useState<string>();
  return (<>
    {adding === undefined && <button onClick={() => setAdding('')}>{ addText ?? 'Add' }</button>}
    {adding !== undefined && <>
      <input value={adding} type='text' onChange={(e) => setAdding(e.currentTarget.value)} />
      <button onClick={() => {
        add(adding);
        setAdding(undefined);
      }}>
        Save
      </button>
      <button onClick={() => setAdding(undefined)}>Cancel</button>
    </>}
  </>);
};