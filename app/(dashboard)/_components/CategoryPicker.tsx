"use client"
import { TransactionType } from '@/lib/types'
import React from 'react'

interface Props {
    type: TransactionType;
}


function CategoryPicker({type}: Props) {
  return (
    <div>
      Category Picker
    </div>
  )
}

export default CategoryPicker
