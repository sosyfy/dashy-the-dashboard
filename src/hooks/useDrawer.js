import { atom, useAtom } from 'jotai';

const drawerAtom = atom({ isOpen: false});

export function useDrawer() {
  const [state, setState] = useAtom(drawerAtom);
  const openDrawer = () => {
    setState({ ...state, isOpen: true});
  };
  const closeDrawer = () => setState({ ...state, isOpen: false });
  return {
    ...state,
    openDrawer,
    closeDrawer,
  };
}
