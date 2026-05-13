import { catalogSchema, type CatalogPayload } from '../shared/apiSchemas';

/** 未连接 Supabase 或与数据库通信失败时的确定性回退数据 */
const raw: CatalogPayload = {
  caseStudies: [
    {
      id: '11111111-1111-1111-1111-111111111101',
      title: '宋代影青瓷盘修复',
      technique: '金缮工艺',
      duration: '14 天',
      beforeImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAaf3VT1sE3f5_bnblXCvTEXpVcG3txCc07aNEPfbEDZMOUrz_cxu_GWZgkxTb6qzgBYXJM57X9CEDMgUG6ubEjP_443PG8SnxtDU9d9p0XQBIxFgX7BXpkFa_7NGLphYKgKggxYSvTF6TR44nxuxy0qywsXDSyqcXOvBGl8aOw9OtWJYhvza9KQ70acbWbToqZMGDiC5el_7CA6O5epzlZE0NacK1y6O2rXwLzfmjMl6jdXFmIqVmEW9vURvjs7c2FAqvpP1N8RQE',
      afterImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuACwhAkxAjv32-0w9O_QvFOgKVlBXKEkHL3zeWuLXxqU-4F7H2gT8rdJDAz0FkdwF4rLYQw_IrPj4ai8XOsNxO_WrRvDEDqxxLJ48kXhlpStGfDK1CsAmXszmDkgApKutGNn6zRS-n27_TkqCEsTo1K1IE20MdmWHN__zZ5HxAWkllO_3NuD2Hep0cLBK-GGK_cxgGDT1RH82ByRVCtvDTirA_qFKX2j4F1szxhZheeHvB6Oi8xJMhOBbI3jXGP6mg0dGA_NNgOwTs',
    },
    {
      id: '11111111-1111-1111-1111-111111111102',
      title: '限定版潮玩表面翻新',
      technique: '模型涂装',
      duration: '5 天',
      beforeImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZj-FDnwNlE37NXlMbpgo5-sNOsxcDbzHhZ5sq7dFe5j0mZEuVUq76Wb5R6r55c_Vk4LRHAI3S1nWS7xi1IATFDXfPrWct8YkJzMh194PYTD-5uLwaa0AffhYbfQLGYpvQqquAfVUvo8Y-tTacJQEXXatQ2tjgarsaOAU9opSxz3uWBFz-djp-fUoMA0IgZUt4sLZx-VviS0y0m5KjyMMCJtU3Ai45cfL1LzJSk5EKjORJKFtArEdU0B0ulhPQIOxmyxvc2YWhyfQ',
      afterImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBAG95aRq07_ooWs44F8QdND5fq5yTuosSPyR13nSEV93XczTSG_Wypbv5O5ANIXk2GqlHgrAceYtzgBWNJkXx__QXTOzpmBjFfrjf3YPGcFZHEk19Y_LEbyMDCBLvK__yLxEm0pxJl3Y1w_uDZf_n1y3XhnQFf7wAcTc-T0c2gEUHTt9pMTSGHmXdL4h9gai9dl9V2qwG8pkwCy0EuP2a0n2pBrzjBqt6QCClnd-vnE7F_sw83D_I_-x1g_8iT6GDYP69mCQ5rnbE',
    },
  ],
  restorers: [
    {
      id: '22222222-2222-2222-2222-222222222201',
      name: '林修平',
      id_title: '国家二级文物修复师',
      portrait:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDUyLuq3McL6isiteJU2nSZqg4KlKowPr1UTgEOPeTyF9jowWwjN4V4zBQs6NFGv1AvPaFrhKfxW-WLFKnvao-aFh23SEBs__QsZMoy_pjd_MVo-K_jXVvB16zwiP8IKrhfu9FkOTxYIosdWEvYpP9HCflcf6gdwH1mHN4NGdCT1ouyN5aojoYgXEJ2K7oPbiGiqDoZpEJFaUfc1XBUgSb4yxGRG8eIumrw0KEdWPRhJ9sVIRcnxtDgTdWv642gWDmY5ntPecuC5Po',
      rating: 4.9,
      repairs: '128',
    },
    {
      id: '22222222-2222-2222-2222-222222222202',
      name: '苏婉儿',
      id_title: '高级潮玩涂装专家',
      portrait:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCsagk60Rcs8OXvGjTz0aH9RUK2f2gFWefjfc8fandYslPsZ9K8OEBwYLSczJKxdM5d8BKHSzFJcS831P4LmOj8tfLdUWdbmz7XJgJJrRknGpc2huRQy8AkKY6D35D71HrM-ifbvBISUQpBlZHWSBbM0pZwkaIkoqYOyRD80IEw4-WuPGEbMG-0lrvX04kcYTeOLF_9us9RI-OBKUJE6AsAZ1r80-5EaSg1Aci3VHsjuQ1n8zuK5nB15IhIb1Idr1QM1SYDpmAEbtE',
      rating: 5,
      repairs: '342',
    },
  ],
  schemes: [
    {
      id: '33333333-3333-3333-3333-333333333301',
      name: '林清泉 师傅',
      type: '匠心推选',
      philosophy:
        '遵循“修旧如旧”的原则，采用传统天然大漆工艺，最大程度保留岁月的痕迹。',
      duration: '45',
      price: '8,200',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBHgrQeng3QRt6_Q5dD9jr5rz6rv3BI_O0_3W6zTeDjHkX8pJUciRsMjVMnlS5t6auJy4_bK3uILLEu_LtdOLF-umqq-nJ8_vVYrkmyUx1--dC2wb0sL43iy9Wp97q2R68HhGI7MKBkLSHXBg8u8mUauzNSdC8qtN1tMWUjwFZ44bKHjjq3JhhCzVOTiPcGvawc_oz-4h3XKDS7H1oFikjEDE4JNQjlX1U-_X2wm6dHDr5CdPiAt8D1OvVUjxrzLPVTXmLs9gv11lE',
    },
    {
      id: '33333333-3333-3333-3333-333333333302',
      name: '苏博文 实验室',
      type: '科技融合',
      philosophy:
        '利用3D扫描与纳米粘合技术。在分子层面进行结构加固，呈现出极简的现代美感。',
      duration: '20',
      price: '12,500',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC2ifCe6qja7jZnUQ6ma6EyPQN9QBO28ew9nibXBNSvih4Cx1h4jTvyEqFKOcUrZ4zAea3BcSb1UHIC0qqPj7m3cQFvlsPIXBWMNY1TdnlPcDi0GujHWEmS1oIKGiEL57J3GruD19KQljCBLn8t2qty3w7qHSAqeH7d0xlVA0in6eNpJS7xFTLAgOC6IJqaxKnznvLM-PY4b2UVp5RxMs2aTraqu6wKRLoOKSqQKqYScbRjQ7BUsl1QsiDA1w82H1B09dcqa8JHgI0',
    },
  ],
};

export function getSeedCatalog(): CatalogPayload {
  return catalogSchema.parse(raw);
}
