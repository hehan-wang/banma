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
                <br />
                支持DeepSeek满血版！
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                为AI开发者和企业提供稳定、高性能、低成本的算力解决方案，
                加速您的AI模型推理
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" size="lg" href="https://cloud.wenwen-ai.com/account">
                  注册免费试用
                </Button>
                <Button variant="outline" size="lg" href="https://cloud.wenwen-ai.com/pricing">
                  查看模型定价
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
                我们提供全方位的AI推理算力支持
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CloudFeatureCard
              title="高性能GPU集群"
              description="提供最新的NVIDIA A100/H100、AMD MI300系列GPU，满足大模型推理需求"
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
              description="直观的控制台界面，无需复杂配置，一键接入AI应用"
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
                针对不同场景定制的AI推理算力解决方案，助力各行业数字化转型
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/inference.svg" alt="金融服务" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">金融服务</h3>
                <p className="text-gray-600 mb-4">
                  为金融机构提供智能风控系统、个性化投资顾问和自动化客户服务，提升决策效率和用户体验
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/model-training.svg" alt="教育科技" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">教育科技</h3>
                <p className="text-gray-600 mb-4">
                  打造智能学习平台和个性化教育内容，通过AI技术提供自适应学习路径和实时反馈系统
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/saas.svg" alt="零售电商" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">零售电商</h3>
                <p className="text-gray-600 mb-4">
                  提供智能推荐系统、视觉搜索和需求预测分析，优化库存管理并提升用户购物体验
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/optimize.svg" alt="医疗健康" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">医疗健康</h3>
                <p className="text-gray-600 mb-4">
                  支持医学影像诊断、智能病历分析和药物研发，提高诊疗精准度并加速新药发现过程
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/gpu.svg" alt="智能制造" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">智能制造</h3>
                <p className="text-gray-600 mb-4">
                  实现生产线智能监控、设备预测性维护和质量控制自动化，提高生产效率和产品良率
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Image src="/icons/interface.svg" alt="内容创作" width={24} height={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">内容创作</h3>
                <p className="text-gray-600 mb-4">
                  为媒体和创意行业提供AI辅助创作、智能内容生成和个性化推荐，提升内容质量和用户参与度
                </p>
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
              title="按Token计费"
              price="¥0.002"
              unit="/1K tokens起"
              description="按实际使用的token量计费，适合API调用场景"
              features={[
                "无最低消费",
                "精准计量",
                "支持主流大模型",
                "API简单集成",
                "基础技术支持"
              ]}
              cta="立即开始"
              ctaLink="https://cloud.wenwen-ai.com/model"
              popular={true}
            />
            <PricingCard
              title="独占GPU实例"
              price="¥3000"
              unit="/月起"
              description="独占GPU资源，确保稳定性能和隐私安全"
              features={[
                "完全独占资源",
                "按月计费",
                "多种GPU型号可选",
                "自定义部署环境",
                "标准技术支持"
              ]}
              cta="立即购买"
              ctaLink="/pricing/dedicated"
              popular={false}
            />
            <PricingCard
              title="企业定制"
              price="待定"
              unit=""
              description="为企业提供定制化的AI算力一体机解决方案"
              features={[
                "专属硬件配置",
                "本地化部署",
                "数据安全保障",
                "专属技术支持",
                "企业级SLA保障"
              ]}
              cta="联系客服"
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
              quote="斑码云平台的GPU性能非常稳定，对我们的大型语言模型推理起到了关键作用，成本也比其他云服务提供商低了30%。"
              author="张博士"
              title="某AI研究院首席科学家"
            />
            <TestimonialCard
              quote="操作界面简洁直观，即使是非技术人员也能快速上手。客户支持团队反应迅速，帮我们解决了很多技术问题。"
              author="李总监"
              title="科技创业公司CTO"
            />
            <TestimonialCard
              quote="我们在斑码云使用独占实例的DeepSeek大模型推理服务，响应速度提升了2倍，这对用户体验至关重要。"
              author="王经理"
              title="某设计平台产品负责人"
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
              立即注册，获得¥15算力代金券，体验高性能AI云平台
            </p>
            <div className="flex justify-center">
              <Button variant="white" size="lg" href="https://cloud.wenwen-ai.com/account">
                立即开始
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
