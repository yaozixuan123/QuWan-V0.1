import { motion } from 'motion/react';
import { ChevronRight, Package, ClipboardList, Check } from 'lucide-react';
import { COMMISSIONS } from '../constants';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';

interface CommissionListViewProps {
  onBack?: () => void;
}

export function CommissionListView({ onBack }: CommissionListViewProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'InProgress': return { bg: '#e8dcc8', color: '#C9A96E', border: '#d4c4a8' };
      case 'Evaluating': return { bg: '#f0f0f0', color: '#666', border: '#ddd' };
      case 'Completed': return { bg: '#f5f5f5', color: '#999', border: '#eee' };
      default: return { bg: '#f5f5f5', color: '#666', border: '#eee' };
    }
  };

  const statusMap: Record<string, string> = {
    InProgress: '修复中',
    Evaluating: '评估中',
    Completed: '已完成'
  };

  return (
    <div style={{ paddingBottom: '200px', minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <TopAppBar title="我的委托" showBack showSearch onBack={onBack} />
      
      <main style={{ paddingTop: '96px', maxWidth: '1024px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <nav style={{ display: 'flex', gap: '32px', marginBottom: '32px', borderBottom: '1px solid rgba(0,0,0,0.05)', overflowX: 'auto' }}>
          {['全部', '评估中', '修复中', '已完成'].map((tab, idx) => (
            <button 
              key={tab}
              style={{
                paddingBottom: '12px',
                fontSize: '14px',
                color: idx === 0 ? '#C9A96E' : '#999',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                position: 'relative',
                whiteSpace: 'nowrap'
              }}
            >
              {tab}
              {idx === 0 && (
                <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', height: '2px', backgroundColor: '#C9A96E' }} />
              )}
            </button>
          ))}
        </nav>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {COMMISSIONS.map((item) => {
            const statusColor = getStatusColor(item.status);
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ backgroundColor: 'white', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}
              >
                <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
                  <div style={{ width: '144px', height: '144px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={item.image} alt={item.title} />
                  </div>
                  
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div>
                        <h3 style={{ fontSize: '18px', color: '#333', marginBottom: '4px' }}>{item.title}</h3>
                        <p style={{ fontSize: '11px', color: '#999' }}>订单编号: {item.orderNumber}</p>
                      </div>
                      <span style={{ 
                        padding: '6px 16px', 
                        borderRadius: '999px', 
                        fontSize: '12px',
                        backgroundColor: statusColor.bg,
                        color: statusColor.color,
                        border: `1px solid ${statusColor.border}`
                      }}>
                        {statusMap[item.status]}
                      </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#999' }}>
                        {item.status === 'InProgress' ? <ClipboardList size={16} /> : 
                         item.status === 'Evaluating' ? <Package size={16} /> : 
                         <Check size={16} />}
                        <span style={{ fontSize: '13px' }}>{item.dateLabel}: {item.date}</span>
                      </div>
                      
                      <button style={{ 
                        border: '1px solid #ddd', 
                        padding: '8px 24px', 
                        borderRadius: '999px', 
                        fontSize: '13px',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        {item.status === 'InProgress' ? '查看进度' : '查看详情'}
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
