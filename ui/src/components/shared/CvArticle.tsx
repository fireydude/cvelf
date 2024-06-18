interface ICvArticle {
  children: any;
  style?: React.CSSProperties;
}

export const CvArticle: React.FC<ICvArticle> = (props) => {
  const { children, style } = props;
  return (
    <article style={{ ...style, marginBottom: 30 }}>
      {children}
      <hr />
    </article>);
};