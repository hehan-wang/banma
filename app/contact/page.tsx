// src/app/contact/page.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // 这里添加您的表单提交逻辑
      console.log('Form data:', data);
      await new Promise(resolve => setTimeout(resolve, 1000)); // 模拟API调用
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">联系我们</h1>
        
        {/* 联系信息 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">联系方式</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium">地址：</span>
                上海市浦东新区xxx路xxx号
              </p>
              <p>
                <span className="font-medium">电话：</span>
                021-xxxxxxxx
              </p>
              <p>
                <span className="font-medium">邮箱：</span>
                contact@example.com
              </p>
              <p>
                <span className="font-medium">工作时间：</span>
                周一至周五 9:00-18:00
              </p>
            </div>
          </div>

          {/* 地图组件 */}
          <div className="bg-gray-100 rounded-lg">
            <div className="h-full min-h-[200px] flex items-center justify-center">
              地图组件
            </div>
          </div>
        </div>

        {/* 联系表单 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">在线留言</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                姓名 <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: '请输入姓名' })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                邮箱 <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: '请输入邮箱',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '请输入有效的邮箱地址'
                  }
                })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                电话
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                主题 <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                {...register('subject', { required: '请输入主题' })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                留言内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                {...register('message', { required: '请输入留言内容' })}
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-blue-300 transition-colors duration-200"
            >
              {isSubmitting ? '提交中...' : '提交'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">提交成功！我们会尽快与您联系。</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">提交失败，请稍后重试。</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}