// 简历数据 - 基于高萌锴的简历内容

export const profileData = {
  name: '高萌锴',
  nameEn: 'GAO MENGKAI',
  title: '资深前端工程师',
  subtitle: '7年极客经验 / 专注极致 Web 与跨端体验',
  motto: '努力超越自己，每天进步一点点',
  age: 29,
  gender: '男',
  ethnicity: '汉',
  origin: '河南南阳',
  experience: '7年+',
  phone: '18639812511',
  email: 'a842676425@163.com',
  position: '前端工程师',
  salary: '面议',
  availability: '一周内到岗',
}

export const educationData = {
  school: '南阳师范学院',
  major: '软件工程（本科）',
  period: '2016-09 ~ 2020-06',
  courses: [
    'C/C++程序设计',
    'Java语言程序设计',
    '软件工程',
    '计算机原理',
    'Linux操作系统与网络编程',
    'WEB技术与应用',
    '数据结构与算法',
    '数据库开发技术',
  ],
}

export const skillsData = [
  {
    id: 1,
    name: 'Vue全家桶',
    level: 95,
    detail: '熟练掌握Vue全家桶阅读过源码、使用 Vue.js及vue-electron及其他工具库完成项目开发',
    tags: ['Vue2', 'Vue3', 'Vuex', 'Pinia', 'Vue-Router'],
  },
  {
    id: 2,
    name: 'Git版本管理',
    level: 90,
    detail: '熟练使用 Git 进行代码的版本、分支管理，熟悉码云及 GitHub、GitLab 的可视化操作',
    tags: ['Git', 'GitHub', 'GitLab'],
  },
  {
    id: 3,
    name: 'Web安全',
    level: 80,
    detail: '熟悉浏览器的同源策略，了解和熟练使用 jsonp、cors 等跨域解决方案、了解浏览器进线程、了解XSS、CSRF攻击、了解网络劫持，能更好处理安全问题',
    tags: ['XSS', 'CSRF', 'CORS', 'JSONP'],
  },
  {
    id: 4,
    name: 'HTML5/CSS3',
    level: 92,
    detail: '熟悉 HTML5、CSS3 新特性，进行web、移动端的开发，熟练使用预处理器 sass,less,stylus',
    tags: ['HTML5', 'CSS3', 'Sass', 'Less', 'Stylus'],
  },
  {
    id: 5,
    name: 'JavaScript',
    level: 90,
    detail: '熟练使用 jquery lodash 等类库操作 dom 和数据，熟练掌握原生 JavaScript，了解作用域、原型链、闭包、线程机制和事件循环机制等',
    tags: ['ES6+', 'DOM', 'BOM', 'TypeScript'],
  },
  {
    id: 6,
    name: '前端工程化',
    level: 85,
    detail: '熟练使用 babel 进行代码转译，webpack 构建前端工程配置',
    tags: ['Webpack', 'Vite', 'Babel', 'Rollup'],
  },
  {
    id: 7,
    name: 'UI还原',
    level: 88,
    detail: '熟练掌握 h5 标签语义化，能够较高精度还原 UI 设计稿',
    tags: ['Flex', 'Grid', '响应式', '像素级还原'],
  },
  {
    id: 8,
    name: 'Vue3 + TS',
    level: 88,
    detail: '使用并了解Vue3.0 + Vite + TypeScript，熟悉MVC、MVVM开发模式',
    tags: ['Vue3', 'Vite', 'TypeScript', 'Composition API'],
  },
  {
    id: 9,
    name: '全栈开发',
    level: 78,
    detail: '从0到1开发15个项目，一套完整的商城项目，从后台管理系统到商城页面以及订单页面支付页面以及AI机器人对话，涉及多个域名之间的数据交互和判断',
    tags: ['Node.js', 'Electron', 'PWA', '全栈'],
  },
  {
    id: 10,
    name: 'HTTP/网络',
    level: 75,
    detail: '了解 http 协议、客户端与服务器通信原理',
    tags: ['HTTP', 'HTTPS', 'WebSocket', 'RESTful'],
  },
  {
    id: 11,
    name: '移动端开发',
    level: 82,
    detail: '参与移动端 H5、小程序、原生应用框架体系设计以及前端工程体系的落地',
    tags: ['H5', '小程序', 'PWA', '跨端'],
  },
]

