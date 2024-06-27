interface IStyledSection {
  dragId?: string;
  children: any;
  style?: React.CSSProperties;
}

export const CvSection: React.FC<IStyledSection> = (props) => {
  const { dragId, children, style } = props;
  return (<section data-id={dragId} style={{
    ...style,
    border: 'solid 1px',
    borderRadius: 5,
    backgroundColor: '#eee',
    margin: 'auto',
    width: '1000px',
    padding: 20,
    marginTop: 20,
  }}>
    {children}
  </section>);
};