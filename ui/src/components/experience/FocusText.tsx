import { useEffect, useRef } from "react";

interface IFocusText {
  val?: string;
  placeholder: string;
  hasFocus: boolean;
  onChange: (val: string) => void;
  onBlur: () => void;
}

export const FocusText: React.FC<IFocusText> = (props) => {
  const { val, placeholder, hasFocus, onChange, onBlur } = props;
  const ref = useRef(null);
  useEffect(() => {
    if (hasFocus && ref.current) {
      (ref.current as any).focus();
    }
  }, [hasFocus]);
  return (<>
    {!hasFocus && <span>{val ?? placeholder}</span>}
    {hasFocus &&
      <input ref={ref} type='text' value={val} style={{ width: 300 }} onChange={(e) => onChange(e.currentTarget.value)} onBlur={onBlur} />
    }
  </>
  );
};