export const workExperienceData = [
  {
    id: 1,
    period: '2023-03 ~ 2026-06',
    company: '金果未来公司',
    position: '前端工程师',
    responsibilities: [
      '负责公司国外借贷业务的前端开发工作，包括 APP、H5 页面和 PWA 应用的开发与维护',
      '主导多个项目从 Vue2 重构到 Vue3，使用 Composition API 重构核心业务逻辑，提升项目性能和开发效率',
      '负责前端模块的整体架构设计和代码规范制定，引入 TypeScript 增强类型安全',
      '开发海外借贷 APP 项目，使用 Vue3、Vite、Pinia、TypeScript 技术栈，负责核心业务模块开发',
      '开发 H5 营销活动平台，实现抽奖、优惠券、邀请返利等多种营销玩法',
      '将核心业务改造为 PWA 应用，实现 Service Worker 缓存策略，支持离线访问和消息推送',
      '优化首屏加载速度，将白屏时间从 3s 降低到 1.2s，打包时间缩短 40%',
      '集成第三方支付和风控系统，确保交易安全',
    ],
    projects: [
      {
        name: '海外借贷 APP',
        tech: 'Vue3, Vite, Pinia, TypeScript, Vant UI',
        description: '面向海外用户的借贷服务平台，提供贷款申请、审核、还款等核心功能',
        features: [
          '核心业务模块开发，包括用户认证、贷款申请流程、还款管理等',
          '设计并实现可复用业务组件库，提高开发效率30%',
          '优化首屏加载速度，白屏时间从3s降至1.2s',
          '集成第三方支付和风控系统',
        ],
      },
      {
        name: 'H5营销活动平台',
        tech: 'Vue2/Vue3, Vuex, Axios',
        description: '面向海外市场的营销活动平台，支持多种营销玩法',
        features: [
          '开发抽奖、优惠券、邀请返利等营销活动页面',
          '实现活动数据可视化展示',
          '优化移动端适配方案',
        ],
      },
      {
        name: 'PWA渐进式应用',
        tech: 'Vue3, PWA, Service Worker',
        description: '将核心业务改造为PWA应用，提升用户体验',
        features: [
          '实现Service Worker缓存策略，支持离线访问',
          '添加桌面快捷方式功能，提升用户留存率',
          '实现消息推送功能，提高用户活跃度',
        ],
      },
    ],
  },
  {
    id: 2,
    period: '2021-05 ~ 2023-02',
    company: '北京鸿蒙蝴蝶云公司',
    position: '前端工程师（前端组长）',
    responsibilities: [
      '负责维护、开发公司多个项目，优化项目安全性能问题，持续优化前端架构，提升性能和开发效率以及维护开发成本',
      '与产品经理和运营人员沟通优化公司产品页面以及功能实现流程',
      '重构公司部分老项目，对比之前老项目提高双倍运行效率比，后期开发人员更便捷维护',
      '参与开发APP对接项目，开发h5页面与app数据进行交互',
      '关注前端前沿技术研究，通过新技术服务团队和业务，保证前端架构处于先进水平',
    ],
    projects: [
      {
        name: '鸿蒙通桌面应用系统',
        tech: 'Vue, Vue-Electron, ElementUI',
        description: '基于Electron的桌面应用系统',
        features: [
          'Web核心设计开发',
          'Electron桌面端封装与优化',
          '原生交互能力实现',
        ],
      },
      {
        name: '智能云终端',
        tech: 'Vue, Vuex, Vue-Router, ElementUI, Axios',
        description: '云终端大数据展示，视频监测数据统计',
        features: [
          '资质审核时使用jsencrypt插件对参数进行RSA加密',
          '自定义代码模块上传时进行encodeURIComponent编码操作',
          '用户自定义广告位置代码，鼠标点击位置即弹窗出现位置',
          '用户商城页面扫描自查',
          '云终端开通以及资质审核对用户账号权限操作',
        ],
      },
      {
        name: '数字乡村3D展示',
        tech: 'Vue, Vuex, Vue-Router, ElementUI, Axios',
        description: '展示数字乡村商家统计信息',
        features: [
          '3D动态旋转4阶魔方，鼠标移入魔方展开与闭合动画',
          '多个模块循环旋转样式',
          '3D数据球统计展示',
          'CSS帧动画以及毛玻璃效果展示',
        ],
      },
      {
        name: '智网前台检测系统 / 后台管理系统',
        tech: 'Vue, Vuex, Vue-Router, ElementUI, Axios, WebSocket',
        description: '智网系统主要用于网络资源的监控、抓取，其前台功能包括音视频检测、网站监测、图片检测',
        features: [
          '多个扫描模块使用WebSocket更新进度样式、数据展示进行数据实时更新',
          '多种业务逻辑处理，复杂数据类型大量处理',
          '对ElementUI表单进行二次封装模仿ant组件库封装',
          'APP与H5使用webJS/messageHandlers方法进行交互',
        ],
      },
    ],
  },
  {
    id: 3,
    period: '2019-06 ~ 2021-04',
    company: '易有料科技公司',
    position: '前端工程师',
    responsibilities: [
      '负责维护、开发公司后台管理系统、用户使用系统',
      '在项目中部分模块引入 Vue3 的相关新特性，提升研发效率和系统性能',
      '负责公司项目的 H5/Web 端的前端开发及维护工作',
      '参与需求的设计研发，以及易用性的优化，为客户带来最佳的体验',
    ],
    projects: [
      {
        name: '易有料后台运营管理系统',
        tech: 'Vue, Vue-Router, ElementUI, Axios',
        description: '独立式开发方式，后台包含多个管理模块，内容分发以及内容权限，管理内容收付费情况',
        features: [
          '运营人员管理拉取后的内容，分发客户浏览权限',
          '统计人员统计内容日输出量以及浏览量',
          '审核人员审核内容是否有违规违法内容',
        ],
      },
      {
        name: '百川系统',
        tech: 'React, Redux, Ant Design, Axios',
        description: '用户对于自建内容的集合管理，以及对内容的统一输出',
        features: [
          '用户申请注册账号创建应用后可自建内容并投递',
          '用户可管理内容的上下架状态',
          '内容创建可分为视频、音频、文章三大类',
          '参与1.0 UI及功能改版全过程以及2.0系统完全改版全过程',
        ],
      },
    ],
  },
]

export const selfEvaluation = [
  '有很强的责任心和执行力，能够认真仔细地完成本职工作。能够适应快节奏的工作状态。',
  '有良好的前端编程能力和编程习惯，致力于代码的整体结构规范及优化，有对于代码格式整洁的轻微强迫症。',
  '有良好的沟通能力和团队合作意识，工作中遇到的问题能及时和同事进行沟通，分工合作的同时可以很快的提出各种前端后台问题的解决方案。',
  '具有很强的学习能力和对新技术的追求精神，对前端开发有浓厚的兴趣，关注前端前沿技术，并乐于钻研。',
]
