import { Artisan, RestorationCase, Commission, DynamicUpdate } from './types';

export const ARTISANS: Artisan[] = [
  {
    id: '1',
    name: '李明远',
    title: '资深金缮工艺美术师',
    experience: '25年经验',
    rating: 4.9,
    reviews: 120,
    quote: '"万物皆有裂痕，那是光照进来的地方。"',
    bio: '擅长陶瓷碎裂后的金漆修复与大漆艺术。',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-Az4dsXjTNJSHwBJfqAw5NuOy1_Qx8u8tqM02jxwL73MSyLPn8kNug6DW46vaBeBetWJcMX3AHeJx03_aWXe2sGpDEmSj9walWKQuBddBk5NZk5d9CG0G17xh20EEdd09L8MmNIISTMhvOTZXinKvv-3bx8eWnaPMywZp924Xp0E2pf4u19sFtcnSwg1ToW9y7kIQ1naKOVl0PIE7gLCb6OGc95f2JWzwICxvu1zgZhirfTpoIT2Af8KZcgZby9MsJu27TbgymFM',
    featuredWorks: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqSCybBFclbfogRD8AB6pShoTGu9S4YPtp-tLVuXtfuEYLTW9pi8BmnU_x11ipPDKS0Q77PLY3fMYFFUY8ZP84bulqA-gtJeALj_3hC0-8qpbshAmY1GtNBz4vHlqdGhT_ucwJBDBwSzPQ2eRY5FNTbyoi-hcjONKCtmjXUwKkG9jLtdeGlw29mNSKX4UUgUXZK92_2q-X5p3J_PYEgtM4QP_dCcYfEj4_ommnRfhLIyYCuNjKcZYTEbX4cQ95HmaW3_DBQuFZB-w',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDlyuL9CA79jPYwzoBnyrI-n1ylY1V7nIJyUwzHegHid6N86QhctcgaYae0mLATZCHPVuilIYSTzTUUUuIYugni8tgjE5Dp6ImqQSo3SfEN25HGf-x1kLvdlug6b8QrLSR7-G4IyoZLabWdV3fC72jYzFnxkR71uSn9smszzQqqa_2_7nbfiRMlCvb4uF-r36HOMuKp61sqry-2LxKYDhY2AZ1lQEillM1u-MmGmrqSIMysEn8yniBlwhtyAoWa8DACySjLc9fR3gw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBkCqWp8JPwdW53ib4MNZ1NwsxqCwcdWeYYW6R0awv5zXXfGJ8nt8p52PQTBF6kbgOFKTB3nWBx7umMphSAk9Bb2of52MsN8xi3Pjvyf3dvfJhJPg-hLEgfsYPaIM3QEG3R5bCJ8KzMJ8Fe97ThxSW8MuLESZMtgDpJiaO1m_1DNgKL9kPZgWFLA1n9FhapYdePsaXTLwFOanbNUii3sXkIZsF0bbB81VhfOSK5SEuGerrjvdexeF0NheEA6xnZXIKlAfwo7te2Wfc'
    ],
    expertise: ['金缮', '瓷修'],
    region: '上海'
  },
  {
    id: '2',
    name: '陈婉仪',
    title: '国家级木作修复专家',
    experience: '18年经验',
    rating: 5.0,
    reviews: 86,
    quote: '专注于明清家具修复及古建筑构件还原，让每一块木头重新呼吸。',
    bio: '精细木工，古家具修复，榫卯结构还原专家。',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrDZqsvNcdYSMq7ioxwlsQTZjHYKQeTvALDMjpFzhuRos-MUvbC2tJV5eKUdrdZpBmYjLFHZ0RiP78VCBePqW0WiCb9mM2FiwuuVChdC6gfaTVUBIm19oalCDaseRXbtilCz-B1uTHeW9_ez9suqtlTPa_R9AlIlimVnJPJH7vlkkNq3sPkx_0nUGMUqih3ZO5GGBBDkWs-2Bn5DwOCth5tLj9VHS6ioINHYURY4VOFgU2BkEoYSjLL58ZD3crrdlT8WOuuJo5Gts',
    featuredWorks: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAjDJVL9nbmz48u3A9u-8XJSQ1dd02qV7im85q5kfHtOUWtP0LXgcZApY1hFSvPey0FZnklPAv8HajiSKoOmr1DirY74UERw7FgcmVMHPDCmTb0QUpZA7gytJCQrvLdUhJuMpDm6vdZaBvtFPv2bggJOrG3PA2SY05_AXVySMdMFahEldqdmH5bQ4HUf07mFzTwKGOnodkTRQEeG183Ht7b_J492-HvLde48MmQd1cAgMsS-Ctw9DkHJR_JBtNKc_21luI4JBzkY0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2VqfGotF3iyYcupI1wExlQQIb95TaIaf73nzjMuakn3QJrWQC91CE6fyPGaRljZ-dqRcwUdDGk6ZLsZ8x4SMTgNY1pkoUffnefkEMogER4hS175DP-GbHbWJ9647cECHihLRag7wYwzy0eGazfw7p5p4JG7SAu1d8bULnlsrdpZwxEhLNnpquZpKMJ20vyqA6ODnCZUOyaYlS5RcIyygyMIDl-UtmmBp1wvEsGA_iGo_VcqbZwpPt-tAbrgIsaI0KIpgaCI95eWw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDT2KtrliWEV1--J9YSqbB-T9_UklDedg__SRtSvZION1lkiNaOiKGAYqZ6iM-6YwnX5UambZ9wBDy2Oo9_wFTDkmqnZq8HRYt-scHPBfH9-UF0B1oQxs6zK6cwhV2VFuz5XhzOxx8sgKzfh6AOxiNFMS7tBxhMknrP-l6sJ6JgWo2WkDnYtG__KlVBkfJ7asJ7xD35STBilpf4WKi-d_xsHn9Tw8g03G9ETUcbRfgPpB2qKpiKfXRDaJ874bsJ8rgpafoNd2ln6WQ'
    ],
    expertise: ['木作'],
    region: '杭州'
  }
];

