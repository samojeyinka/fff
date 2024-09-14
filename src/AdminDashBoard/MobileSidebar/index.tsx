import Sidebar from "./Features/MobileSidebar.tsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </>
  );
}
