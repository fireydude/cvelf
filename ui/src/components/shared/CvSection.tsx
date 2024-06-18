interface IStyledSection {
  children: any;
  style?: React.CSSProperties;
}

export const CvSection: React.FC<IStyledSection> = (props) => {
  const { children, style } = props;
  return (<section style={{
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