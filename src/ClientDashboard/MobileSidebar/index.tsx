import Sidebar from "./Features/MobileSidebar";

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
