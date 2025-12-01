import React from 'react';
import './ProductInfo.css';

const ProductInfo = () => {
  const features = [
    { icon: '🧨', title: '全自动装药系统', description: '实现雷管、炸药、水袋一体化自动安装，大幅提升爆破作业效率。' },
    { icon: '🔧', title: '强兼容性设计', description: '适配市场主流三臂凿岩车，扩展性强，部署便捷。' },
    { icon: '👁️', title: '机器视觉定位', description: '基于先进机器视觉技术，实现掌子面炮孔自动识别与精确定位。' },
    { icon: '⏱️', title: '高效作业能力', description: '相比人工装药方式，节约作业时间约50%，显著缩短工序衔接。' },
    { icon: '👥', title: '人员配置优化', description: '传统9人作业缩减至3人以内，大幅降低人力需求。' },
    { icon: '🛡️', title: '安全风险控制', description: '远程自动化操作，极大降低装药工序安全风险，保障施工安全。' },
    { icon: '💰', title: '成本节约显著', description: '自动化装药减少人工成本，优化施工流程，综合成本大幅降低。' },
    { icon: '🚀', title: '技术成熟可靠', description: '第一代样机研发完成，已完成大部分功能的现场验证，技术稳定。' }
];

const specifications = [
    { label: '适用隧道类型', value: '矿山、交通、水利等各类隧道' },
    { label: '适配设备', value: '主流三臂凿岩车' },
    { label: '装药效率', value: '比人工提升约50%' },
    { label: '作业人员配置', value: '≤3人' },
    { label: '人工对比配置', value: '传统需9人' },
    { label: '技术状态', value: '第一代样机已完成' },
    { label: '验证进度', value: '大部分功能已完成现场验证' },
    { label: '核心功能', value: '雷管、炸药、水袋一体化安装' },
    { label: '定位技术', value: '机器视觉自动定位' }
];

  return (
    <div className="product-info">
      <div className="hero-section">
        <h2>隧道爆破装药机器人</h2>
        <p className="hero-description">
          隧道爆破装药机器人实现了雷管、卷装炸药、封孔水袋的一体化自动安装，
          基于机器视觉技术精准定位掌子面炮孔位置，可适配市场主流三臂凿岩车，
          相比传统人工装药方式节约作业时间约50%，人员配置从9人减少至3人以内，
          大幅降低施工安全风险与人工成本，为隧道爆破作业的智能化、高效化、
          安全化提供全面技术保障，推动隧道施工自动化水平迈上新台阶。
        </p>
      </div>

      <div className="features-section">
        <h3>核心特性</h3>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="specifications-section">
        <h3>技术规格</h3>
        <div className="specs-grid">
          {specifications.map((spec, index) => (
            <div key={index} className="spec-item">
              <span className="spec-label">{spec.label}</span>
              <span className="spec-value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="video-cta">
        <p>想进一步了解？观看完整介绍视频了解产品实力。</p>
        <a
          className="video-button"
          href="https://www.bilibili.com/video/BV1aaS6B4Er6/?vd_source=eb3a763f33da8c162da4e6c6c62bcceb"
          target="_blank"
          rel="noreferrer"
        >
          点击观看介绍视频
        </a>
      </div>
    </div>
  );
};

export default ProductInfo;
