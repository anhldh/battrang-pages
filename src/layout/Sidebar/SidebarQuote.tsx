import styled from "@emotion/styled";
import { font } from "../../styles/tokens";

const Wrap = styled.div`
  padding: 22px 20px 26px;
  border-top: 1px solid rgba(90, 58, 38, 0.16);
`;

const Quote = styled.p`
  font-family: ${font.heading};
  font-size: 15px;
  font-style: italic;
  line-height: 1.6;
  color: rgba(43, 33, 26, 0.7);
`;

export function SidebarQuote() {
  return (
    <Wrap>
      <Quote>
        “Mỗi sản phẩm là một câu chuyện, mỗi người thợ là một di sản.”
      </Quote>
    </Wrap>
  );
}
