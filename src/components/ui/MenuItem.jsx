import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { useMeasure } from 'react-use';

import { FaUserTimes } from 'react-icons/fa';
import ActiveLink from './links/active-link';
import { useDrawer } from './../../hooks/useDrawer';


export function MenuItem({ name, icon, href, dropdownItems }) {
  const router = useRouter();
  const {
    query: { ...restQuery },
    pathname,
  } = router;
  
  const [isOpen, setIsOpen] = useState(false);
  const [ref, { height }] = useMeasure();
  const isChildrenActive =
    dropdownItems && dropdownItems.some((item) => item.href === pathname);
  useEffect(() => {
    if (isChildrenActive) {
      setIsOpen(true);
    }
  }, []);
  const { closeDrawer } = useDrawer();
  return (
    <div className="mb-2 min-h-[48px] list-none last:mb-0"   onClick={closeDrawer}>
      {dropdownItems?.length ? (
        <>
          <div
            className={cn(
              'relative flex h-12 cursor-pointer items-center justify-between whitespace-nowrap  rounded-lg px-4 text-sm transition-all',
              isChildrenActive
                ? 'text-white'
                : 'text-gray-500 hover:text-brand dark:hover:text-white'
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="z-[1] flex items-center ltr:mr-3 rtl:ml-3">
              <span className="ltr:mr-3 rtl:ml-3">{icon}</span>
              {name}
            </span>
            <span
              className={`z-[1] transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              <FaUserTimes />
            </span>

            {isChildrenActive && (
              <motion.span
                className="absolute bottom-0 left-0 right-0 w-full h-full rounded-lg bg-brand shadow-large"
                layoutId="menu-item-active-indicator"
              />
            )}
          </div>

          <div
            style={{
              height: isOpen ? height : 0,
            }}
            className="ease-[cubic-bezier(0.33, 1, 0.68, 1)] overflow-hidden transition-all duration-[350ms]"
          >
            <ul ref={ref}>
              {dropdownItems.map((item, index) => (
                <li className="first:pt-2" key={index}>
                  <ActiveLink
                    href={{
                      pathname: href,
                      query: restQuery,
                    }}
                    className="flex items-center p-3 text-sm text-gray-500 transition-all rounded-lg before:h-1 before:w-1 before:rounded-full before:bg-gray-500 hover:text-brand ltr:pl-6 before:ltr:mr-5 rtl:pr-6 before:rtl:ml-5 dark:hover:text-white"
                    activeClassName="!text-brand dark:!text-white dark:before:!bg-white before:!bg-brand before:!w-2 before:!h-2 before:-ml-0.5 before:ltr:!mr-[18px] before:rtl:!ml-[18px] !font-medium"
                  >
                    {item.name}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <ActiveLink
          href={{
            pathname: href,
            query: restQuery,
          }}
          className="relative flex items-center h-12 px-4 text-sm text-gray-500 transition-all rounded-lg whitespace-nowrap hover:text-brand dark:hover:text-white"
          activeClassName="!text-white"
        >
          <span className="relative z-[1] mr-3">{icon}</span>
          <span className="relative z-[1]"> {name}</span>

          {href === pathname && (
            <motion.span
              className="absolute bottom-0 left-0 right-0 w-full h-full rounded-lg bg-brand shadow-large"
              layoutId="menu-item-active-indicator"
            />
          )}
        </ActiveLink>
      )}
    </div>
  );
}
