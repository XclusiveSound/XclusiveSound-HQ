import Link from 'next/link';
import Image from 'next/image';
import { useSelectorState, useViewSlices } from '@/src/core/hooks';
import { languageSwitcherText } from '@/src/core/utils/local/navigation';
import SpanishFlag from '@/public/images/flags/spanish-flag.jpg';
import UnionJack from '@/public/images/flags/union-jack.jpg';

export const NavigationSection = () => {
 const { currentLanguage } = useSelectorState((state) => state.view);
 const { actionToggleLanguage } = useViewSlices();
 const { titleES, titleEN } = languageSwitcherText;
 return (
  <div className='navigation-section'>
   <div className='content'>
    <div className='language-switcher'>
     <h3>{currentLanguage === 'es' ? titleES : titleEN}</h3>
     <Link href={'/es'} onClick={() => actionToggleLanguage('es')}>
      <Image src={SpanishFlag} width={55} height={35} alt='banera de españa' />
     </Link>
     <Link href={'/en'} onClick={() => actionToggleLanguage('en')}>
      <Image src={UnionJack} width={55} height={35} alt='banera de españa' />
     </Link>
    </div>
   </div>
  </div>
 );
};
