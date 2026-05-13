import { motion } from 'motion/react';
import { Store, MapPin, Info } from 'lucide-react';
import { TopAppBar } from '../components/TopAppBar';

interface ShipmentViewProps {
  onNext?: () => void;
  onBack?: () => void;
}

export function ShipmentView({ onNext, onBack }: ShipmentViewProps) {
  return (
    <div style={{ paddingBottom: '200px', minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <TopAppBar title="寄件信息" showBack onBack={onBack} />
      
      <main style={{ paddingTop: '96px', maxWidth: '768px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <section style={{ backgroundColor: 'white', borderRadius: '24px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ backgroundColor: '#f5f3f0', padding: '16px', borderRadius: '16px' }}>
            <Store size={24} color="#C9A96E" strokeWidth={1.5} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '10px', color: '#C9A96E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '4px' }}>已选择工作坊</p>
            <h2 style={{ fontSize: '18px', marginBottom: '4px' }}>静心时光工作室</h2>
            <p style={{ fontSize: '14px', color: '#999' }}>上海市静安区延安中路800号, 200040</p>
          </div>
        </section>

        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '40px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>
            <label style={{ display: 'block', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px', fontWeight: 'bold' }}>寄件人姓名</label>
            <input style={{ width: '100%', backgroundColor: 'transparent', border: 'none', fontSize: '18px', padding: '0' }} placeholder="请输入寄件人姓名" />
          </div>

          <div style={{ marginBottom: '40px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>
            <label style={{ display: 'block', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px', fontWeight: 'bold' }}>联系电话</label>
            <input style={{ width: '100%', backgroundColor: 'transparent', border: 'none', fontSize: '18px', padding: '0' }} placeholder="请输入 11 位手机号码" type="tel" />
          </div>

          <div style={{ marginBottom: '40px', paddingBottom: '12px', borderBottom: '1px solid #f0f0f0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px', fontWeight: 'bold' }}>取件地址</label>
                <input style={{ width: '100%', backgroundColor: 'transparent', border: 'none', fontSize: '18px', padding: '0' }} placeholder="省市区、街道、楼牌号" />
              </div>
              <button style={{ padding: '8px', color: '#C9A96E', background: 'none', border: 'none', cursor: 'pointer' }}>
                <MapPin size={20} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '24px', marginTop: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              保价服务
              <Info size={16} color="#ccc" />
            </h3>
            <p style={{ fontSize: '12px', color: '#999' }}>建议价值超过 ¥10,000 的物品勾选</p>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <input style={{ display: 'none' }} type="checkbox" defaultChecked />
            <div style={{ width: '48px', height: '24px', backgroundColor: '#C9A96E', borderRadius: '999px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '2px', left: '26px', width: '20px', height: '20px', backgroundColor: 'white', borderRadius: '50%', transition: 'all 0.2s' }} />
            </div>
          </label>
        </div>

        <p style={{ textAlign: 'center', fontSize: '10px', color: '#ccc', marginTop: '24px' }}>
          点击生成面单即表示您已阅读并同意 <span style={{ color: '#C9A96E', textDecoration: 'underline' }}>《寄送服务协议》</span>
        </p>
      </main>

      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '24px', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(0,0,0,0.05)', zIndex: 50 }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            style={{ width: '100%', padding: '16px', backgroundColor: '#e8dcc8', color: 'white', borderRadius: '16px', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold', letterSpacing: '0.3em', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          >
            生成寄修面单
          </motion.button>
        </div>
      </div>
    </div>
  );
}
