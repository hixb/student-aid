'use client'

import React, { useState } from 'react'

import clsx from 'clsx'

import UserList from '~/components/UserList'

export default function Home() {
  const [timer, setTimer] = useState('')

  React.useEffect(() => {
    setInterval(() => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', weekday: 'long' }
      setTimer(new Date().toLocaleString('zh-CN', options))
    }, 1000)
  }, [])

  return (
    <main className={clsx('w-4/5 mx-auto mt-20')}>
      <div className={clsx('bg-[var(--my-box-bg)] py-10 rounded flex justify-around items-center shadow-[0_5px_35px_rgba(0,0,0,.07)] px-10')}>
        <div>
          活动名额：
          <span className={clsx('font-bold')}>
            200
          </span>
        </div>
        <div>
          已报名：
          <span className={clsx('font-bold')}>
            199
          </span>
        </div>
        <span>{timer}</span>
      </div>
      <div className={clsx('w-3/4 mx-auto mt-30')}>
        <div className={clsx('flex justify-around items-center border border-[var(--my-border-color)] h-50 rounded-t')}>
          <span className={clsx('flex items-center justify-center w-1/3 h-full ')}>姓名</span>
          <span
            className={clsx('flex items-center justify-center w-1/3 h-full border-x border-[var(--my-border-color)]')}
          >
            手机号码
          </span>
          <span className={clsx('flex items-center justify-center w-1/3 h-full')}>审核状态</span>
        </div>
        <UserList />
        <p className={clsx('my-10 text-[var(--my-special-danger)]')}>*注：活动最终解释权归
          闪创（山东）教育科技有限公司所有
        </p>
      </div>
    </main>
  )
}
