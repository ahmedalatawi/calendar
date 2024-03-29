import React, { SVGProps } from 'react'

const ChevronRightDoubleIcon = ({ className = 'rc-icon', onClick }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      onClick={onClick}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
    </svg>
  )
}

export default ChevronRightDoubleIcon
