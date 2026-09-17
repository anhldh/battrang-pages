import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { CloseIcon, MenuIcon } from '../../components/icons/Icons'
import type { PageId } from '../../data/nav'
import { colors, mq } from '../../styles/tokens'
import { SidebarBrand } from './SidebarBrand'
import { SidebarNav } from './SidebarNav'
import { SidebarQuote } from './SidebarQuote'

const Header = styled.header`
  flex: none;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 18px;
  background: ${colors.surface};
  border-bottom: 1px solid ${colors.divider};

  ${mq.desktop} {
    display: none;
  }
`

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background: rgba(43, 33, 26, 0.45);

  ${mq.desktop} {
    display: none;
  }
`

const Drawer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: min(280px, 84vw);
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.surface};
  border-right: 1px solid ${colors.divider};
  overflow-y: auto;
`

const DrawerHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 18px 16px;
  border-bottom: 1px solid rgba(90, 58, 38, 0.16);
`

const IconButton = styled.button`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  flex: none;
  border-radius: 50%;
  border: 1px solid ${colors.dividerStrong};

  &:hover {
    background: rgba(168, 52, 42, 0.08);
  }
`

type Props = {
  active: PageId
  onSelect: (id: PageId) => void
}

export function MobileNav({ active, onSelect }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <Header>
        <SidebarBrand />
        <IconButton type="button" aria-label="Mở menu" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
      </Header>

      {open && (
        <>
          <Backdrop onClick={() => setOpen(false)} />
          <Drawer>
            <DrawerHead>
              <SidebarBrand />
              <IconButton type="button" aria-label="Đóng menu" onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </DrawerHead>
            <SidebarNav
              active={active}
              onSelect={(id) => {
                onSelect(id)
                setOpen(false)
              }}
            />
            <div style={{ marginTop: 'auto' }}>
              <SidebarQuote />
            </div>
          </Drawer>
        </>
      )}
    </>
  )
}
