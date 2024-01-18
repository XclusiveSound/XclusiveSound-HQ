import { useDispatchState } from '@/src/core/hooks';
import { setCurrentLanguage } from '@/src/core/store/features';

export const useViewSlices = () => {
 const dispatch = useDispatchState();

 const actionToggleLanguage = (currentLanguage: string) => {
  dispatch(setCurrentLanguage(currentLanguage));
 };

 return {
  actionToggleLanguage,
 };
};
