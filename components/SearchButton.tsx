import Image from 'next/image'
import React from 'react'

const SearchButton = ({ otherClasses }: {otherClasses: string}) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src='/magnifying-glass.svg'
            alt='search-icon'
            width={40}
            height={40}
            className='object-contain'
        ></Image>
    </button>
  )
}

export default SearchButton