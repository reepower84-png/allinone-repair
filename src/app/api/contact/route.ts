import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

async function sendDiscordNotification(name: string, phone: string, message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord webhook URL not configured');
    return;
  }

  const embed = {
    embeds: [
      {
        title: '새로운 상담 문의가 접수되었습니다!',
        color: 0x2563eb,
        fields: [
          {
            name: '이름',
            value: name,
            inline: true,
          },
          {
            name: '연락처',
            value: phone,
            inline: true,
          },
          {
            name: '문의 내용',
            value: message,
            inline: false,
          },
        ],
        footer: {
          text: '올인원설비',
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(embed),
    });
  } catch (error) {
    console.error('Discord notification failed:', error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          phone,
          message,
          status: '대기중',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: '데이터 저장 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    // Send Discord notification
    await sendDiscordNotification(name, phone, message);

    return NextResponse.json({ success: true, contact: data });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
