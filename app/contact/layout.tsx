import Nav from "../lib/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
            <Nav />
        </div>
        <div className="flex-grow p-10-auto m-10 mt-20">{children}</div>
      </div>
    );
  }