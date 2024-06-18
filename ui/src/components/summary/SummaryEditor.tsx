import { useState } from "react";
import React from "react";
import { AddItem } from "../shared/AddItem";
import { Summary, SummaryItem } from "../../model/Summary";

interface ISummaryEditor {
  summary: Summary;
  updateSummaryText: (val: string) => void;
  updateItem: (item: SummaryItem, val: string) => void;
  deleteItem: (name: string) => void;
  addItem: (name: string) => void;
}

export const SummaryEditor: React.FC<ISummaryEditor> = (props) => {
  const { summary, updateSummaryText, updateItem, deleteItem, addItem } = props;

  const [updateText, setUpdateText] = useState<boolean>(false);

  return (
    <article>
      <h2>Summary</h2>
      <dl>
        {summary.items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <dt>
                {item.name}
              </dt>
              <dd>
                <input type='text' value={item.value} style={{ width: 300 }}
                  onChange={(e) => updateItem(item, e.currentTarget.value)}
                />
               <button onClick={() => deleteItem(item.name)}>Delete</button>
              </dd>
            </React.Fragment>
          );
        })}
      </dl>
      <AddItem addText="Add Summary Row" add={addItem} />
      <br />
      {!updateText &&
        <div onClick={() => setUpdateText(true)} style={{ fontSize: 20, margin: 30 }}>
      {summary.summary}
        </div>
      }
      {updateText &&
        <>
          <textarea rows={3} cols={100} value={summary.summary}
            onChange={(e) => updateSummaryText(e.currentTarget.value)}
            onBlur={() => setUpdateText(false)}
          />
        </>}
      <hr />
    </article>
  );
};