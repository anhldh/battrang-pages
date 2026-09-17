import styled from '@emotion/styled'
import { artisans, featuredArtisan } from '../../data/content'
import {
  Button,
  Card,
  CardMeta,
  CardTitle,
  Divider,
  SectionTitle,
} from '../../styles/primitives'
import { colors, font, IMG, mq, radius } from '../../styles/tokens'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 34px 30px 44px;

  ${mq.mobile} {
    gap: 24px;
    padding: 22px 18px 32px;
  }
`

const Feature = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
  flex-wrap: wrap;

  ${mq.mobile} {
    gap: 20px;
  }
`

const Portrait = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border: 6px solid #f7f0e3;
  border-radius: ${radius.md};
`

const Info = styled.div`
  flex: 1 1 420px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const Kicker = styled.span`
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.brown};
`

const Meta = styled.p`
  font-size: 13px;
  color: ${colors.textMuted};
`

const Bio = styled.p`
  max-width: 560px;
  font-size: 14.5px;
  line-height: 1.9;
  text-align: justify;
  color: rgba(43, 33, 26, 0.8);
`

const Quote = styled.blockquote`
  padding-left: 18px;
  border-left: 2px solid ${colors.red};
  font-family: ${font.heading};
  font-size: 20px;
  font-style: italic;
  line-height: 1.6;
  color: ${colors.blue};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`

const PersonCard = styled(Card)`
  gap: 12px;
  padding: 18px;
`

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
`

const Body = styled.p`
  font-size: 13px;
  line-height: 1.8;
  text-align: justify;
  color: rgba(43, 33, 26, 0.8);
`

export function ArtisansPage() {
  return (
    <Section>
      <Feature>
        <div style={{ flex: '1 1 300px', minWidth: 240 }}>
          <Portrait src={IMG.item} alt={featuredArtisan.name} />
        </div>
        <Info>
          <Kicker>{featuredArtisan.kicker}</Kicker>
          <SectionTitle style={{ fontSize: 40 }}>{featuredArtisan.name}</SectionTitle>
          <Meta>{featuredArtisan.meta}</Meta>
          <Divider style={{ width: 120 }} />
          <Bio>{featuredArtisan.bio}</Bio>
          <Quote>{featuredArtisan.quote}</Quote>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            <Button href="#" variant="primary">
              Nghe kể chuyện
            </Button>
            <Button href="#" variant="secondary">
              Xem tác phẩm
            </Button>
          </div>
        </Info>
      </Feature>

      <Divider />

      <Grid>
        {artisans.map((person) => (
          <PersonCard key={person.id}>
            <Avatar src={IMG.item} alt={person.name} />
            <CardTitle style={{ fontSize: 18 }}>{person.name}</CardTitle>
            <CardMeta>{person.meta}</CardMeta>
            <Body>{person.body}</Body>
          </PersonCard>
        ))}
      </Grid>
    </Section>
  )
}
