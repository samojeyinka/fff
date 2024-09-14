import Sidebar from "./Features/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sm:flex">
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
  );
}
