import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Cpu, Globe, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Cpu className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">InnovateTech</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a></li>
            <li><a href="#about" className="text-foreground hover:text-primary transition-colors">About</a></li>
            <li><a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Revolutionizing Industries with AI</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">InnovateTech delivers cutting-edge AI solutions to transform your business and drive innovation.</p>
          <Button size="lg" className="mr-4">Get Started <ChevronRight className="ml-2 h-4 w-4" /></Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </section>

        <section id="services" className="py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Cpu className="h-12 w-12 mb-4 text-primary" />, title: "AI Consulting", description: "Expert guidance to integrate AI into your business processes." },
              { icon: <Globe className="h-12 w-12 mb-4 text-primary" />, title: "Machine Learning Solutions", description: "Custom ML models to solve complex business problems." },
              { icon: <Zap className="h-12 w-12 mb-4 text-primary" />, title: "Automation Services", description: "Streamline operations with intelligent automation." },
            ].map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle>{service.icon}</CardTitle>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <Image src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80" alt="AI Technology" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About InnovateTech</h2>
              <p className="text-lg mb-4">At InnovateTech, we're passionate about harnessing the power of AI to solve real-world problems. Our team of experts is dedicated to pushing the boundaries of what's possible with artificial intelligence.</p>
              <p className="text-lg mb-6">With years of experience and a commitment to innovation, we're your trusted partner in navigating the AI landscape.</p>
              <Button variant="outline">Learn More About Us</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl mb-8">Get in touch with us to start your AI journey today.</p>
          <Button size="lg">Contact Us</Button>
        </section>
      </main>

      <footer className="bg-secondary py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 InnovateTech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}