import React, { useRef, useState } from 'react'
import { BsGrid3X3GapFill } from 'react-icons/bs';
import cn from 'classnames';
import useClickAway from 'react-use/lib/useClickAway';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { MenuItem } from '../ui/MenuItem';
import AuthorCard from '../ui/AuthorCard';


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

export default function Sidebar({ className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => {
    setOpen(false);
  });

  const menuItems = [
    {
      name: 'Home',
      icon: <BsGrid3X3GapFill />,
      href: '/',
    },
    {
      name: 'Farm',
      icon: <BsGrid3X3GapFill />,
      href: '/',
    }]
 
  return (
    <aside
      ref={ref}
      className={cn(
        open ? 'border-0 shadow-expand  xl:w-72 2xl:w-80 '
          : 'w-24 border-dashed border-gray-200 border-r 2xl:w-28',
          'top-0 z-40 h-full hidden max-w-full border-dashed border-gray-200 bg-body left-0 border-r  dark:border-gray-700 dark:bg-dark xl:fixed',
        className
      )}
    >
      <div
        className={cn(
          'relative flex h-24 items-center  overflow-hidden px-6 py-4 2xl:px-8',
          open ? 'flex-start' : 'justify-center'
        )}
      >
        {!open ? (
          <div onClick={() => setOpen(!open)}>
            L 
          </div>
        ) : (
         <div>logo</div>
        )}

        {open && (
          <div
            className={cn(
              'absolute right-5 top-[38px] h-5 w-5 cursor-pointer text-gray-500 rtl:xl:right-[230px] rtl:2xl:right-[260px] 3xl:top-[34px] 3xl:h-6 3xl:w-6',
              !open && 'rotate-180'
            )}
            onClick={() => setOpen(!open)}
          >
           menu
          </div>
        )}

      </div>

      <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
        <div className="px-6 pb-5 2xl:px-8">
          {!open ? (
            <>
              <div className="mt-5 2xl:mt-8" onClick={() => setOpen(!open)}>
                {menuItems.map((item, index) => (
                  <MenuItem key={index} href="" icon={item.icon} />
                ))}
              </div>
              <div
                className="cursor-pointer mt-28"
                onClick={() => setOpen(!open)}
              >
                <AuthorCard />
              </div>
            </>
          ) : (
            <>
              <div className="mt-5 2xl:mt-8">
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    name={item.name}
                    href={item.href}
                    icon={item.icon}
                    dropdownItems={item.dropdownItems}
                  />
                ))}
              </div>
              <div className="mt-28 min-h-[80px] bottom-4 fixed">
                <AuthorCard
                  
                  name="Cameron Williamson"
                  role="admin"
                />
              </div>
            </>
          )}
        </div>
      </Scrollbar>
    </aside>
  );
}