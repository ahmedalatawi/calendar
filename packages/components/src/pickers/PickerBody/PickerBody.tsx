import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

function PickerBody({ children }: Props) {
  return <div className={''}>{children}</div>
}

export default PickerBody
