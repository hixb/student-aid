import React from 'react'

import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'

interface User {
  name: string
  phone: string
  status: string
}

const UserList: React.FC = () => {
  const RANDOM_USER_COUNT = 11
  const SCROLL_HEIGHT = 50

  const [users, setUsers] = React.useState<User[]>([])
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const timerRef = React.useRef<NodeJS.Timeout | null>(null)
  const controls = useAnimation()

  const [tagVisible, setTagVisible] = React.useState(true)

  React.useEffect(() => {
    document.addEventListener('visibilitychange', () => setTagVisible(document.visibilityState === 'visible'))

    setUsers(Array.from({ length: RANDOM_USER_COUNT }, () => setData()))
  }, [])

  React.useEffect(() => {
    if (!tagVisible)
      return

    const scrollDown = () => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % users.length)

      controls.start({ y: `-${(currentIndex + 1) * SCROLL_HEIGHT}px`, transition: { duration: 0.5, ease: 'easeInOut' } })
        .then(() => setUsers(prevUsers => [...prevUsers, setData()]))
    }

    timerRef.current = setInterval(scrollDown, 2000)

    return () => {
      timerRef.current && clearInterval(timerRef.current)
    }
  }, [users, currentIndex, controls, tagVisible])

  React.useEffect(() => {
  }, [])

  function setData(): User {
    return {
      name: generateChineseName(),
      phone: generateMobileNumber(),
      status: Math.floor(Math.random() * 10) < 9 ? '审核通过' : '审核未通过',
    }
  }

  function generateChineseName() {
    const familyNames = [
      '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈',
      '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许',
      '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏',
      '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
      '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦',
      '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
      '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺',
      '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
      '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余',
      '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹',
    ]
    const givenNames = [
      '子璇', '淼', '国栋', '夫子', '瑞堂', '甜', '敏', '尚', '国贤', '贺祥', '晨涛',
      '昊轩', '易轩', '益辰', '益帆', '益冉', '瑾春', '瑾昆', '春齐', '杨', '文昊',
      '东东', '雄霖', '浩晨', '熙涵', '溶溶', '冰枫', '欣欣', '宜豪', '欣慧', '建政',
      '美欣', '淑慧', '文轩', '文杰', '欣源', '忠林', '榕润', '欣汝', '慧嘉', '新建',
      '建林', '亦菲', '林', '冰洁', '佳欣', '涵涵', '禹辰', '淳美', '泽惠', '伟洋',
      '涵越', '润丽', '翔', '淑华', '晶莹', '凌晶', '苒溪', '雨涵', '嘉怡', '佳毅',
      '子辰', '佳琪', '紫轩', '瑞辰', '昕蕊', '萌', '明远', '欣宜', '泽远', '欣怡',
      '佳怡', '佳惠', '晨茜', '晨璐', '运昊', '汝鑫', '淑君', '晶滢', '润莎', '榕汕',
      '佳钰', '佳玉', '晓庆', '一鸣', '语晨', '添池', '添昊', '雨泽', '雅晗', '雅涵',
      '清妍', '诗悦', '嘉乐', '晨涵', '天赫', '玥傲', '佳昊', '天昊', '萌萌', '若萌',
    ]

    const familyName = familyNames[Math.floor(Math.random() * familyNames.length)]
    const givenName = givenNames[Math.floor(Math.random() * givenNames.length)]

    return familyName + givenName
  }

  function generateMobileNumber() {
    const prefixArray = ['130', '131', '132', '133', '135', '137', '138', '170', '187', '189']
    const randomIndex = Math.floor(Math.random() * prefixArray.length)
    let prefix = prefixArray[randomIndex]

    for (let j = 0; j < 8; j++)
      prefix += Math.floor(Math.random() * 10)

    return prefix
  }

  function maskChineseName(name: string): string {
    return name.length === 2
      ? `${name.charAt(0)}*`
      : name.length === 3
        ? `${name.charAt(0)}*${name.charAt(2)}`
        : name
  }

  return (
    users.length > 0 && (
    <ul
      className={clsx('border-x border-b border-[var(--my-border-color)] rounded-b overflow-hidden relative')}
      style={{ maxHeight: SCROLL_HEIGHT * 10 }}
    >
      <motion.div animate={controls}>
        {users.map((user, index) => (
          <li key={index} className="flex" style={{ height: SCROLL_HEIGHT }}>
            <span className={clsx('inline-block text-center w-1/3 h-full truncate px-10 overflow-hidden')} style={{ lineHeight: `${SCROLL_HEIGHT}px` }}>
              {maskChineseName(user.name)}
            </span>
            <span className={clsx('inline-block text-center w-1/3 h-full border-x border-[var(--my-border-color)] truncate px-10 overflow-hidden')} style={{ lineHeight: `${SCROLL_HEIGHT}px` }}>
              {user.phone.substring(0, 3)}***{user.phone.substring(6)}
            </span>
            <span className={clsx('inline-block text-center w-1/3 h-full truncate px-10 overflow-hidden')} style={{ lineHeight: `${SCROLL_HEIGHT}px` }}>
              {user.status}
            </span>
          </li>
        ))}
      </motion.div>
    </ul>
    )
  )
}

export default UserList
