import { Link } from '@inertiajs/react';

export default function Show({ product }) {
  return (
    <div
      style={{
        minHeight: '100vh', // ครอบคลุมทั้งหน้าจอ
        background: 'linear-gradient(135deg, #1e3c72, #2a5298)', // ไล่สีจากฟ้าเข้มไปสว่าง
        color: '#eaeaea',
        padding: '40px 20px',
        display: 'flex',
        justifyContent: 'center', // จัดกลางหน้าจอ
        alignItems: 'center', // จัดกลางหน้าจอ
      }}
    >
      <div
        style={{
          maxWidth: '800px', // กำหนดความกว้างให้พอดี
          width: '100%',
          padding: '30px',
          borderRadius: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2.5rem', color: '#f8f8f8' }}>{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '400px', // ขนาดรูปภาพที่เหมาะสม
            margin: '20px auto',
            borderRadius: '8px',
            display: 'block',
            objectPosition: 'center',
          }}
        />
        <p style={{ fontSize: '1.1rem', color: '#cfcfcf', marginBottom: '20px' }}>{product.description}</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.3rem', color: '#00d4ff' }}>Price: ${product.price}</p>
        <Link
          href="/products"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
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
          Back to All Products
        </Link>
      </div>
    </div>
  );
}
