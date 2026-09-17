import { useState } from "react";
import styled from "@emotion/styled";
import { productItems } from "../../data/content";
import { useModalStore } from "../../store/useModalStore";
import { Button, Card, CardBody, CardTitle, Thumb } from "../../styles/primitives";
import { colors, font, mq, radius } from "../../styles/tokens";

const Section = styled.section`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 30px 30px 44px;

  ${mq.mobile} {
    padding: 22px 18px 32px;
  }
`;

const Main = styled.div`
  flex: 1 1 420px;
  min-width: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;

  ${mq.mobile} {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }
`;

const ItemCard = styled(Card.withComponent("button"))<{ active: boolean }>`
  cursor: pointer;
  text-align: left;
  padding: 0;
  border-color: ${(p) => (p.active ? colors.red : colors.divider)};
  box-shadow: ${(p) => (p.active ? "0 4px 14px rgba(168,52,42,.14)" : "none")};

  &:hover {
    border-color: ${colors.red};
  }
`;

const ThumbBox = styled.div`
  height: 150px;

  ${mq.mobile} {
    height: 120px;
  }
`;

const Excerpt = styled.span`
  font-size: 11.5px;
  line-height: 1.6;
  color: ${colors.textFaint};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Panel = styled.aside`
  flex: 0 1 330px;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  border-radius: ${radius.lg};
  background: ${colors.surface};
  border: 1px solid rgba(90, 58, 38, 0.22);
  align-self: flex-start;
`;

const PanelKicker = styled.span`
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.brown};
`;

const PanelImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: ${radius.md};
`;

const PanelTitle = styled.span`
  font-family: ${font.heading};
  font-size: 21px;
`;

const PanelBody = styled.p`
  font-size: 13px;
  line-height: 1.8;
  text-align: justify;
  color: rgba(43, 33, 26, 0.75);
`;

export function ProductsPage() {
  const [activeId, setActiveId] = useState(productItems[0].id);
  const openModal = useModalStore((s) => s.open);
  const active = productItems.find((p) => p.id === activeId)!;

  return (
    <Section>
      <Main>
        <Grid>
          {productItems.map((item) => (
            <ItemCard
              key={item.id}
                type="button"
              active={item.id === activeId}
              onClick={() => setActiveId(item.id)}
            >
              <ThumbBox>
                <Thumb src={item.thumb} alt={item.name} />
              </ThumbBox>
              <CardBody style={{ padding: "11px 13px 13px", gap: 4 }}>
                <CardTitle style={{ fontSize: 14 }}>{item.name}</CardTitle>
                <Excerpt>{item.description}</Excerpt>
              </CardBody>
            </ItemCard>
          ))}
        </Grid>
      </Main>

      <Panel>
        <PanelKicker>Chi tiết hiện vật</PanelKicker>
        <PanelImage src={active.thumb} alt={active.name} />
        <PanelTitle>{active.name}</PanelTitle>
        <PanelBody>{active.description}</PanelBody>
        <Button
          as="button"
          type="button"
          variant="primary"
          style={{ width: "100%" }}
          onClick={() =>
            openModal({
              kind: "iframe",
              title: active.name,
              src: active.viewer3dUrl,
            })
          }
        >
          Xem 3D
        </Button>
      </Panel>
    </Section>
  );
}
