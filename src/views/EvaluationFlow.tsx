import { motion } from 'motion/react';
import { Camera, Check, Info } from 'lucide-react';
import { TopAppBar } from '../components/TopAppBar';

export function StepIndicator({ current }: { current: number }) {
  return (
    <section style={{ marginBottom: '64px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '0', width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)', zIndex: -1 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px' }}>
        {[
          { id: 1, label: '上传照片' },
          { id: 2, label: '描述详情' },
          { id: 3, label: '专家评审' }
        ].map((step) => {
          const isCompleted = step.id < current;
          const isActive = step.id === current;
          
          return (
            <div key={step.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', backgroundColor: '#faf8f5', padding: '0 16px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isCompleted ? '#C9A96E' : isActive ? '#e8dcc8' : '#eee',
                color: isCompleted || isActive ? 'white' : '#999'
              }}>
                {isCompleted ? <Check size={20} /> : <span>{step.id}</span>}
              </div>
              <span style={{ fontSize: '10px', color: isActive ? '#C9A96E' : '#999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

interface EvaluationStepProps {
  onNext?: () => void;
  onBack?: () => void;
}

export function EvaluationStep1({ onNext, onBack }: EvaluationStepProps) {
  return (
    <div style={{ paddingBottom: '200px', minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <TopAppBar title="在线评估" showBack showHelp onBack={onBack} />
      <main style={{ paddingTop: '96px', maxWidth: '768px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <StepIndicator current={1} />
        
        <section style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '20px', color: '#333' }}>物品影像</h2>
            <span style={{ fontSize: '11px', color: '#999' }}>支持 JPG, PNG 格式</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {['正面视图', '背面视图', '细节局部'].map((label, i) => (
              <div key={label} style={{ 
                aspectRatio: '1', 
                borderRadius: '16px', 
                border: '2px dashed #e8dcc8',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f3f0',
                cursor: 'pointer'
              }}>
                <Camera size={32} color="#C9A96E" strokeWidth={1} style={{ marginBottom: '12px' }} />
                <span style={{ fontSize: '12px', color: '#999' }}>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '48px', marginBottom: '48px' }}>
          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '8px', fontWeight: 'bold' }}>藏品名称</label>
            <input style={{ width: '100%', backgroundColor: 'transparent', border: 'none', fontSize: '18px', padding: '12px 0', borderBottom: '1px solid #eee' }} placeholder="请输入藏品全称" />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '11px', color: '#999', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px', fontWeight: 'bold' }}>所属品类</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['陶瓷器', '玉石器', '木作家具', '金属杂项', '书法绘画', '钱币邮票'].map((cat, i) => (
                <button key={cat} style={{
                  padding: '8px 24px',
                  borderRadius: '999px',
                  fontSize: '14px',
                  backgroundColor: i === 0 ? '#e8dcc8' : '#f5f3f0',
                  border: i === 0 ? '1px solid #C9A96E' : '1px solid transparent',
                  color: i === 0 ? '#C9A96E' : '#666'
                }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#f5f3f0', padding: '24px', borderRadius: '16px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
          <div style={{ width: '24px', height: '24px', color: '#C9A96E', flexShrink: 0 }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <div>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px' }}>专业保障</h4>
            <p style={{ fontSize: '11px', color: '#999', lineHeight: 1.6 }}>
              所有评估由"珍修"认证专家团队审核，承诺在 24 小时内出具正式电子评估报告。
            </p>
          </div>
        </section>
      </main>
      
      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)' }}>
        <button 
          onClick={onNext}
          style={{ width: '100%', maxWidth: '768px', margin: '0 auto', display: 'block', padding: '16px', background: 'linear-gradient(to right, #e8dcc8, #B89658)', color: 'white', borderRadius: '12px', border: 'none', fontSize: '14px', cursor: 'pointer', letterSpacing: '0.2em' }}
        >
          下一步：完善描述
        </button>
      </div>
    </div>
  );
}

export function EvaluationStep2({ onNext, onBack }: EvaluationStepProps) {
  return (
    <div style={{ paddingBottom: '200px', minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <TopAppBar title="描述详情" showBack showHelp onBack={onBack} />
      <main style={{ paddingTop: '96px', maxWidth: '768px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <StepIndicator current={2} />
        
        <section style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '4px', height: '20px', backgroundColor: '#C9A96E', borderRadius: '2px' }} />
              <h2 style={{ fontSize: '18px' }}>品相详述</h2>
            </div>
            <textarea 
              style={{ width: '100%', backgroundColor: '#f5f3f0', border: 'none', padding: '20px', fontSize: '14px', borderRadius: '16px', minHeight: '200px', resize: 'none' }} 
              placeholder="请详细描述藏品的材质、年代、瑕疵及您的修复诉求..."
            />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ width: '4px', height: '20px', backgroundColor: '#C9A96E', borderRadius: '2px' }} />
              <h2 style={{ fontSize: '18px' }}>参考价值</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#f5f3f0', padding: '16px 20px', borderRadius: '16px' }}>
              <span style={{ color: '#C9A96E', fontWeight: 'bold' }}>¥</span>
              <input style={{ flex: 1, backgroundColor: 'transparent', border: 'none', fontSize: '14px' }} placeholder="预估价值 (选填)" type="number" />
            </div>
          </div>
        </section>
      </main>

      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)' }}>
        <button 
          onClick={onNext}
          style={{ width: '100%', maxWidth: '768px', margin: '0 auto', display: 'block', padding: '16px', backgroundColor: '#C9A96E', color: 'white', borderRadius: '12px', border: 'none', fontSize: '14px', cursor: 'pointer', letterSpacing: '0.2em' }}
        >
          提交评估申请
        </button>
      </div>
    </div>
  );
}

export function EvaluationStep3({ onBack }: EvaluationStepProps) {
  return (
    <div style={{ paddingBottom: '200px', minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <TopAppBar title="专家评审" showBack onBack={onBack} />
      
      <main style={{ paddingTop: '96px', maxWidth: '768px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <StepIndicator current={3} />
        
        <section style={{ textAlign: 'center', marginTop: '24px', marginBottom: '64px' }}>
          <div style={{ width: '176px', height: '176px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ position: 'absolute', width: '100%', height: '100%', border: '1px solid #e8dcc8', borderRadius: '50%' }} 
            />
            <div style={{ width: '144px', height: '144px', borderRadius: '50%', backgroundColor: '#f5f3f0', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e8dcc8' }}>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div style={{ width: '64px', height: '64px', color: '#e8dcc8' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
                    <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
                    <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
                    <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
                    <line x1="7" y1="12" x2="17" y2="12"/>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div style={{ marginTop: '32px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '12px' }}>专家正在评审中</h2>
            <p style={{ fontSize: '14px', color: '#999', maxWidth: '280px', margin: '0 auto' }}>
              预计 24 小时内出具报告，完成后将通知您。
            </p>
          </div>
        </section>
      </main>

      <footer style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '16px' }}>
        <button 
          onClick={onBack}
          style={{ flex: 1, padding: '16px', borderRadius: '12px', border: '1px solid #ddd', backgroundColor: 'white', color: '#666', fontSize: '14px', cursor: 'pointer' }}
        >
          返回首页
        </button>
        <button disabled style={{ flex: 2, padding: '16px', borderRadius: '12px', border: 'none', backgroundColor: '#eee', color: '#ccc', fontSize: '14px', cursor: 'not-allowed' }}>
          查看报告 🔒
        </button>
      </footer>
    </div>
  );
}
