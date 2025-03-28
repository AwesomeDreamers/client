import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[20%] sticky top-0 left-0 h-screen">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col px-5">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
