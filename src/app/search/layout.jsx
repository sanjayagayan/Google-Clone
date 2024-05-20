import SearchHeader from '@/components/SearchHeader'
import React from 'react'

function layout({children}) {
  return (
    <div>
        <SearchHeader/>
        {children}
    </div>
  )
}

export default layout