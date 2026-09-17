import styled from '@emotion/styled'
import { navItems, type PageId } from '../../data/nav'
import { colors, font, radius } from '../../styles/tokens'

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
`

const Item = styled.a<{ active: boolean }>`
  display: flex;
  align-items: stretch;
  gap: 12px;
  padding: 10px 12px;
  border-radius: ${radius.md};
  color: ${colors.text};
  background: ${(p) => (p.active ? 'rgba(168,52,42,.07)' : 'transparent')};

  &:hover {
    background: rgba(168, 52, 42, 0.07);
  }
`

const Bar = styled.span<{ active: boolean }>`
  width: 3px;
  flex: none;
  border-radius: 2px;
  background: ${(p) => (p.active ? colors.red : 'transparent')};
`

const Label = styled.span`
  font-family: ${font.heading};
  font-size: 15px;
`

const Caption = styled.span`
  font-size: 11px;
  color: ${colors.textFaint};
`

type Props = {
  active: PageId
  onSelect: (id: PageId) => void
}

export function SidebarNav({ active, onSelect }: Props) {
  return (
    <Nav>
      {navItems.map(({ id, label, caption, Icon }) => {
        const isActive = id === active
        return (
          <Item
            key={id}
            href="#"
            active={isActive}
            aria-current={isActive ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault()
              onSelect(id)
            }}
          >
            <Bar active={isActive} />
            <span style={{ marginTop: 2, flex: 'none' }}>
              <Icon />
            </span>
            <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Label>{label}</Label>
              <Caption>{caption}</Caption>
            </span>
          </Item>
        )
      })}
    </Nav>
  )
}
