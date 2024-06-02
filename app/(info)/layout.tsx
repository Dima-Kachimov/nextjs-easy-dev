export default function InfoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h1>Layout Info</h1>
      <div>{children}</div>
    </div>
  );
}
