interface ProductWrapProps {
  title: string;
  children: React.ReactNode;
}

export default function ProductWrap({ title, children }: ProductWrapProps) {
  return (
    <section className="my-12 w-full">
      <div className="relative block-title">
        <strong
          className="text-4xl"
          style={{
            textShadow: "0 0 9px rgba(255, 255, 255, 0.7)",
          }}
        >
          {title}
        </strong>
      </div>
      <div className="w-full">{children}</div>
    </section>
  );
}
