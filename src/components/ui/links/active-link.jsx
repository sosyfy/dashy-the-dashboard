
import { useRouter } from 'next/router';
import cn from 'classnames';
import AnchorLink from './anchor-link';


const ActiveLink = ({ href, className, activeClassName = 'active', ...props }) => {
  const { pathname } = useRouter();
  const _href = typeof href === 'object' ? href.pathname : href;
  return (
    <AnchorLink
      href={href}
      className={cn(className, {
        [activeClassName]: pathname === _href,
      })}
      {...props}
    />
  );
};

export default ActiveLink;
