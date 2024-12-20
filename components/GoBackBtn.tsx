import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function GoBackBtn() {
  return (
    <div className='m-8 w-fit'>
      <Link href="/">
        <ArrowLeft className=" h-5 w-5" />
      </Link>
    </div>
  )
}

export default GoBackBtn