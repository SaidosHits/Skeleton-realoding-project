import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Cardskeleton = () => {
  return (
    <div className='card-skeleton'>
        <div className='left-col'>
            <Skeleton circle width={40} height={40} />
        </div>
        <div className='right-col'>
            <Skeleton count={4} style={{marginBottom: "10px"}}/>
        </div>
    </div>
  )
}

export default Cardskeleton