import { motion } from 'motion/react';
import { Check, Copy, Home } from 'lucide-react';

interface LabelSuccessViewProps {
  onNext?: () => void;
  onBack?: () => void;
}

export function LabelSuccessView({ onNext, onBack }: LabelSuccessViewProps) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf8f5', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <div style={{ width: '64px', height: '64px', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', border: '1px solid rgba(201,169,110,0.1)' }}>
          <Check size={32} color="#e8dcc8" />
        </div>
        <h1 style={{ fontSize: '24px', letterSpacing: '0.2em', marginBottom: '8px' }}>面单生成成功</h1>
        <p style={{ fontSize: '14px', color: '#999' }}>快递员将按照预约时间上门取件</p>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
      >
        <div style={{ padding: '24px', borderBottom: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#faf8f5' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '20px', color: '#C9A96E' }}>珍修</span>
            <span style={{ fontSize: '10px', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Digital Label</span>
          </div>
          <span style={{ fontSize: '11px', color: '#C9A96E', backgroundColor: '#e8dcc8', padding: '4px 12px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>已保价</span>
        </div>

        <div style={{ padding: '32px' }}>
          <div style={{ marginBottom: '32px' }}>
            <p style={{ fontSize: '10px', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px' }}>物流单号</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '20px', letterSpacing: '0.1em' }}>SF142 9830 5521</h2>
              <button style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C9A96E', border: '1px solid #e8dcc8', padding: '6px 12px', borderRadius: '8px', backgroundColor: 'transparent', cursor: 'pointer' }}>
                <Copy size={16} />
                <span style={{ fontSize: '11px' }}>复制</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '4px', top: '8px', bottom: '8px', width: '1px', backgroundColor: 'rgba(0,0,0,0.1)' }} />
            
            <div style={{ display: 'flex', gap: '24px', position: 'relative' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '2px solid #e8dcc8', backgroundColor: 'white', marginTop: '6px', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '10px', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '4px' }}>寄件人</p>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '4px' }}>张先生 138****0000</h3>
                <p style={{ fontSize: '11px', color: '#999' }}>北京市朝阳区建国路88号蓝堡国际中心2座</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '24px', position: 'relative' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#C9A96E', marginTop: '6px', flexShrink: 0 }} />
              <div>
                <p style={{ fontSize: '10px', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '4px' }}>收件人</p>
                <h3 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '4px' }}>珍修工作室（总部）</h3>
                <p style={{ fontSize: '11px', color: '#999' }}>上海市静安区南京西路 1266 号恒隆广场一座 26 层</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div style={{ width: '100%', maxWidth: '400px', marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button 
          onClick={onNext}
          style={{ width: '100%', padding: '16px', backgroundColor: '#C9A96E', color: 'white', borderRadius: '16px', border: 'none', cursor: 'pointer', fontSize: '14px', letterSpacing: '0.2em', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        >
          查看修复进度
        </button>
        <button 
          onClick={onBack}
          style={{ width: '100%', padding: '16px', backgroundColor: 'white', border: '1px solid #ddd', color: '#666', borderRadius: '16px', cursor: 'pointer', fontSize: '14px', letterSpacing: '0.2em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          <Home size={16} />
          返回首页
        </button>
      </div>

      <p style={{ marginTop: '48px', textAlign: 'center', fontSize: '20px', letterSpacing: '0.5em', color: '#f5f3f0' }}>珍修</p>
    </div>
  );
}
