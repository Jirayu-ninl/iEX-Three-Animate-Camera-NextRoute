/* eslint-disable indent */
'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import State from '../store'
import Scene from './scene'

function Layout({ children }: { children: React.ReactNode }) {
  const _setHomeCamera = State((state) => state.setHomeCamera)
  const pathName = usePathname().slice(1)

  useEffect(() => {
    _setHomeCamera(
      pathName === ''
        ? {
            position: [-1.2, 1.5, 3],
            rotation: [0, 0, 0],
          }
        : pathName === '01'
        ? {
            position: [-3.2, 1.7, 1.5],
            rotation: [0, -Math.PI / 2, 0],
          }
        : pathName === '02'
        ? {
            position: [-5, 5, 8],
            rotation: [-Math.PI / 6, 0, 0],
          }
        : {
            position: [4, 8, -2.2],
            rotation: [-Math.PI / 2, 0, 0],
          }
    )
  }, [_setHomeCamera, pathName])

  return (
    <div className='relative h-screen w-screen bg-white dark:bg-[#101010]'>
      <div className='absolute h-full w-full'>
        <Scene />
      </div>
      <div className='pointer-events-none absolute h-full w-full'>
        {children}
      </div>
    </div>
  )
}

export default Layout
