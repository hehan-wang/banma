import Image from 'next/image';
import Link from 'next/link';
import { HeroParticles } from '@/components/ui/HeroParticles';
import { FadeIn } from '@/components/ui/FadeIn';
import { CloudFeatureCard } from '@/components/ui/CloudFeatureCard';
import { PricingCard } from '@/components/ui/PricingCard';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-gray-900 to-black py-20 md:py-32">
        <div className="absolute inset-0">
          <HeroParticles />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 mb-6">
                高效易用的AI算力云平台
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                为AI开发者和企业提供稳定、高性能、低成本的算力解决方案，
                加速您的AI模型训练与推理
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" size="lg" href="/register">
                  免费试用
                </Button>
                <Button variant="outline" size="lg" href="/pricing">
                  查看定价
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">99.9%</p>
              <p className="text-gray-600">服务可用性</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">30+</p>
              <p className="text-gray-600">GPU型号</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">200+</p>
              <p className="text-gray-600">企业客户</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-blue-600">10K+</p>
              <p className="text-gray-600">日均算力小时</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                专为AI打造的高性能云平台
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                从模型训练到推理部署，我们提供全生命周期的AI算力支持
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CloudFeatureCard
              title="高性能GPU集群"
              description="提供最新的NVIDIA A100/H100、AMD MI300系列GPU，满足大模型训练和推理需求"
              icon="/icons/gpu.svg"
            />
            <CloudFeatureCard
              title="弹性扩展"
              description="按需分配算力资源，灵活扩展，有效控制成本"
              icon="/icons/scale.svg"
            />
            <CloudFeatureCard
              title="模型推理优化"
              description="针对主流大模型的推理进行优化，提高吞吐量，降低延迟"
              icon="/icons/optimize.svg"
            />
            <CloudFeatureCard
              title="简易操作界面"
              description="直观的控制台界面，无需复杂配置，一键部署AI应用"
              icon="/icons/interface.svg"
            />
            <CloudFeatureCard
              title="按量计费"
              description="精准到秒级的计费系统，只为您使用的资源付费"
              icon="/icons/billing.svg"
            />
            <CloudFeatureCard
              title="企业级支持"
              description="7x24小时技术支持，确保您的业务稳定运行"
              icon="/icons/support.svg"
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="w-full py-20 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                行业解决方案
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                针对不同场景定制的AI算力解决方案，助力各行业数字化转型
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/model-training.svg" alt="模型训练" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">大规模模型训练</h3>
                <p className="text-gray-600 mb-4">
                  提供高性能分布式训练环境，加速企业自研大模型训练过程
                </p>
                <Link href="/solutions/training" className="text-blue-600 hover:text-blue-800 font-medium">
                  了解更多 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/inference.svg" alt="模型推理" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">高效推理服务</h3>
                <p className="text-gray-600 mb-4">
                  针对LLM、Diffusion等模型优化的推理服务，低延迟、高吞吐量
                </p>
                <Link href="/solutions/inference" className="text-blue-600 hover:text-blue-800 font-medium">
                  了解更多 →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/saas.svg" alt="SaaS部署" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI应用SaaS部署</h3>
                <p className="text-gray-600 mb-4">
                  一站式AI应用部署平台，快速将您的AI模型转化为可用的SaaS服务
                </p>
                <Link href="/solutions/saas" className="text-blue-600 hover:text-blue-800 font-medium">
                  了解更多 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                透明定价，按需付费
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                灵活的计费模式，为您的AI项目提供最具性价比的选择
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="按需计费"
              price="¥0.5"
              unit="/GPU小时起"
              description="按实际使用时长计费，灵活应对短期需求"
              features={[
                "无最低消费",
                "按秒计费",
                "即开即用",
                "多种GPU型号可选",
                "基础技术支持"
              ]}
              cta="立即开始"
              ctaLink="/register"
              popular={false}
            />
            <PricingCard
              title="资源包"
              price="¥3,000"
              unit="/起"
              description="预付费资源包，更高性价比"
              features={[
                "较按需计费低20%",
                "有效期6个月",
                "优先资源调度",
                "所有GPU型号适用",
                "标准技术支持"
              ]}
              cta="立即购买"
              ctaLink="/pricing/package"
              popular={true}
            />
            <PricingCard
              title="企业定制"
              price="定制"
              unit=""
              description="为大型企业和特殊需求定制的解决方案"
              features={[
                "专属资源池",
                "SLA保障",
                "定制化部署",
                "专属技术支持",
                "企业级安全保障"
              ]}
              cta="联系销售"
              ctaLink="/contact"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                客户评价
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                听听他们如何使用我们的云平台加速AI创新
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="斑码云平台的GPU性能非常稳定，对我们训练大型语言模型起到了关键作用，成本也比其他云服务提供商低了30%。"
              author="张博士"
              title="某AI研究院首席科学家"
              avatar="/avatars/testimonial-1.jpg"
            />
            <TestimonialCard
              quote="操作界面简洁直观，即使是非技术人员也能快速上手。客户支持团队反应迅速，帮我们解决了很多技术问题。"
              author="李总监"
              title="科技创业公司CTO"
              avatar="/avatars/testimonial-2.jpg"
            />
            <TestimonialCard
              quote="我们将图像生成模型部署在斑码云上，服务响应速度提升了2倍，这对用户体验至关重要。"
              author="王经理"
              title="某设计平台产品负责人"
              avatar="/avatars/testimonial-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              开始使用斑码云，加速您的AI创新
            </h2>
            <p className="text-gray-100 text-lg mb-8">
              立即注册，获得¥500算力代金券，体验高性能AI云平台
            </p>
            <div className="flex justify-center">
              <Button variant="white" size="lg" href="/register">
                立即开始
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
