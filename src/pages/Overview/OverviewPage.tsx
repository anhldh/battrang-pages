import { Fragment } from "react";
import styled from "@emotion/styled";
import { ChevronRightIcon, PlayIcon } from "../../components/icons/Icons";
import { heroStats, highlights } from "../../data/content";
import { useModalStore } from "../../store/useModalStore";
import { useNavStore } from "../../store/useNavStore";
import { Button, Card, Thumb } from "../../styles/primitives";
import { colors, font, IMG, mq, radius } from "../../styles/tokens";

/* Trang chủ là màn giới thiệu: lấp đầy đúng một khung hình, không cuộn.
   Chữ dùng clamp để co lại trên màn thấp thay vì đẩy nội dung ra ngoài. */
const Section = styled.section`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Hero = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 30px 152px;

  ${mq.mobile} {
    padding: 18px 18px 142px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    /* Chỉ còn một lớp phủ rất nhẹ: đậm ở mép trên (che chữ in sẵn trên banner trong
       ảnh) và mép dưới (tách thanh Rail), gần như trong suốt ở giữa để thấy rõ ảnh.
       Chữ hero không dựa vào lớp này nữa mà có panel riêng ở HeroInner. */
    linear-gradient(
      to bottom,
      rgba(244, 242, 238, 0.62) 0%,
      rgba(234, 231, 224, 0.1) 38%,
      rgba(234, 231, 224, 0.12) 62%,
      rgba(244, 240, 234, 0.82) 100%
    ),
    url(${IMG.background});
  background-size: cover;
  background-position: center;
`;

/* Panel kính mờ cho khối chữ — cùng ngôn ngữ với card ở Rail, nhờ đó ảnh nền
   giữ được độ trong mà chữ vẫn đủ tương phản. */
const HeroInner = styled.div`
  position: relative;
  margin: auto;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(6px, 1.2vh, 12px);
  padding: clamp(18px, 3vh, 32px) clamp(22px, 4vw, 44px);
  text-align: center;
  background: rgba(247, 243, 236, 0.48);
  border: 1px solid rgba(90, 58, 38, 0.14);
  border-radius: ${radius.lg};
  box-shadow: 0 10px 36px rgba(45, 43, 43, 0.1);
  backdrop-filter: blur(12px) saturate(1.04);

  ${mq.mobile} {
    padding: 18px 20px;
  }
`;

const Welcome = styled.span`
  font-family: ${font.heading};
  font-size: clamp(14px, 1.9vh, 18px);
  font-weight: 300;
  color: rgba(43, 33, 26, 0.72);
`;

const HeroTitle = styled.h1`
  font-family: ${font.heading};
  font-size: clamp(36px, 5vw + 1vh, 68px);
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.03em;
  color: ${colors.blue};
`;

const HeroSub = styled.p`
  font-family: ${font.heading};
  font-size: clamp(14px, 2vh, 17px);
`;

const Rule = styled.hr`
  width: 110px;
  height: 1px;
  border: 0;
  margin: clamp(2px, 0.6vh, 6px) 0;
  background: ${colors.divider};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: clamp(2px, 1vh, 8px);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: clamp(10px, 1.5vw, 20px);
  margin-top: clamp(8px, 2vh, 22px);
  padding: clamp(8px, 1.4vh, 12px) 4px;
  border-top: 1px solid rgba(90, 58, 38, 0.22);
  border-bottom: 1px solid rgba(90, 58, 38, 0.22);

  ${mq.mobile} {
    gap: 14px;
    padding: 10px 0;
  }
`;

const Stat = styled.span`
  display: flex;
  align-items: baseline;
  gap: 6px;
`;

const StatValue = styled.span<{ tone: string }>`
  font-family: ${font.heading};
  font-size: clamp(15px, 2vh, 18px);
  font-variant-numeric: tabular-nums;
  color: ${(p) => p.tone};
`;

const StatLabel = styled.span`
  font-size: 10.5px;
  color: ${colors.textMuted};
`;

const StatSep = styled.span`
  width: 1px;
  height: 13px;
  background: rgba(90, 58, 38, 0.28);

  ${mq.mobile} {
    display: none;
  }
`;

/* Thanh nổi ghim đáy hero, cuộn ngang trong chính nó. */
const Rail = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  gap: 10px;
  align-items: stretch;
  padding: 12px 22px 16px;
  overflow-x: auto;

  ${mq.mobile} {
    padding: 10px 14px 14px;
  }
`;

const RailCard = styled(Card.withComponent("button"))`
  flex: 0 0 auto;
  cursor: pointer;
  text-align: left;
  padding: 0;

  &:hover {
    border-color: ${colors.red};
  }

  width: 158px;
  background: rgba(245, 237, 223, 0.94);
  border-color: rgba(90, 58, 38, 0.26);
  box-shadow: 0 6px 18px rgba(45, 43, 43, 0.16);
  backdrop-filter: blur(3px);

  ${mq.mobile} {
    width: 142px;
  }
`;

const ThumbBox = styled.div`
  position: relative;
  height: 62px;
  flex: none;
`;

const RailBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 10px 9px;
`;

const RailTitle = styled.span`
  font-family: ${font.heading};
  font-size: 12.5px;
  line-height: 1.25;
`;

const PlayBadge = styled.span`
  position: absolute;
  right: 7px;
  bottom: 7px;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(245, 237, 223, 0.92);
  border: 1px solid ${colors.dividerStrong};
`;

const RailNext = styled.button`
  flex: none;
  align-self: center;
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(245, 237, 223, 0.94);
  border: 1px solid ${colors.dividerStrong};
  box-shadow: 0 6px 18px rgba(45, 43, 43, 0.16);
  color: ${colors.brown};

  &:hover {
    background: rgba(168, 52, 42, 0.12);
  }
`;

export function OverviewPage() {
  const openModal = useModalStore((s) => s.open);
  const setPage = useNavStore((s) => s.setPage);

  return (
    <Section>
      <Hero>
        <HeroBg />
        <HeroInner>
          <Welcome>Chào mừng đến với</Welcome>
          <HeroTitle>BÁT TRÀNG</HeroTitle>
          <HeroSub>Không gian di sản – Trải nghiệm không giới hạn</HeroSub>
          <Rule />
          <Actions>
            <Button
              onClick={() => {
                setPage("museum");
              }}
              variant="primary"
            >
              Bắt đầu khám phá
            </Button>
          </Actions>
          <Stats>
            {heroStats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <StatSep />}
                <Stat>
                  <StatValue tone={stat.color}>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </Stat>
              </Fragment>
            ))}
          </Stats>
        </HeroInner>
      </Hero>

      <Rail>
        {highlights.map((item) => (
          <RailCard
            key={item.id}
            type="button"
            onClick={() =>
              item.action.kind === "video"
                ? openModal({
                    kind: "video",
                    title: item.title,
                    src: item.action.src,
                  })
                : setPage(item.action.page)
            }
          >
            <ThumbBox>
              <Thumb src={item.thumb} alt={item.title} />
              {item.action.kind === "video" && (
                <PlayBadge>
                  <PlayIcon size={11} />
                </PlayBadge>
              )}
            </ThumbBox>
            <RailBody>
              <RailTitle>{item.title}</RailTitle>
            </RailBody>
          </RailCard>
        ))}
        <RailNext type="button" aria-label="Xem thêm">
          <ChevronRightIcon size={15} />
        </RailNext>
      </Rail>
    </Section>
  );
}
