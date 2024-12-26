import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link } from '@inertiajs/react';

export default function Index({ products }) {
  return (
    <AuthenticatedLayout>
    <div
      style={{
        minHeight: '100vh', // ครอบคลุมทั้งหน้าจอ
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)', // ไล่สีจากฟ้าเข้มไปสว่าง
        color: '#eaeaea',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center', // จัดกลางหน้าจอ
        alignItems: 'center', // จัดกลางหน้าจอ
      }}
    >
      <div
        style={{
          maxWidth: '1200px', // ปรับความกว้างของคอนเทนต์ให้กว้างขึ้น
          width: '100%', // ให้แน่ใจว่ากว้าง 100% ของพื้นที่ที่มี
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: '#f8f8f8' }}>Product Index</h1>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'space-between', // ทำให้แต่ละไอเทมในแถวห่างกันอย่างเท่ากัน
          }}
        >
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                width: 'calc(33.333% - 20px)', // ปรับให้ความกว้างแต่ละกล่องเป็น 33.333% บวกกับช่องว่าง
                backgroundColor: '#0f3460',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                display: 'flex', // ใช้ flexbox เพื่อให้ส่วนภายในอยู่ในตำแหน่งที่เหมาะสม
                flexDirection: 'column', // จัดให้เนื้อหาภายในจัดเรียงเป็นแนวตั้ง
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '530px', // กำหนดความสูงที่เหมาะสม
                  objectFit: 'cover', // ให้รูปไม่ล้นออกจากกรอบ
                  objectPosition: 'center', // จัดตำแหน่งรูปให้อยู่กลาง
                }}
              />

              <div style={{ padding: '15px', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', margin: '10px 0', color: '#f8f8f8' }}>{product.name}</h3>
                <p style={{ fontWeight: 'bold', color: '#00d4ff' }}>${product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: '10px 15px',
                    background: 'linear-gradient(45deg, #00d4ff, #007bff)',
                    color: '#fff',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    transition: 'background 0.3s',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #007bff, #00d4ff)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'linear-gradient(45deg, #00d4ff, #007bff)';
                  }}
                >
                  View Details
                </Link>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
    </AuthenticatedLayout>
  );
}
