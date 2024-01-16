export function Title({ title, subtitle }) {
  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="text-3xl text-heading md:text-4xl lg:text-5xl">{title}</h2>
      <span className="text-sm text-primary-500 md:text-base">{subtitle}</span>
    </div>
  );
}
