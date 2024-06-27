import { useState } from "react";
import React from "react";
import { AddItem } from "../shared/AddItem";
import { Summary, SummaryItem } from "../../model/Summary";
import { FocusText } from "../shared/FocusText";
import { CvSection } from "../shared/CvSection";
import { CvArticle } from "../shared/CvArticle";

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

  const colStyle = { display: 'inline-block', padding: 10 };
  return (
    <CvArticle>
      <h2>Summary</h2>
      <CvSection>
        <div>
          {summary.items.map((item, index) => {
            return (
              <div key={index} draggable style={{ cursor: 'move' }}>
                <div style={{ ...colStyle, width: 300, textAlign: 'right', fontWeight: 'bold' }}>
                  {item.name}
                </div>
                <div style={colStyle}>
                  <input type='text' value={item.value} style={{ width: 300 }}
                    onChange={(e) => updateItem(item, e.currentTarget.value)}
                  />
                </div>
                <div style={colStyle}>
                  <button onClick={() => deleteItem(item.name)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
        <AddItem addText="Add Summary Row" add={addItem} />
        <br />
        <div onClick={() => setUpdateText(true)} style={{ fontSize: 20, margin: 30 }}>
          <FocusText val={summary.summary} textArea hasFocus={updateText}
            onChange={(val) => updateSummaryText(val)}
            onBlur={() => setUpdateText(false)} placeholder="summary description" />
        </div>
      </CvSection>
    </CvArticle>
  );
};