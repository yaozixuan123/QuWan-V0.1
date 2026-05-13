import { motion } from 'motion/react';
import { MapPin, Phone, Map, ChevronRight, Clock } from 'lucide-react';
import { TopAppBar } from '../components/TopAppBar';

interface StudioSelectionViewProps {
  onNext?: () => void;
  onBack?: () => void;
}

export function StudioSelectionView({ onNext, onBack }: StudioSelectionViewProps) {
  return (
    <div style={{ paddingTop: '96px', minHeight: '100vh', backgroundColor: '#faf8f5', paddingBottom: '200px' }}>
      <TopAppBar title="到店寄修" showBack showNotifications onBack={onBack} />
      
      <main style={{ maxWidth: '768px', margin: '0 auto', padding: '0 32px' }}>
        <section style={{ marginTop: '32px' }}>
          <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '32px' }}>
            维修门店
          </h2>

          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ aspectRatio: '16/10', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', position: 'relative' }}>
              <img 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT-T9_5NUdvLMoCdfqlnMOSXZwIj9XgA2eHuvkeyW1SgpGl7Pw6sufkTINd5qC_tSuZdyoG9GV_SyEKvdJUmeSq0cRVQYQJmzdPKsYaePSLF5Z1ON3wihERqpgv3qso_ILJBxjc1555Cx0SSDL_7nG0RR-jNESIvfvIN8vEEJGdPvXcpY2hn9mha2YJpIjQCZRd7Aqsj1NXn4npDNtGg-1f8xHMWNU53_-2eoqhXpX9Bi1DP8IRvEdAPSn0ZOE95DeC1D1Yl6hjwk" 
                alt="Store"
              />
              <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'rgba(201, 169, 110, 0.9)', color: 'white', padding: '6px 16px', borderRadius: '999px', fontSize: '10px', fontWeight: 'bold' }}>
                2.4KM AWAY
              </div>
            </div>

            <div style={{ padding: '0 16px 24px' }}>
              <div style={{ marginBottom: '16px' }}>
                <h3 style={{ fontSize: '20px', color: '#C9A96E', marginBottom: '8px' }}>珍修坊 · 上海静安店</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>上海市静安区南京西路 1266 号恒隆广场一座</p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <Clock size={20} color="#999" strokeWidth={1.5} />
                <span style={{ fontSize: '12px', color: '#666' }}>营业时间: 10:00 - 22:00 (周一至周日)</span>
              </div>

              <div style={{ paddingTop: '24px', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C9A96E' }}>
                    <Phone size={20} strokeWidth={1.5} />
                    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>联系电话</span>
                  </button>
                  <button style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C9A96E' }}>
                    <Map size={20} strokeWidth={1.5} />
                    <span style={{ fontSize: '13px', fontWeight: 'bold' }}>查看地图</span>
                  </button>
                </div>
                <ChevronRight size={20} color="#ccc" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '24px', backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(0,0,0,0.05)', zIndex: 50 }}>
        <div style={{ maxWidth: '768px', margin: '0 auto' }}>
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            style={{ width: '100%', padding: '20px', borderRadius: '16px', backgroundColor: '#C9A96E', color: 'white', fontSize: '18px', border: 'none', cursor: 'pointer', letterSpacing: '0.3em' }}
          >
            确认选择此门店
          </motion.button>
        </div>
      </div>
    </div>
  );
}
