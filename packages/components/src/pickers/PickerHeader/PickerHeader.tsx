import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function PickerHeader({ children }: Props) {
  return <div className={''}>{children}</div>
}

export default PickerHeader
