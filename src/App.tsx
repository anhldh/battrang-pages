import { Modal } from "./components/Modal/Modal";
import { navItems } from "./data/nav";
import type { PageId } from "./data/nav";
import { AppLayout } from "./layout/AppLayout";
import { ArtisansPage } from "./pages/Artisans/ArtisansPage";
import { MuseumPage } from "./pages/Museum/MuseumPage";
import { OverviewPage } from "./pages/Overview/OverviewPage";
import { ProcessPage } from "./pages/Process/ProcessPage";
import { ProductsPage } from "./pages/Products/ProductsPage";
import { useNavStore } from "./store/useNavStore";

const pages: Record<PageId, () => React.ReactElement> = {
  overview: OverviewPage,
  products: ProductsPage,
  artisans: ArtisansPage,
  process: ProcessPage,
  museum: MuseumPage,
};

export default function App() {
  const page = useNavStore((s) => s.page);
  const setPage = useNavStore((s) => s.setPage);
  const current = navItems.find((item) => item.id === page)!;
  const Page = pages[page];

  return (
    <>
      <AppLayout
        active={page}
        onSelect={setPage}
        kicker={current.kicker}
        title={current.pageTitle}
      >
        <Page />
      </AppLayout>
      <Modal />
    </>
  );
}
