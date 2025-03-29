import Header from "@/components/shared/header";
import Sidebar from "@/components/shared/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full min-h-screen">
      <div className="hidden xl:block xl:w-[15%] sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div className="w-full xl:w-[85%] flex flex-col px-5">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
