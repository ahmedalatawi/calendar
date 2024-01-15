import React, { ReactNode } from 'react'

interface Props {
  classNamePrefix: string
  children: ReactNode
}

function CellRows({ classNamePrefix, children }: Props) {
  const className = `${classNamePrefix}-cell-row`

  return <div className={className}>{children}</div>
}

export default CellRows