export const CASES: RestorationCase[] = [
  {
    id: '1',
    title: '宋代影青瓷盘修复',
    category: '金缮工艺',
    duration: '历时 14 天',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaf3VT1sE3f5_bnblXCvTEXpVcG3txCc07aNEPfbEDZMOUrz_cxu_GWZgkxTb6qzgBYXJM57X9CEDMgUG6ubEjP_443PG8SnxtDU9d9p0XQBIxFgX7BXpkFa_7NGLphYKgKggxYSvTF6TR44nxuxy0qywsXDSyqcXOvBGl8aOw9OtWJYhvza9KQ70acbWbToqZMGDiC5el_7CA6O5epzlZE0NacK1y6O2rXwLzfmjMl6jdXFmIqVmEW9vURvjs7c2FAqvpP1N8RQE',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACwhAkxAjv32-0w9O_QvFOgKVlBXKEkHL3zeWuLXxqU-4F7H2gT8rdJDAz0FkdwF4rLYQw_IrPj4ai8XOsNxO_WrRvDEDqxxLJ48kXhlpStGfDK1CsAmXszmDkgApKutGNn6zRS-n27_TkqCEsTo1K1IE20MdmWHN__zZ5HxAWkllO_3NuD2Hep0cLBK-GGK_cxgGDT1RH82ByRVCtvDTirA_qFKX2j4F1szxhZheeHvB6Oi8xJMhOBbI3jXGP6mg0dGA_NNgOwTs'
  },
  {
    id: '2',
    title: '限定版潮玩表面翻新',
    category: '模型涂装',
    duration: '历时 5 天',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZj-FDnwNlE37NXlMbpgo5-sNOsxcDbzHhZ5sq7dFe5j0mZEuVUq76Wb5R6r55c_Vk4LRHAI3S1nWS7xi1IATFDXfPrWct8YkJzMh194PYTD-5uLwaa0AffhYbfQLGYpvQqquAfVUvo8Y-tTacJQEXXatQ2tjgarsaOAU9opSxz3uWBFz-djp-fUoMA0IgZUt4sLZx-VviS0y0m5KjyMMCJtU3Ai45cfL1LzJSk5EKjORJKFtArEdU0B0ulhPQIOxmyxvc2YWhyfQ',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAG95aRq07_ooWs44F8QdND5fq5yTuosSPyR13nSEV93XczTSG_Wypbv5O5ANIXk2GqlHgrAceYtzgBWNJkXx__QXTOzpmBjFfrjf3YPGcFZHEk19Y_LEbyMDCBLvK__yLxEm0pxJl3Y1w_uDZf_n1y3XhnQFf7wAcTc-T0c2gEUHTt9pMTSGHmXdL4h9gai9dl9V2qwG8pkwCy0EuP2a0n2pBrzjBqt6QCClnd-vnE7F_sw83D_I_-x1g_8iT6GDYP69mCQ5rnbE'
  }
];

