import type { ReactNode } from 'react'
import styled from '@emotion/styled'
import type { PageId } from '../data/nav'
import { colors, font, mq } from '../styles/tokens'
import { DesktopSidebar, SIDEBAR_WIDTH } from './Sidebar/DesktopSidebar'
import { MobileNav } from './Sidebar/MobileNav'
import { Topbar } from './Topbar/Topbar'

/* Khung ngoài khoá ở chiều cao màn hình — chỉ <Content> bên trong cuộn. */
const Shell = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${colors.bg};
  color: ${colors.text};
  font-family: ${font.body};
`

const Main = styled.main`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-left: ${SIDEBAR_WIDTH}px;

  ${mq.mobile} {
    margin-left: 0;
  }
`

const Content = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`

type Props = {
  active: PageId
  onSelect: (id: PageId) => void
  kicker: string
  title: string
  children: ReactNode
}

export function AppLayout({ active, onSelect, kicker, title, children }: Props) {
  return (
    <Shell>
      <MobileNav active={active} onSelect={onSelect} />
      <DesktopSidebar active={active} onSelect={onSelect} />
      <Main>
        <Topbar kicker={kicker} title={title} />
        <Content>{children}</Content>
      </Main>
    </Shell>
  )
}
