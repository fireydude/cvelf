import { useEffect, useRef } from "react";

interface IFocusText {
  val?: string;
  placeholder: string;
  hasFocus: boolean;
  onChange: (val: string) => void;
  onBlur: () => void;
  textArea?: boolean;
  focusWidth?: number;
}

export const FocusText: React.FC<IFocusText> = (props) => {
  const { val, placeholder, hasFocus, onChange, onBlur, textArea, focusWidth } = props;
  const ref = useRef(null);
  useEffect(() => {
    if (hasFocus && ref.current) {
      (ref.current as any).focus();
    }
  }, [hasFocus]);
  return (<>
    {!hasFocus &&
      <div style={{
        border: 'solid 1px rgba(100, 100, 100, 0.2)',
        borderRadius: 5,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block',
        cursor: 'pointer',
      }}>
        {val ?? placeholder}
      </div>}
    {hasFocus && !textArea &&
      <input ref={ref} type='text' value={val} style={{ width: focusWidth ?? 300 }} onChange={(e) => onChange(e.currentTarget.value)} onBlur={onBlur} />
    }
    {hasFocus && textArea &&
      <textarea ref={ref} rows={3} cols={100} value={val}
        onChange={(e) => onChange(e.currentTarget.value)}
        onBlur={onBlur}
      />
    }
  </>
  );
};