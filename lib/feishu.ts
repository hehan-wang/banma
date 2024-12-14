import axios from 'axios';

const APP_ID = process.env.FEISHU_APP_ID!;
const APP_SECRET = process.env.FEISHU_APP_SECRET!;
const TABLE_ID = process.env.FEISHU_TABLE_ID!;
const BASE_URL = 'https://open.feishu.cn/open-apis';

// 获取访问令牌
async function getAccessToken() {
  try {
    const response = await axios.post(`${BASE_URL}/auth/v3/tenant_access_token/internal`, {
      app_id: APP_ID,
      app_secret: APP_SECRET,
    });
    return response.data.tenant_access_token;
  } catch (error) {
    console.error('Failed to get access token:', error);
    throw error;
  }
}

// 创建记录
export async function createBitableRecord(data: any) {
  try {
    const token = await getAccessToken();
    const response = await axios.post(
      `${BASE_URL}/bitable/v1/tables/${TABLE_ID}/records`,
      {
        fields: {
          "姓名": data.name,
          "邮箱": data.email,
          "电话": data.phone || '',
          "主题": data.subject,
          "留言内容": data.message,
          "提交时间": new Date().toLocaleString('zh-CN')
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to create record:', error);
    throw error;
  }
}