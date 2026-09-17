import type { PageId } from "./nav";
import { colors } from "../styles/tokens";

/* --- Tổng quan --- */
export const heroStats = [
  { value: "700", label: "năm tuổi làng nghề", color: colors.blue },
  { value: "1.024", label: "hiện vật đã số hoá", color: colors.olive },
  { value: "86", label: "nghệ nhân, xưởng gốm", color: colors.brown },
  { value: "12", label: "tour trải nghiệm", color: colors.green },
];

/** Bấm vào mục: kind "video" mở modal phát video, kind "page" chuyển sang tab đó. */
export type HighlightAction =
  | { kind: "video"; src: string }
  | { kind: "page"; page: PageId };

/** Link video giới thiệu ở Rail — YouTube hoặc .m3u8 đều được. */
export const introVideoUrl =
  "https://assets.yoolife.com.vn/streaming/1789617494088-3380.mp4/master.m3u8";

export const highlights: {
  id: string;
  title: string;
  thumb: string;
  action: HighlightAction;
}[] = [
  {
    id: "h1",
    title: "Video giới thiệu Bát Tràng",
    thumb: "/section/introduce.jpg",
    action: { kind: "video", src: introVideoUrl },
  },
  {
    id: "h2",
    title: "Hành trình làm gốm",
    thumb: "/section/hanhtrinhlamgom.jpg",
    action: { kind: "page", page: "process" },
  },
  {
    id: "h3",
    title: "Tham quan 3D",
    thumb: "/section/3d.jpg",
    action: { kind: "page", page: "museum" },
  },
  {
    id: "h4",
    title: "Bộ sưu tập hiện vật",
    thumb: "section/sanpham.jpg",
    action: { kind: "page", page: "products" },
  },
  {
    id: "h5",
    title: "Gặp gỡ nghệ nhân",
    thumb: "/section/nghenhan.jpg",
    action: { kind: "page", page: "artisans" },
  },
];

/* --- Sản phẩm --- */
export const productItems = [
  {
    id: "p1",
    name: "Bình gốm",
    description: "Bình cắm hoa",
    thumb: "/thumbnail/sp1.jpg",
    viewer3dUrl: "https://3d.yoostudio.io/binh-gom-zmuseumc10232u275784",
  },
  {
    id: "p2",
    name: "Tượng phật",
    description: "Tượng phật trang trí.",
    thumb: "/thumbnail/sp2.jpg",
    viewer3dUrl: "https://3d.yoostudio.io/tuong-phat-zprojectc10265u275784",
  },
  {
    id: "p3",
    name: "Bình gốm",
    description: "Bình để cắm hoa",
    thumb: "/thumbnail/sp3.jpg",
    viewer3dUrl: "https://3d.yoostudio.io/binh-gom-zmuseumc10315u275784",
  },
  {
    id: "p4",
    name: "Bình gốm",
    description: "Bình để trang trí",
    thumb: "/thumbnail/sp4.jpg",
    viewer3dUrl: "https://3d.yoostudio.io/binh-gom-zprojectc10379u275784",
  },
];

/* --- Nghệ nhân --- */
export const featuredArtisan = {
  kicker: "Chân dung tháng này",
  name: "Nghệ nhân Lê Đình Hoàng Anh",
  meta: "48 năm bên bàn xoay · Men lam cổ · Xưởng gốm Đoàn Gia",
  bio: "Ông bắt đầu học nghề từ năm mười hai tuổi, khi lò than còn nhóm bằng củi và men lam được nghiền tay trong cối đá. Nửa thế kỷ sau, xưởng của ông vẫn giữ cách vẽ chìm dưới men và công thức tro trấu pha theo mùa.",
  quote: "“Đất không nói, nhưng đất nhớ tay người.”",
};

export const artisans = [
  {
    id: "a1",
    name: "Lê Hoàng Anh",
    meta: "Vẽ men lam · 32 năm",
    body: "Người đưa hoạ tiết rồng phượng thời Lê trở lại trên dòng bình cao hơn một mét.",
  },
  {
    id: "a2",
    name: "Hoàng Anh",
    meta: "Men ngọc · 21 năm",
    body: "Thử nghiệm hơn bốn trăm mẻ men trước khi tìm lại sắc xanh ngọc của gốm cổ.",
  },
  {
    id: "a3",
    name: "Lại là Hoàng Anh",
    meta: "Tạo hình · 27 năm",
    body: "Chuyên tượng thờ và linh vật, đắp tay từng chi tiết không dùng khuôn.",
  },
];

/* --- Quy trình --- */
/** Link video quy trình. react-player tự nhận dạng nguồn: link YouTube
    (watch?v=, youtu.be/, embed/) hoặc stream HLS (.m3u8) đều được.
    Để rỗng thì khu vực video hiển thị khung chờ. */
export const processVideoUrl =
  "https://assets.yoolife.com.vn/streaming/1789615400093-3887.mp4/master.m3u8";

export const processSteps = [
  {
    no: "01",
    title: "Chọn và luyện đất",
    body: "Đất Cao Lanh được ngâm, lọc qua bốn bể lắng rồi ủ cho dẻo đều.",
  },
  {
    no: "02",
    title: "Tạo hình trên bàn xoay",
    body: "Vuốt tay hoặc đổ khuôn, tuỳ dáng sản phẩm và độ mỏng của thành.",
  },
  {
    no: "03",
    title: "Phơi và sửa mộc",
    body: "Hong trong bóng râm, cạo gọt chân và miệng cho cân trước khi vẽ.",
  },
  {
    no: "04",
    title: "Vẽ hoạ tiết",
    body: "Men lam vẽ chìm dưới men, nét đi một lần, không sửa lại được.",
  },
  {
    no: "05",
    title: "Tráng men",
    body: "Nhúng, dội hoặc phun men; độ dày quyết định sắc màu sau khi nung.",
  },
  {
    no: "06",
    title: "Nung lò",
    body: "Lò ga 1.250 °C trong khoảng 18 giờ, sau đó hạ nhiệt chậm hai ngày.",
  },
];
