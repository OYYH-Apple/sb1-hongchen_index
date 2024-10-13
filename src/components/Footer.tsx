import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8" style={{backgroundColor: '#0f1626'}}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-sm">中山市宏辰自动化科技有限公司是一家专注于自动化技术的创新企业，致力于为客户提供高质量、高效率的自动化解决方案。</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <p className="text-sm">地址：广东省中山市某某区某某路123号</p>
            <p className="text-sm">电话：0760-1234567</p>
            <p className="text-sm">邮箱：info@hongchen-auto.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="text-sm space-y-2">
              <li><Link href="/" className="hover:underline">首页</Link></li>
              <li><Link href="/about" className="hover:underline">关于我们</Link></li>
              <li><Link href="/products" className="hover:underline">产品</Link></li>
              <li><Link href="/contact" className="hover:underline">联系我们</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 中山市宏辰自动化科技有限公司. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}