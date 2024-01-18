import Link from 'next/link';
import Image from 'next/image';
//*> State hooks
import { useSelectorState, useViewSlices } from '@/src/core/hooks';
//*> Language toggle helpers
import { languageToggleHelpers } from '@/src/core/helpers';
//*> Page text
import { languageSwitcherTextES, languageSwitcherTextEN, navigationTextES, navigationTextEN } from '@/src/core/utils';
//*> Images
import SpanishFlag from '@/public/images/flags/spanish-flag.jpg';
import UnionJack from '@/public/images/flags/union-jack.jpg';
import Logo from '@/public/images/branding/logo.png';

export const NavigationSection = () => {
 const { currentLanguage } = useSelectorState((state) => state.view);
 const { actionToggleLanguage } = useViewSlices();

 //*> Language Switcher Texts (Spanish)
 const { titleES, spanishFlagTextForTheAltES, unitedKingdomFlagTextForAltES, logoTextForAltES } = languageSwitcherTextES;
 //*> Language Switcher Texts (English)
 const { titleEN, spanishFlagTextForTheAltEN, unitedKingdomFlagTextForAltEN, logoTextForAltEN } = languageSwitcherTextEN;
 //*> Navigation Texts (Spanish)
 const { homeES, aboutUsES, freeTracksES, tracksForSaleES, subscriptionsES, academyES, contactES, privacyPolicyES } =
  navigationTextES;
 //*> Navigation Texts (English)
 const { homeEN, aboutUsEN, freeTracksEN, tracksForSaleEN, subscriptionsEN, academyEN, contactEN, privacyPolicyEN } =
  navigationTextEN;

 return (
  <div className='navigation-section'>
   <div className='content'>
    <div className='language-switcher'>
     <h3>{currentLanguage === 'es' ? titleES : titleEN}</h3>
     <Link href={'/es'} onClick={() => actionToggleLanguage('es')}>
      <Image
       src={SpanishFlag}
       width={55}
       height={35}
       alt={languageToggleHelpers(currentLanguage, spanishFlagTextForTheAltES, spanishFlagTextForTheAltEN)}
      />
     </Link>
     <Link href={'/en'} onClick={() => actionToggleLanguage('en')}>
      <Image
       src={UnionJack}
       width={55}
       height={35}
       alt={languageToggleHelpers(currentLanguage, unitedKingdomFlagTextForAltES, unitedKingdomFlagTextForAltEN)}
      />
     </Link>
    </div>

    <div className='logo'>
     <Image
      src={Logo}
      width={500}
      height={250}
      alt={languageToggleHelpers(currentLanguage, logoTextForAltES, logoTextForAltEN)}
     />
    </div>

    <div className='navigation'>
     <ul>
      <li>
       <Link href={`/${currentLanguage}#home`}>{languageToggleHelpers(currentLanguage, homeES, homeEN)}</Link>
      </li>
      <li>
       <Link href={`/${currentLanguage}/aboutUs`}>{languageToggleHelpers(currentLanguage, aboutUsES, aboutUsEN)}</Link>
      </li>
      <li>
       <Link href={`/${currentLanguage}#freeTracks`}>{languageToggleHelpers(currentLanguage, freeTracksES, freeTracksEN)}</Link>
      </li>
      <li>
       <Link href={`/${currentLanguage}#tracksForSale`}>
        {languageToggleHelpers(currentLanguage, tracksForSaleES, tracksForSaleEN)}
       </Link>
      </li>
      <li>
       <Link href={`/${currentLanguage}#subscribers`}>
        {languageToggleHelpers(currentLanguage, subscriptionsES, subscriptionsEN)}
       </Link>
      </li>
      <li>
       <Link href={`/${currentLanguage}#futureAcademy`}>{languageToggleHelpers(currentLanguage, academyES, academyEN)}</Link>
      </li>
      <li>
       <Link href={`/${currentLanguage}#contact`}>{languageToggleHelpers(currentLanguage, contactES, contactEN)}</Link>
      </li>
      <li>
       <Link href={`/${currentLanguage}/privacyPolicies`}>
        {languageToggleHelpers(currentLanguage, privacyPolicyES, privacyPolicyEN)}
       </Link>
      </li>
     </ul>
    </div>
   </div>
  </div>
 );
};
