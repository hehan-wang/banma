# 斑码AI - 智能体解决方案平台

斑码AI是一个专注于AI智能体领域的技术平台，为企业和个人提供智能化解决方案。

## 🌟 特色功能

- **AI智能体产品**
  - 问问AI - 支持多种主流AI模型的稳定访问
  - 问问Agent - 基于大模型的可视化AI应用构建平台
  - 问问API - 集成主流AI模型接口服务

- **专业课程体系**
  - 《小白的AI编程提效课》
  - 《AI自动化爆款训练营》
  - 《斑码合伙人》

- **行业解决方案**
  - AI智能客服
  - AI智能营销
  - AI标书生成

## 🚀 技术栈

- [Next.js 15](https://nextjs.org) - React框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com) - 样式框架
- [Framer Motion](https://www.framer.com/motion/) - 动画效果
- [Headless UI](https://headlessui.com/) - 无样式UI组件
- [React Hook Form](https://react-hook-form.com/) - 表单处理
- [Swiper](https://swiperjs.com/) - 轮播组件
- [TSParticles](https://particles.js.org/) - 粒子效果

## 🛠️ 开发环境

### 前置要求

- Node.js (v18+)
- npm/yarn/pnpm/bun

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/yourproject.git
```

2. 安装依赖
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. 启动开发服务器
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。


### 飞书多维表格配置

在使用飞书多维表格存储联系表单数据之前，需要进行以下配置：

1. **创建飞书开放平台应用**
   - 访问[飞书开放平台](https://open.feishu.cn/app)
   - 点击"创建企业自建应用"
   - 填写应用名称和描述
   - 在"应用功能"中开启"多维表格"权限

2. **获取应用凭证**
   - 在应用详情页的"凭证与基础信息"中获取：
     - `FEISHU_APP_ID`: 应用 ID (App ID)
     - `FEISHU_APP_SECRET`: 应用密钥 (App Secret)

3. **创建多维表格**
   - 在飞书空间创建多维表格
   - 创建包含以下字段的数据表：
     ```
     姓名 (文本)
     微信 (文本)
     电话 (文本)
     主题 (文本)
     留言内容 (文本)
     提交时间 (日期时间)
     ```

4. **获取多维表格信息**
   - 打开多维表格，从URL获取应用token和表格ID：
     ```
     https://appxxxx.feishu.cn/base/bascnxxxxxxx/table/tblxxxxxx
                        ↑                  ↑          ↑
                    subdomain        app_token    table_id
     ```
   - `FEISHU_APP_TOKEN`: URL中的 base/basc... 部分
   - `FEISHU_TABLE_ID`: URL中的 table/tbl... 部分

5. **配置权限**
   - 在应用功能页面添加以下权限：
     - `bitable:record:read` - 读取多维表格记录
     - `bitable:record:write` - 写入多维表格记录
   - 在"版本管理与发布"中创建版本并发布

### 相关文档链接

- [飞书开放平台文档](https://open.feishu.cn/document/home/index)
- [多维表格API文档](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/bitable-overview)
- [获取访问凭证](https://open.feishu.cn/document/server-docs/api-call-guide/calling-process/get-access-token)
- [创建记录API](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/record/create)

### API 调用示例

```typescript
// 创建记录示例
const response = await axios.post(
  `${BASE_URL}/bitable/v1/apps/${APP_TOKEN}/tables/${TABLE_ID}/records`,
  {
    fields: {
      "姓名": "张三",
      "微信": "zhangsan",
      "电话": "13800138000",
      "主题": "产品咨询",
      "留言内容": "想了解更多产品信息",
      "提交时间": new Date().getTime()
    }
  },
  {
    headers: {
      'Authorization': `Bearer ${access_token}`,
      'Content-Type': 'application/json; charset=utf-8',
    }
  }
);
```

### 错误处理

常见错误码及解决方案：
- `99991663`: 访问令牌过期，需要重新获取
- `90100001`: 权限不足，检查应用权限配置
- `90100002`: 记录不存在
- `90100003`: 字段不存在，检查字段名称是否正确

更多错误码请参考[错误码文档](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/error-code)

## 📁 配置说明

### 环境变量配置

在项目根目录创建 `.env.local` 文件(已被 .gitignore 忽略)，添加以下配置:

```bash
# 飞书配置
FEISHU_APP_ID=cli_xxx
FEISHU_APP_SECRET=xxx
FEISHU_APP_TOKEN=xxx
FEISHU_TABLE_ID=xxx

# 百度统计
NEXT_PUBLIC_BAIDU_ANALYTICS_ID=your_analytics_id
```

### 配置文件说明

- `next.config.ts`: Next.js 配置文件，包含图片域名白名单等配置
- `tailwind.config.ts`: Tailwind CSS 配置文件，包含主题、动画等自定义配置
- `postcss.config.mjs`: PostCSS 配置文件，用于处理 CSS
- `tsconfig.json`: TypeScript 配置文件，包含编译选项和路径别名
- `eslint.config.mjs`: ESLint 配置文件，定义代码规范

## 📁 项目结构

```
project-root/
├── app/             # Next.js 13+ App Router
├── components/      # React组件
│   ├── layout/     # 布局组件
│   ├── sections/   # 页面区块组件
│   └── ui/         # 通用UI组件
├── lib/            # 工具函数和API
├── public/         # 静态资源
└── styles/         # 全局样式
```

## 📜 可用脚本

- `dev` - 运行开发服务器
- `build` - 构建生产版本
- `start` - 运行生产服务器
- `lint` - 运行代码检查

## 🌐 部署

### Vercel 部署步骤

1. Fork 本项目到自己的 GitHub 账号下

2. 在 [Vercel](https://vercel.com) 上注册账号并连接 GitHub

3. 点击 "New Project"，选择你 fork 的项目

4. 在 "Environment Variables" 部分添加环境变量:
   - FEISHU_APP_ID
   - FEISHU_APP_SECRET
   - FEISHU_APP_TOKEN
   - FEISHU_TABLE_ID
   - NEXT_PUBLIC_BAIDU_ANALYTICS_ID

5. 点击 "Deploy" 开始部署

6. 部署完成后，在 "Settings" -> "Domains" 中可以配置自定义域名

### 百度统计配置

1. 注册[百度统计](https://tongji.baidu.com)账号

2. 获取跟踪代码中的 ID

3. 将 ID 添加到环境变量 `NEXT_PUBLIC_BAIDU_ANALYTICS_ID` 中

4. 访问[百度统计](https://tongji.baidu.com)查看数据:
   - 访问量趋势
   - 用户来源
   - 页面分析
   - 转化目标

## 🚀 性能优化

- 使用 Next.js App Router 和 React Server Components
- 图片自动优化和响应式处理
- 路由预加载
- 组件懒加载
- 静态页面生成(SSG)

## 📞 联系我们

- 邮箱：hehan2048@gmail.com
- 电话：17600108055
- 地址：北京市中关村烟台协同创新中心17号楼

## 📄 许可证

[添加许可证信息]

---

Copyright © 2022-2024 斑码AI