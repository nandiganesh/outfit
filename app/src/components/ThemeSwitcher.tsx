import { useTheme } from '@/context/ThemeContext';
import type { Theme } from '@/types';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; bg: string; border?: string }[] = [
    { value: 'black', bg: '#000000' },
    { value: 'cream', bg: 'transparent', border: 'currentColor' },
    { value: 'red', bg: '#FF0000' },
  ];

  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className="relative w-4 h-4 rounded-full cursor-pointer"
          style={{
            backgroundColor: t.bg,
            border: t.border ? `1.5px solid ${t.border}` : 'none',
          }}
          aria-label={`Set ${t.value} theme`}
        >
          {theme === t.value && (
            <span
              className="absolute inset-[-3px] rounded-full border-[2px]"
              style={{ borderColor: 'var(--fg)' }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
