import styled from '@emotion/styled'
import { SearchIcon } from '../../components/icons/Icons'
import { colors, font, mq } from '../../styles/tokens'

const Bar = styled.header`
  flex: none;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 11px 30px;
  background: ${colors.surfaceAlt};
  border-bottom: 1px solid ${colors.divider};

  ${mq.mobile} {
    padding: 10px 18px;
  }
`

const Titles = styled.div`
  flex: 1 1 200px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`

const Kicker = styled.span`
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.brown};
`

const Title = styled.span`
  font-family: ${font.heading};
  font-size: 19px;
  line-height: 1.2;
`

const Search = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(300px, 34vw);
  padding: 6px 13px;
  border-radius: 999px;
  background: ${colors.bg};
  border: 1px solid rgba(90, 58, 38, 0.24);

  ${mq.mobile} {
    width: 100%;
  }

  input {
    flex: 1;
    min-width: 0;
    background: transparent;
    border: 0;
    outline: none;
    font-family: ${font.body};
    font-size: 13px;
    color: ${colors.text};
  }
`

type Props = {
  kicker: string
  title: string
}

export function Topbar({ kicker, title }: Props) {
  return (
    <Bar>
      <Titles>
        <Kicker>{kicker}</Kicker>
        <Title>{title}</Title>
      </Titles>
      <Search>
        <SearchIcon />
        <input placeholder="Tìm kiếm sản phẩm, nghệ nhân..." />
      </Search>
    </Bar>
  )
}
