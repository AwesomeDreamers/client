interface ProductWrapProps {
  title: string;
  children: React.ReactNode;
}

export default function ProductWrap({ title, children }: ProductWrapProps) {
  return (
    <section className="my-12 ">
      <div className="relative block-title">
        <strong className="text-4xl">{title}</strong>
      </div>
      {children}
    </section>
  );
}
