import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

library.add(faMagnifyingGlass);

export const Header = () => {
 return (
  <header>
   <div className='header-content'>
    <Link className='stamp-name' href={'/'}>
     XclusiveSound
    </Link>
    <div className='seeker'>
     <form>
      <input type='text' id='searchInput' placeholder='Buscar...' />
      <button type='submit'>
       <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
     </form>
    </div>
   </div>
  </header>
 );
};
