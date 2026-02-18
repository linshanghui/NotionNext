// import { useGlobal } from '@/lib/global'
import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ notice, className }) => {
  // 直接返回空，不渲染任何公告内容
  return null
}

export default Announcement
