'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import clsx from 'clsx'

import UserList from '~/components/UserList'

export default function Home() {
  const [inquireState, setInquireState] = React.useState(false)

  const [name, setName] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const [time, setTime] = useState('')

  React.useEffect(() => {
    setInterval(() => {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', weekday: 'long' }
      setTime(new Date().toLocaleString('zh-CN', options))
    }, 1000)

    fetch('/api/get-trainee')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  function inquireResult() {
    if (!validate(name, /^(?:[\u4E00-\u9FA5·]{2,16})$/, '请输入姓名', '姓名格式不正确'))
      return

    if (!validate(phone, /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, '请输入手机号码', '手机号码格式不正确'))
      return

    setInquireState(true)
  }

  function validate(input: string, regex: RegExp, emptyMessage: string, invalidMessage: string) {
    if (!input) {
      alert(emptyMessage)
      return false
    }

    if (!regex.test(input)) {
      alert(invalidMessage)
      return false
    }

    return true
  }

  function CurrentTime() {
    const now = new Date()
    return `${now.getHours()}时${now.getMinutes()}分`
  }

  return (
    <main className={clsx('w-11/12 mx-auto mt-20 flex justify-between pb-120 max-md:flex-col')}>
      <div className={clsx('shadow-[0_10px_50px_rgba(0,0,0,.1)] w-3/5 p-30 rounded-2xl bg-[var(--my-box-bg)] max-md:w-full')}>
        <h3 className={clsx('text-xl !font-bold')}>实时动态</h3>
        <div className={clsx('mt-20 flex items-center justify-between')}>
          <div className={clsx('px-15 py-10 shadow-[0_10px_50px_rgba(0,0,0,.1)] w-max rounded-2xl')}>
            活动名额：200
          </div>
          <div className={clsx('px-15 py-10 shadow-[0_10px_50px_rgba(0,0,0,.1)] w-max rounded-2xl ml-20')}>
            已报名：196
          </div>
          <div className={clsx('px-15 py-10 shadow-[0_10px_50px_rgba(0,0,0,.1)] w-max rounded-2xl ml-20')}>
            {time}
          </div>
        </div>
        <div className={clsx('flex justify-around items-center border border-[var(--my-border-color)] h-50 rounded-t mt-20 bg-[var(--my-box-bg)]')}>
          <span className={clsx('inline-block text-center h-full truncate px-10 w-1/3')} style={{ lineHeight: '50px' }}>姓名</span>
          <span
            className={clsx('inline-block text-center h-full truncate px-10 w-1/3 border-x border-[var(--my-border-color)]')}
            style={{ lineHeight: '50px' }}
          >
            手机号码
          </span>
          <span className={clsx('inline-block text-center h-full truncate px-10 w-1/3')} style={{ lineHeight: '50px' }}>审核状态</span>
        </div>
        <UserList />
      </div>
      <div className={clsx('w-[38%] max-md:w-full max-md:mt-30')}>
        <div className={clsx('shadow-[0_10px_50px_rgba(0,0,0,.1)] p-30 rounded-2xl h-max bg-[var(--my-box-bg)]')}>
          <h3 className={clsx('text-xl !font-bold')}>名额查询</h3>
          <div className={clsx('mt-20')}>
            <div className={clsx('flex items-center')}>
              <span className={clsx('min-w-max')}>姓名：</span>
              <input
                type="text"
                className={clsx('bg-transparent w-full h-40 border border-[var(--my-border-color)] rounded-xl px-10')}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className={clsx('flex items-center mt-10')}>
              <span className={clsx('min-w-max')}>手机：</span>
              <input
                type="text"
                className={clsx('bg-transparent w-full h-40 border border-[var(--my-border-color)] rounded-xl px-10')}
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <button className={clsx('w-full h-50 bg-[var(--my-special-color)] text-white rounded-xl mt-15')} onClick={inquireResult}>
              {inquireState ? '重新查询' : '查询'}
            </button>
          </div>
        </div>
        <div className={clsx('shadow-[0_10px_50px_rgba(0,0,0,.1)] p-30 rounded-2xl h-max mt-30 bg-[var(--my-box-bg)] relative')}>
          <h3 className={clsx('text-xl !font-bold')}>查询结果</h3>
          {
            inquireState
              ? (
                <>
                  <div className={clsx('mt-20')}>
                    <span className={clsx('font-bold')}>编号：</span>QDKEV{(new Date()).getFullYear()}_51216222
                  </div>
                  <div className={clsx('mt-20')}>
                    <span className={clsx('font-bold')}>状态：</span>
                    <ul className={clsx('mt-5')}>
                      <li>1. {CurrentTime()}21秒，系统预审核通过</li>
                      <li>2. {CurrentTime()}34秒，教学部门通过</li>
                      <li>3. {CurrentTime()}38秒，学管部门通过</li>
                      <li>4. {CurrentTime()}57秒，获得助学金名额</li>
                    </ul>
                  </div>
                  <Image
                    loading="eager"
                    src="/static/site/pass.png"
                    alt="logo"
                    width={185}
                    height={138}
                    className={clsx('absolute bottom-20 right-20')}
                  />
                </>
                )
              : (
                <div
                  className={clsx('mt-20 min-h-100 w-full flex items-center justify-center border border-[var(--my-border-color)] rounded-md')}
                >
                  空
                </div>
                )
          }
        </div>
      </div>
    </main>
  )
}
