import styled from "@emotion/styled";
import type { PageId } from "../../data/nav";
import { colors, mq } from "../../styles/tokens";
import { SidebarBrand } from "./SidebarBrand";
import { SidebarNav } from "./SidebarNav";
import { SidebarQuote } from "./SidebarQuote";

export const SIDEBAR_WIDTH = 250;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: ${SIDEBAR_WIDTH}px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.surface};
  border-right: 1px solid ${colors.divider};
  overflow-y: auto;

  ${mq.mobile} {
    display: none;
  }
`;

const BrandRow = styled.div`
  padding: 14px 20px;
  border-bottom: 1px solid rgba(90, 58, 38, 0.16);
`;

type Props = {
  active: PageId;
  onSelect: (id: PageId) => void;
};

export function DesktopSidebar({ active, onSelect }: Props) {
  return (
    <Aside>
      <BrandRow>
        <SidebarBrand />
      </BrandRow>
      <SidebarNav active={active} onSelect={onSelect} />
      <div style={{ marginTop: "auto" }}>
        <SidebarQuote />
      </div>
    </Aside>
  );
}
