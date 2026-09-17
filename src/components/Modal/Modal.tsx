import { useEffect } from "react";
import styled from "@emotion/styled";
import ReactPlayer from "react-player";
import { useModalStore } from "../../store/useModalStore";
import { colors, font, mq } from "../../styles/tokens";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background: ${colors.bg};
`;

const Bar = styled.header`
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 22px;
  background: ${colors.surface};
  border-bottom: 1px solid ${colors.divider};

  ${mq.mobile} {
    padding: 10px 16px;
  }
`;

const Title = styled.span`
  font-family: ${font.heading};
  font-size: 18px;
  line-height: 1.2;
`;

const CloseButton = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  flex: none;
  border-radius: 50%;
  border: 1px solid ${colors.dividerStrong};

  &:hover {
    background: rgba(168, 52, 42, 0.1);
  }
`;

const Body = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #16120f;

  ${mq.mobile} {
    padding: 0;
  }
`;

const Stage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > *,
  iframe,
  video,
  hls-video {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }
`;

const EmptyNote = styled.p`
  max-width: 320px;
  text-align: center;
  font-size: 13px;
  line-height: 1.7;
  color: rgba(244, 242, 238, 0.6);
`;

export function Modal() {
  const content = useModalStore((s) => s.content);
  const close = useModalStore((s) => s.close);

  useEffect(() => {
    if (!content) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [content, close]);

  if (!content) return null;

  return (
    <Overlay role="dialog" aria-modal="true" aria-label={content.title}>
      <Bar>
        <Title>{content.title}</Title>
        <CloseButton type="button" aria-label="Đóng" onClick={close}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.text}
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </CloseButton>
      </Bar>

      <Body>
        {!content.src ? (
          <EmptyNote>Chưa có link cho nội dung này.</EmptyNote>
        ) : (
          <Stage>
            {content.kind === "video" ? (
              <ReactPlayer src={content.src} controls playing width="100%" height="100%" />
            ) : (
              <iframe src={content.src} title={content.title} allowFullScreen />
            )}
          </Stage>
        )}
      </Body>
    </Overlay>
  );
}
