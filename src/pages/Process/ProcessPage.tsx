import { Fragment, useState } from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { ChevronRightIcon, PlayIcon } from "../../components/icons/Icons";
import { processSteps, processVideoUrl } from "../../data/content";
import { Prose } from "../../styles/primitives";
import { colors, font, mq, radius } from "../../styles/tokens";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 34px 30px 44px;

  ${mq.mobile} {
    gap: 18px;
    padding: 22px 18px 32px;
  }
`;

const VideoFrame = styled.div`
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  border-radius: ${radius.md};
  overflow: hidden;
  border: 1px solid ${colors.divider};
  background: ${colors.surface};

  /* ReactPlayer render ra <iframe> (YouTube) hoặc <hls-video> (m3u8) tuỳ link. */
  > *,
  iframe,
  video {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

const VideoEmpty = styled(VideoFrame)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-style: dashed;
  border-color: rgba(90, 58, 38, 0.35);
  background: rgba(245, 237, 223, 0.5);
`;

const EmptyNote = styled.p`
  max-width: 280px;
  padding: 0 16px;
  text-align: center;
  font-size: 12.5px;
  color: ${colors.textMuted};
`;

/* Dải bước rút gọn: chỉ số thứ tự + tên, mô tả hiện ở khối bên dưới. */
const Flow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;

const Step = styled.button<{ active: boolean }>`
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 8px 13px;
  border-radius: ${radius.md};
  border: 1px solid
    ${(p) => (p.active ? colors.red : "transparent")};
  background: ${(p) => (p.active ? "rgba(168,52,42,.07)" : "transparent")};

  &:hover {
    background: rgba(168, 52, 42, 0.07);
  }
`;

const StepNo = styled.span<{ active: boolean }>`
  font-family: ${font.heading};
  font-size: 15px;
  font-variant-numeric: tabular-nums;
  color: ${(p) => (p.active ? colors.red : "rgba(138,80,48,.5)")};
`;

const StepName = styled.span`
  font-family: ${font.heading};
  font-size: 15px;
  white-space: nowrap;
`;

const Arrow = styled.span`
  display: flex;
  color: rgba(138, 80, 48, 0.4);
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-width: 640px;
  padding: 16px 18px;
  border-radius: ${radius.md};
  background: ${colors.surface};
  border: 1px solid ${colors.divider};
`;

const DetailKicker = styled.span`
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${colors.brown};
`;

const DetailBody = styled.p`
  font-size: 14px;
  line-height: 1.85;
  text-align: justify;
  color: rgba(43, 33, 26, 0.8);
`;

export function ProcessPage() {
  const [active, setActive] = useState(0);
  const step = processSteps[active];

  return (
    <Section>
      <Prose>
        Sáu bước dưới đây là đường đi của một khối đất Cao Lanh cho tới lúc thành
        hình trên kệ trưng bày.
      </Prose>

      {processVideoUrl ? (
        <VideoFrame>
          <ReactPlayer src={processVideoUrl} controls width="100%" height="100%" />
        </VideoFrame>
      ) : (
        <VideoEmpty>
          <PlayIcon size={26} color="rgba(138,80,48,.5)" />
          <EmptyNote>Dán link YouTube hoặc .m3u8 vào processVideoUrl trong content.ts</EmptyNote>
        </VideoEmpty>
      )}

      <Flow>
        {processSteps.map((item, i) => (
          <Fragment key={item.no}>
            {i > 0 && (
              <Arrow>
                <ChevronRightIcon size={14} />
              </Arrow>
            )}
            <Step
              type="button"
              active={i === active}
              onClick={() => setActive(i)}
            >
              <StepNo active={i === active}>{item.no}</StepNo>
              <StepName>{item.title}</StepName>
            </Step>
          </Fragment>
        ))}
      </Flow>

      <Detail>
        <DetailKicker>Bước {step.no}</DetailKicker>
        <DetailBody>{step.body}</DetailBody>
      </Detail>
    </Section>
  );
}
