import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4" style={{backgroundColor:'#0f1626'}}>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">中山市宏辰自动化科技有限公司</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">首页</Link></li>
            <li><Link href="/about" className="hover:underline">关于我们</Link></li>
            <li><Link href="/products" className="hover:underline">产品</Link></li>
            <li><Link href="/contact" className="hover:underline">联系我们</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}