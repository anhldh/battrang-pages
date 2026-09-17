import type { ComponentType } from "react";
import {
  AmphoraIcon,
  FlameIcon,
  HomeIcon,
  LandmarkIcon,
  UserIcon,
} from "../components/icons/Icons";

export type PageId =
  | "overview"
  | "products"
  | "artisans"
  | "process"
  | "museum";

export type NavItem = {
  id: PageId;
  label: string;
  caption: string;
  kicker: string;
  pageTitle: string;
  Icon: ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
};

export const navItems: NavItem[] = [
  {
    id: "overview",
    label: "Tổng quan",
    caption: "Khám phá Bát Tràng",
    kicker: "Trang chủ",
    pageTitle: "Tổng quan Bát Tràng",
    Icon: HomeIcon,
  },
  {
    id: "museum",
    label: "Bảo tàng số",
    caption: "Tham quan không gian 3D",
    kicker: "Trải nghiệm",
    pageTitle: "Bảo tàng số",
    Icon: LandmarkIcon,
  },
  {
    id: "products",
    label: "Sản phẩm",
    caption: "Hiện vật & mô hình 3D",
    kicker: "Bộ sưu tập",
    pageTitle: "Hiện vật gốm Bát Tràng",
    Icon: AmphoraIcon,
  },
  {
    id: "artisans",
    label: "Câu chuyện nghệ nhân",
    caption: "Những người giữ lửa",
    kicker: "Con người",
    pageTitle: "Câu chuyện nghệ nhân",
    Icon: UserIcon,
  },
  {
    id: "process",
    label: "Quy trình sản phẩm",
    caption: "Từ đất thành tinh hoa",
    kicker: "Nghề gốm",
    pageTitle: "Quy trình sản phẩm",
    Icon: FlameIcon,
  },
];
