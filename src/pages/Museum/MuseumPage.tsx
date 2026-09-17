import styled from "@emotion/styled";
// import { LandmarkIcon } from "../../components/icons/Icons";
import { mq } from "../../styles/tokens";

const Section = styled.section`
  height: 100%;
  padding: 30px;

  ${mq.mobile} {
    padding: 22px 18px;
  }
`;

/* Khung chờ nhúng iframe trình xem 3D.
   Thay <Placeholder> bằng:
   <iframe
     src="https://3d.yoostudio.io/lang-gom-bat-trang-zmuseumc10225u275784"
     title="Bảo tàng số Bát Tràng"
     allowFullScreen
     style={{ width: "100%", height: "100%", border: 0, borderRadius: 7 }}
   /> */
// const Placeholder = styled.div`
//   height: 100%;
//   min-height: 320px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
//   text-align: center;
//   border: 1px dashed rgba(90, 58, 38, 0.35);
//   border-radius: ${radius.lg};
//   background: rgba(245, 237, 223, 0.5);
// `;

// const Title = styled.span`
//   font-family: ${font.heading};
//   font-size: 20px;
// `;

// const Note = styled.p`
//   max-width: 340px;
//   font-size: 12.5px;
//   line-height: 1.7;
//   color: ${colors.textMuted};
// `;

export function MuseumPage() {
  return (
    <Section>
      {/* <Placeholder>
        <LandmarkIcon size={30} strokeWidth={1.2} />
        <Title>Trình xem 3D</Title>
        <Note>Khu vực dành để nhúng iframe trình xem 3D.</Note>
      </Placeholder> */}
      <iframe
        src="https://3d.yoostudio.io/lang-gom-bat-trang-zmuseumc10225u275784"
        title="Bảo tàng số Bát Tràng"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0, borderRadius: 7 }}
      />
    </Section>
  );
}
