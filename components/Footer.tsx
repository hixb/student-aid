import clsx from 'clsx'

export default function Footer() {
  return (
    <footer
      className={clsx('fixed bottom-0 left-0 w-full h-80 bg-[var(--my-box-bg)] border-y border-[var(--my-border-color)] z-10 flex items-center justify-between px-30')}
    >
      <span />
      <div className="flex items-center">
        <bdi className="ml-1 flex items-center">
          活动最终解释权归 帆启（山东）教育科技有限公司所有
        </bdi>
        <time className="opacity-80 ml-10">2022-{(new Date()).getFullYear()}</time>
      </div>
      <span />
    </footer>
  )
}
