import styled from "@emotion/styled";
import { colors, font } from "../../styles/tokens";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Name = styled.span`
  font-family: ${font.heading};
  font-size: 18px;
  letter-spacing: 0.1em;
  line-height: 1;
  color: ${colors.text};
`;

const Slogan = styled.span`
  font-size: 8.5px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: ${colors.textFaint};
`;

export function SidebarBrand() {
  return (
    <Wrap>
      <span style={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Name>BÁT TRÀNG</Name>
        <Slogan>Tinh hoa từ đất Việt</Slogan>
      </span>
    </Wrap>
  );
}
