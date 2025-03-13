// src/app/contact/page.tsx
'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

interface FormData {
  name: string;
  wechat: string;
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
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setFeedbackMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('提交失败');
      }

      setFeedbackMessage('留言提交成功！');
      reset();
    } catch (error) {
      console.error('提交错误:', error);
      setFeedbackMessage('提交失败，请稍后重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">联系我们</h1>
        
        {/* 更新联系信息 */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">联系方式</h2>
            <div className="space-y-3">
              <p>
                <span className="font-medium">地址：</span>
                北京市中关村烟台协同创新中心17号楼
              </p>
              <p>
                <span className="font-medium">电话：</span>
                17600108055
              </p>
              <p>
                <span className="font-medium">邮箱：</span>
                hehan2048@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">扫码关注</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-lg mb-2 overflow-hidden">
                  <Image
                    src="/images/qr.jpg"
                    alt="微信二维码"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm">微信：hehan4096</p>
              </div>
              {/* <div className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-lg mb-2 overflow-hidden">
                  <Image
                    src="/images/wenwen.jpg"
                    alt="程序员鹤涵公众号二维码"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm">公众号：问问AI助手</p>
              </div> */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto rounded-lg mb-2 overflow-hidden">
                  <Image
                    src="/images/mp.jpg"
                    alt="程序员鹤涵公众号二维码"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm">公众号：程序员鹤涵</p>
              </div>
            </div>
          </div>
        </div>

        {/* 联系表单 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">在线留言</h2>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              <label htmlFor="wechat" className="block text-sm font-medium text-gray-700">
                微信
              </label>
              <input
                id="wechat"
                type="text"
                {...register('wechat')}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.wechat && (
                <p className="text-red-500 text-sm mt-1">{errors.wechat.message}</p>
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

            {feedbackMessage && (
              <p className="text-green-500 text-center">{feedbackMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}