export const COMMISSIONS: Commission[] = [
  {
    id: '1',
    title: '明代青花瓷盏',
    orderNumber: 'WX20231024001',
    status: 'InProgress',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe5CRrnn0EbxaLYd8Skikq3Kig9JHBiwNlRsZF5PqWVARMQzZ_REd6HJ-2WObez-6fEfx7SZ-Pr7j3sPJY7tOsTpzoct9Jd_dqvp4AcRe_eREFneOjwhEapw8GGqyvoQPydqwIs5hx9neKpDauZs-zY0HUdoTaAVeNYTSeGmpd7CoL0-xgKJieEBNaUav4oLqe761xl1l9V48zAZOC63cI7bVT96EE1dEIOus9p0JuFWgnWDVSXtU2VlA2O-oSiCw1Oq0w23Rlns4',
    date: '2023.11.15',
    dateLabel: '预计交付'
  },
  {
    id: '2',
    title: '清中期檀香木雕花盒',
    orderNumber: 'WX20231025012',
    status: 'Evaluating',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkTJOgaTGYM0oZKHsa29oNbl9OSco9bLpeIMz2a-capCQY7tyH3_wPPw3tzap_tKXDDdsfphVs0j4OkV71rENofE0kVw7S9zxLox2odKLF8R24O-KlFVzq1ggrb3SzaW9Zt8AcQGSB1yLzj8xYI8qFt21fZtSTGKzEhLzfLZUgoH7Sykl2uEmjszOvyWIQOy7izK74P4DMo_ebjIF-ME1scee9hxP7oSyH5jRjmoDbwNXOTh6MiMF6m0vgJ7oqz6woHoUOB8WqeBA',
    date: '2023.10.28',
    dateLabel: '预计评估完成'
  }
];

export const DYNAMIC_UPDATES: DynamicUpdate[] = [
  {
    id: '1',
    user: {
      name: '墨色春秋',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsagk60Rcs8OXvGjTz0aH9RUK2f2gFWefjfc8fandYslPsZ9K8OEBwYLSczJKxdM5d8BKHSzFJcS831P4LmOj8tfLdUWdbmz7XJgJJrRknGpc2huRQy8AkKY6D35D71HrM-ifbvBISUQpBlZHWSBbM0pZwkaIkoqYOyRD80IEw4-WuPGEbMG-0lrvX04kcYTeOLF_9us9RI-OBKUJE6AsAZ1r80-5EaSg1Aci3VHsjuQ1n8zuK5nB15IhIb1Idr1QM1SYDpmAEbtE',
      location: '西安',
      time: '刚刚'
    },
    content: '这件家传的宣德炉经过林老师的金缮修复，真的焕发了第二次生命，那种残缺的美感简直无法言喻。',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRsXsb3NSsiTd8yhk5oj-ts2HGtAft616o6-ko3vgAVGSy_rzwHaDWXHg58EmyOSr4Javz00mWDHXAZLi5J3pi9xHoLXVOQkCyl7BSlBDAT-BybfNjCxiDa8A2aNvYu_MjRNuqCzkRCwZvrQvNwbMu5Fe5rmNGuGoxk9ZJPNlCnMFUY3dnjHXaOufyz48Z7GT1Nh0bRQ4QOKOatm0VYIoxgkM_N5zWPV-66Rvlq_id0QjDriDd1Ar7WVKBh7GQl19Ou5arkl5gabM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuACwhAkxAjv32-0w9O_QvFOgKVlBXKEkHL3zeWuLXxqU-4F7H2gT8rdJDAz0FkdwF4rLYQw_IrPj4ai8XOsNxO_WrRvDEDqxxLJ48kXhlpStGfDK1CsAmXszmDkgApKutGNn6zRS-n27_TkqCEsTo1K1IE20MdmWHN__zZ5HxAWkllO_3NuD2Hep0cLBK-GGK_cxgGDT1RH82ByRVCtvDTirA_qFKX2j4F1szxhZheeHvB6Oi8xJMhOBbI3jXGP6mg0dGA_NNgOwTs'
    ],
    stats: { likes: 12, comments: 4 },
    type: '发起了修复'
  }
];
