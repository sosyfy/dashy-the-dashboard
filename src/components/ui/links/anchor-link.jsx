
import Link from 'next/link';
import NextLink from 'next/link';

const AnchorLink = ({ href, ...props }) => {
  return (
    <NextLink href={href} {...props} /> 
  );
};

export default AnchorLink;
