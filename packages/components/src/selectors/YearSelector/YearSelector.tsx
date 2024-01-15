import React from 'react'

interface Props {
  name: string
}

function YearSelector({ name }: Props) {
  return <div>{name}</div>
}

export default YearSelector
