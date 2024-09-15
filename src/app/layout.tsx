import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css';

const NotoSansSC = localFont({
  src: '../fonts/NotoSansSC-Regular.ttf',
  variable: '--font-geist-sans',
  weight: '100 900',
});


export const metadata: Metadata = {
  title: 'NextJs 14 Shadcn Template',
  description: 'NextJs 14 Shadcn Template',
};

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={`${NotoSansSC.variable} antialiased`}
    >
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      enableSystem={false}
      enableColorScheme={false}
    >
      <div className="min-h-dvh  bg-background font-[family-name:var(--font-noto-sans)]">
        {children}
      </div>
    </ThemeProvider>

    </body>
    </html>
  );
}
