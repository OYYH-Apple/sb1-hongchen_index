'use client'

import { Button } from "../components/ui/button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProducts((prev) => [...prev, 0, 1, 2])
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (productsRef.current) {
      observer.observe(productsRef.current)
    }

    return () => {
      if (productsRef.current) {
        observer.unobserve(productsRef.current)
      }
    }
  }, [])

  const products = [
    { title: "工业机器人", description: "高精度、高效率的工业机器人，适用于各种生产线。" },
    { title: "自动化生产线", description: "定制化的自动化生产线解决方案，提高生产效率。" },
    { title: "智能控制系统", description: "先进的智能控制系统，实现生产过程的精确控制和监管。" }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section id="home" className="bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">欢迎来到中山市宏辰自动化科技有限公司</h2>
            <p className="text-xl mb-8">为您提供先进的自动化解决方案</p>
            <Button 
              size="lg" 
              style={{backgroundColor: '#0f1626'}}
              className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              了解更多
            </Button>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">关于我们</h2>
            <p className="text-lg mb-4">
              中山市宏辰自动化科技有限公司是一家专注于自动化技术的创新企业。我们致力于为客户提供高质量、高效率的自动化解决方案，帮助企业提升生产效率，降低运营成本。
            </p>
            <p className="text-lg">
              我们的团队由经验丰富的工程师和技术专家组成，具备丰富的行业经验和专业知识，能够为客户量身定制最适合的自动化系统。
            </p>
          </div>
        </section>

        <section id="products" className="bg-gray-100 py-20" ref={productsRef}>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">我们的产品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index}
                  className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg bg-white rounded-lg p-8 shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4">{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}