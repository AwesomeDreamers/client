import Sidebar from "@/components/shared/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full flex flex-col">
        dd
        <main>{children}</main>
      </div>
    </div>
  );
}
