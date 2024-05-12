'use client'

import React from 'react'
import Image from 'next/image'

import clsx from 'clsx'

export default function Header() {
  return (
    <header className={clsx('h-80 w-full px-30 flex items-center justify-between shadow-[0_0_15px_rgba(0,0,0,.07)]')}>
      <div className={clsx('flex items-center')}>
        <Image
          loading="eager"
          src="/static/site/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
        <h1 className={clsx('text-2xl ml-10')}>帆启教育-助学金名额管理系统</h1>
      </div>

      <div />
    </header>
  )
}
