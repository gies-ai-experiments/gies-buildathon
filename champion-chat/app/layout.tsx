export const metadata = {
  title: 'Champion Challenge Builder | Gies AI For Impact Challenge',
  description: 'Brainstorm and submit your challenge for the Gies AI For Impact hackathon',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
