export const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return <a href={href} {...props} />;
  }

  return <a target="__blank" rel="noopener noreferrer" {...props} />;
};
