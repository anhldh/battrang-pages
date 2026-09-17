import styled from '@emotion/styled'
import { colors, font, radius } from './tokens'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: ${colors.surface};
  border: 1px solid ${colors.divider};
  border-radius: ${radius.md};
  overflow: hidden;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 12px 14px 14px;
`

export const CardTitle = styled.span`
  font-family: ${font.heading};
  font-weight: 600;
  font-size: 17px;
  line-height: 1.2;
`

export const CardMeta = styled.span`
  font-size: 11px;
  color: ${colors.textFaint};
  font-variant-numeric: tabular-nums;
`

export const Button = styled.a<{ variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 9px 17px;
  font-family: ${font.heading};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  border-radius: ${radius.md};
  cursor: pointer;
  border: 1px solid
    ${(p) => (p.variant === 'primary' ? colors.red : colors.divider)};
  color: ${(p) => (p.variant === 'primary' ? colors.red : colors.text)};

  &:hover {
    background: ${(p) =>
      p.variant === 'primary' ? 'rgba(168,52,42,.1)' : 'rgba(43,33,26,.06)'};
  }
`

export const Divider = styled.hr`
  height: 1px;
  border: 0;
  margin: 0;
  background: ${colors.divider};
`

export const SectionTitle = styled.h2`
  font-family: ${font.heading};
  font-weight: 400;
  font-size: 32px;
  line-height: 1.15;
`

export const Prose = styled.p`
  max-width: 640px;
  font-size: 14.5px;
  line-height: 1.9;
  text-align: justify;
  color: rgba(43, 33, 26, 0.8);
`

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
