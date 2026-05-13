import { motion } from 'motion/react';
import { Star, MessageCircle } from 'lucide-react';
import { ARTISANS } from '../constants';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';

interface ArtisanDirectoryViewProps {
  onBack?: () => void;
}

export function ArtisanDirectoryView({ onBack }: ArtisanDirectoryViewProps) {
  return (
    <div style={{ paddingBottom: '200px', minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <TopAppBar title="匠人名录" showBack showSearch onBack={onBack} />
      
      <main style={{ paddingTop: '96px', maxWidth: '1280px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' }}>
        <header style={{ marginBottom: '40px' }}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ fontSize: '36px', color: '#C9A96E', marginBottom: '12px' }}
          >
            匠人精神
          </motion.h2>
          <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.8, maxWidth: '512px' }}>
            致力于连接传统技艺的传承者与现代生活的珍视者，每一份修复都是时间的礼赞。
          </p>
        </header>

        <section style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '48px' }}>
          <div>
            <span style={{ fontSize: '11px', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.2em', display: 'block', marginBottom: '12px' }}>技艺</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ padding: '8px 24px', borderRadius: '999px', backgroundColor: '#C9A96E', color: 'white', fontSize: '14px', border: 'none', cursor: 'pointer' }}>全部</button>
              {['金缮', '瓷修', '木作'].map(tag => (
                <button key={tag} style={{ padding: '8px 24px', borderRadius: '999px', border: '1px solid #ddd', color: '#666', fontSize: '14px', backgroundColor: 'white', cursor: 'pointer' }}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
          {ARTISANS.map((artisan, idx) => (
            <motion.div 
              key={artisan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              style={{ backgroundColor: 'white', borderRadius: '16px', padding: '32px', display: 'flex', gap: '32px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}
            >
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ position: 'relative' }}>
                  <img 
                    style={{ width: '128px', height: '128px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e8dcc8' }} 
                    src={artisan.avatar} 
                    alt={artisan.name}
                  />
                  <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', backgroundColor: '#e8dcc8', padding: '6px', borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <div style={{ width: '16px', height: '16px', color: 'white' }}>★</div>
                  </div>
                </div>
                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={16} color="#C9A96E" fill="#C9A96E" />
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>{artisan.rating}</span>
                  <span style={{ fontSize: '12px', color: '#ccc' }}>({artisan.reviews}+)</span>
                </div>
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '20px', color: '#C9A96E', marginBottom: '4px' }}>{artisan.name} 师傅</h3>
                    <p style={{ fontSize: '12px', color: '#999' }}>{artisan.title}</p>
                  </div>
                  <span style={{ padding: '4px 12px', backgroundColor: '#e8dcc8', color: '#C9A96E', borderRadius: '999px', fontSize: '10px' }}>
                    {artisan.experience}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: '#999', fontStyle: 'italic', marginBottom: '16px', lineHeight: 1.6 }}>{artisan.quote}</p>
                
                <div style={{ marginBottom: '32px' }}>
                  <p style={{ fontSize: '10px', color: '#ccc', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '12px' }}>代表作品</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {artisan.featuredWorks.map((work, i) => (
                      <div key={i} style={{ width: '64px', height: '64px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
                        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={work} alt="" />
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button 
                  whileTap={{ scale: 0.98 }}
                  style={{ padding: '12px 32px', backgroundColor: '#C9A96E', color: 'white', borderRadius: '12px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                >
                  <span>立即咨询</span>
                  <MessageCircle size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
