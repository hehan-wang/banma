import { NextResponse } from 'next/server';
import { createBitableRecord } from '@/lib/feishu';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await createBitableRecord(data);
    
    return NextResponse.json(
      { success: true, message: '提交成功' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { success: false, error: '提交失败，请稍后重试' },
      { status: 500 }
    );
  }
}