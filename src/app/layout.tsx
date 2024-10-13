import '../styles/globals.css'

export const metadata = {
  title: '中山市宏辰自动化科技有限公司',
  description: '为您提供先进的自动化解决方案',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}