import { useContext, useState } from "react";
import { CvContext } from "../../CvContext";
import React from "react";
import { AddItem } from "../shared/AddItem";

export const SummaryEditor: React.FC = () => {
  const [updateText, setUpdateText] = useState<boolean>(false);
  var cvContext = useContext(CvContext);

  return (
    <article>
      <h2>Summary</h2>
      <dl>
        {cvContext.data.summary.items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <dt>
                {item.name}
              </dt>
              <dd>
                <input type='text' value={item.value} style={{ width: 300 }}
                  onChange={(e) => cvContext.updateItem(item, e.currentTarget.value)}
                />
               <button onClick={() => cvContext.deleteItem(item.name)}>Delete</button>
              </dd>
            </React.Fragment>
          );
        })}
      </dl>
      <AddItem addText="Add Summary Row" add={cvContext.addItem} />
      <br />
      {!updateText &&
        <div onClick={() => setUpdateText(true)} style={{ fontSize: 20, margin: 30 }}>
      {cvContext.data.summary.summary}
        </div>
      }
      {updateText &&
        <>
          <textarea rows={3} cols={100} value={cvContext.data.summary.summary}
            onChange={(e) => cvContext.updateSummaryText(e.currentTarget.value)}
            onBlur={() => setUpdateText(false)}
          />
        </>}
      <hr />
    </article>
  );
};