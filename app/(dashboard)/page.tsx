import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }
  return (
    <div className='h-screen flex justify-center items-center'>
      This is The Dashboard.
    </div>
  )
}

export default page
