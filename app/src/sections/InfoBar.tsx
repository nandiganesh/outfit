export function InfoBar() {
  return (
    <section className="px-6 md:px-10 py-6 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--fg)' }}>
            OUTFIT
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--fg)' }}>
            WHY
          </p>
          <p className="text-base leading-relaxed max-w-md" style={{ color: 'var(--fg)' }}>
            Created by the ++hellohello team, this store and signature collection celebrates our collective creativity and passion for apparel. Carefully designed.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="https://www.hellohello.is"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider link-hover"
            style={{ color: 'var(--fg)' }}
          >
            Visit ++ website
          </a>
          <a
            href="#"
            className="text-xs font-semibold uppercase tracking-wider link-hover"
            style={{ color: 'var(--fg)' }}
          >
            Shipping & Returns
          </a>
        </div>

        <div className="md:text-right">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--fg)' }}>
            © 2026
          </p>
        </div>
      </div>
    </section>
  );
}
