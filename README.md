# Bát Tràng — Không gian di sản

Trang demo giới thiệu làng gốm Bát Tràng: sidebar cố định trên desktop, thu về header có menu trên mobile.
React + TypeScript + Vite, style bằng Emotion, state dùng Zustand.

## Chạy

```bash
pnpm install
pnpm dev
```

`pnpm build` để build, `pnpm lint` để kiểm tra lint.

## Link cần điền

Data nằm ở `src/data/content.ts`, ảnh tạm khai báo ở `IMG` trong `src/styles/tokens.ts`.

| Biến | Dùng cho |
| --- | --- |
| `introVideoUrl` | Video giới thiệu ở rail trang chủ |
| `processVideoUrl` | Video tab Quy trình (YouTube hoặc `.m3u8`) |
| `viewer3dUrl` | Link 3D của từng sản phẩm, mở trong modal |

Tab Bảo tàng số hiện là khung chờ — thay `<Placeholder>` trong `src/pages/Museum/MuseumPage.tsx` bằng iframe trình xem 3D.

Để rỗng thì modal vẫn mở bình thường và báo chưa có link.
