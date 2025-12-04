import { supabase } from '@/lib/supabase';
import { Menu } from '@/types';
import MenuImage from '@/components/MenuImage';

async function getMenus(): Promise<Menu[]> {
  const { data, error } = await supabase
    .from('menus')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching menus:', error);
    return [];
  }

  return data || [];
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
}

export default async function Home() {
  const menus = await getMenus();

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Menu Restoran</h1>
          <p className="text-xl text-gray-600">Pilihan makanan dan minuman terbaik</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menus.map((menu) => (
            <div key={menu.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
              {/* Gunakan Client Component untuk image */}
              <div className="relative h-48 w-full">
                <MenuImage 
                  src={menu.image} 
                  alt={menu.description || 'Menu image'}
                  className="h-48"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {menu.description || 'No description'}
                </h3>
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {formatPrice(menu.price)}
                </div>
                <div className="text-xs text-gray-500">
                  Ditambahkan: {new Date(menu.created_at).toLocaleDateString('id-ID')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {menus.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Belum ada menu</h3>
            <p className="text-gray-500">Tambahkan menu pertama Anda di Supabase</p>
          </div>
        )}

        {menus.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6 text-center mt-8">
            <p className="text-gray-600">
              Menampilkan <span className="font-semibold">{menus.length} menu</span> • 
              Total nilai: <span className="font-semibold text-green-600">
                {formatPrice(menus.reduce((sum, menu) => sum + menu.price, 0))}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}