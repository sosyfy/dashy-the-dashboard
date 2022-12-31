import cn from 'classnames';
import { useDrawer } from '../../hooks/useDrawer';
import { MenuItem } from '../ui/MenuItem';
import AuthorCard from '../ui/AuthorCard';
import { menuItems } from './MenuItems';
import useClickAway from 'react-use/lib/useClickAway';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useRef } from 'react';
function Scrollbar({
    options,
    style,
    className,
    autoHide = 'scroll',
    ...props
  }) {
    return (
      <OverlayScrollbarsComponent
        options={{
          className: cn('os-theme-thin', className),
          scrollbars: {
            autoHide: autoHide,
          },
          ...options,
        }}
        style={style}
        {...props}
      />
    );
  }

export default function MobileMenu({ className }) {
  const { isOpen, closeDrawer } = useDrawer();
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeDrawer();
  });
  return (
    <aside
      ref={ref}
      className={cn(
        !isOpen && "left-[-100%]",
        'top-0 z-40 h-full fixed  transition-all duration-700 ease-in-out max-w-full border-dashed border-gray-200 bg-body left-0 border-r  dark:border-gray-700 dark:bg-dark w-72 xl:hidden',
        className
      )}
    >
      <div className="relative flex items-center justify-between h-24 px-6 py-4 overflow-hidden 2xl:px-8">
        Logo 
        <div className="xl:hidden">
          <button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
          close
          </button>
        </div>
      </div>

      <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
        <div className="px-6 pb-5 2xl:px-8">
          <AuthorCard
            name="Cameron Williamson"
            role="admin"
          />

          <div className="mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                name={item.name}
                href={item.href}
                icon={item.icon}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </div>
        </div>
      </Scrollbar>
    </aside>
  );
}
