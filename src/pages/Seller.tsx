import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const mockProducts = [
  { id: 1, name: 'Женское платье', price: 2499, stock: 45, sales: 234, status: 'active' },
  { id: 2, name: 'Мужская рубашка', price: 1599, stock: 23, sales: 156, status: 'active' },
  { id: 3, name: 'Кроссовки Nike', price: 5999, stock: 12, sales: 512, status: 'active' },
  { id: 4, name: 'Наушники беспроводные', price: 3299, stock: 0, sales: 389, status: 'inactive' },
];

export default function Seller() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showQRGenerator, setShowQRGenerator] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Store" size={28} className="text-secondary" />
            <span className="text-2xl font-bold">
              <span className="text-secondary">Wibes</span>
              <span className="text-primary">OK</span>
              <span className="text-sm ml-2 text-muted-foreground">Продавец</span>
            </span>
          </div>
          
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={22} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Settings" size={22} />
            </Button>
            <div className="flex items-center gap-2 pl-4 border-l">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="User" size={20} className="text-primary" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Магазин "Стиль"</p>
                <p className="text-xs text-muted-foreground">ID: 12345</p>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container py-8">
        <nav className="flex gap-2 mb-8 overflow-x-auto">
          <Button
            variant={activeTab === 'dashboard' ? 'default' : 'outline'}
            onClick={() => setActiveTab('dashboard')}
            className="whitespace-nowrap"
          >
            <Icon name="LayoutDashboard" size={18} className="mr-2" />
            Дашборд
          </Button>
          <Button
            variant={activeTab === 'products' ? 'default' : 'outline'}
            onClick={() => setActiveTab('products')}
            className="whitespace-nowrap"
          >
            <Icon name="Package" size={18} className="mr-2" />
            Товары
          </Button>
          <Button
            variant={activeTab === 'orders' ? 'default' : 'outline'}
            onClick={() => setActiveTab('orders')}
            className="whitespace-nowrap"
          >
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Заказы
          </Button>
          <Button
            variant={activeTab === 'qr' ? 'default' : 'outline'}
            onClick={() => setActiveTab('qr')}
            className="whitespace-nowrap"
          >
            <Icon name="QrCode" size={18} className="mr-2" />
            QR-коды
          </Button>
          <Button
            variant={activeTab === 'analytics' ? 'default' : 'outline'}
            onClick={() => setActiveTab('analytics')}
            className="whitespace-nowrap"
          >
            <Icon name="TrendingUp" size={18} className="mr-2" />
            Аналитика
          </Button>
        </nav>

        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Продажи сегодня</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">₽ 47,850</div>
                  <p className="text-xs text-green-400 mt-1 flex items-center">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    +12.5% к вчера
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Заказов</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary">127</div>
                  <p className="text-xs text-green-400 mt-1 flex items-center">
                    <Icon name="TrendingUp" size={14} className="mr-1" />
                    +8 новых
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Товаров в наличии</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">234</div>
                  <p className="text-xs text-muted-foreground mt-1">Активных: 198</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Просмотров</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12.4K</div>
                  <p className="text-xs text-yellow-400 mt-1 flex items-center">
                    <Icon name="Eye" size={14} className="mr-1" />
                    +2.1K за день
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Последние заказы</span>
                    <Button variant="ghost" size="sm">Все заказы</Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[1, 2, 3, 4].map((order) => (
                    <div key={order} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-muted rounded-lg"></div>
                        <div>
                          <p className="font-medium">Заказ #{12340 + order}</p>
                          <p className="text-sm text-muted-foreground">2 товара · ₽ 5,499</p>
                        </div>
                      </div>
                      <Badge className="bg-yellow-900/30 text-yellow-400 border-yellow-700">
                        В обработке
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Топ товары</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mockProducts.slice(0, 4).map((product, index) => (
                    <div key={product.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-muted-foreground">#{index + 1}</span>
                        <div>
                          <p className="font-medium">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.sales} продаж</p>
                        </div>
                      </div>
                      <p className="font-bold text-primary">₽ {product.price}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Мои товары</h2>
                <p className="text-muted-foreground">Управляйте своим ассортиментом</p>
              </div>
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => setShowAddProduct(!showAddProduct)}
              >
                <Icon name="Plus" size={20} className="mr-2" />
                Добавить товар
              </Button>
            </div>

            {showAddProduct && (
              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle>Новый товар</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Название</label>
                      <Input placeholder="Введите название товара" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Цена</label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание</label>
                    <Textarea placeholder="Расскажите о товаре..." rows={3} />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Количество</label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Категория</label>
                      <Input placeholder="Выберите категорию" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="Check" size={18} className="mr-2" />
                      Создать товар
                    </Button>
                    <Button variant="outline" onClick={() => setShowAddProduct(false)}>
                      Отмена
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {mockProducts.map((product) => (
                <Card key={product.id} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-muted rounded-lg"></div>
                        <div>
                          <h3 className="font-bold text-lg">{product.name}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <p className="text-primary font-bold">₽ {product.price}</p>
                            <p className="text-sm text-muted-foreground">Остаток: {product.stock} шт</p>
                            <p className="text-sm text-muted-foreground">Продано: {product.sales}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={product.status === 'active' ? 'bg-green-900/30 text-green-400 border-green-700' : 'bg-red-900/30 text-red-400 border-red-700'}>
                          {product.status === 'active' ? 'Активен' : 'Неактивен'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Icon name="Pencil" size={16} />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            setSelectedProduct(product.id);
                            setShowQRGenerator(true);
                            setActiveTab('qr');
                          }}
                        >
                          <Icon name="QrCode" size={16} />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-400 hover:text-red-300">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'qr' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Генератор QR-кодов</h2>
              <p className="text-muted-foreground">Создавайте QR-коды для ваших товаров</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки QR-кода</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Выберите товар</label>
                    <select className="w-full bg-background border border-input rounded-md px-3 py-2">
                      <option>Выберите товар из списка</option>
                      {mockProducts.map(p => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Тип QR-кода</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start">
                        <Icon name="ShoppingBag" size={18} className="mr-2" />
                        Товар
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Store" size={18} className="mr-2" />
                        Магазин
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Дополнительная информация</label>
                    <Textarea placeholder="Добавьте описание или промокод..." rows={3} />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    <Icon name="Sparkles" size={18} className="mr-2" />
                    Сгенерировать QR-код
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Превью QR-кода</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <div className="w-64 h-64 bg-white rounded-2xl flex items-center justify-center mb-6 border-4 border-dashed border-border">
                    <div className="text-center">
                      <Icon name="QrCode" size={120} className="text-primary mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground">QR-код появится здесь</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" disabled>
                      <Icon name="Download" size={18} className="mr-2" />
                      Скачать
                    </Button>
                    <Button variant="outline" disabled>
                      <Icon name="Share2" size={18} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center max-w-xs">
                    QR-код можно распечатать и разместить на витрине или упаковке товара
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>История QR-кодов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {mockProducts.map(product => (
                    <div key={product.id} className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="w-full aspect-square bg-white rounded-lg flex items-center justify-center mb-3">
                        <Icon name="QrCode" size={64} className="text-primary" />
                      </div>
                      <p className="font-medium text-sm mb-1">{product.name}</p>
                      <p className="text-xs text-muted-foreground mb-3">Создан: 25.10.2024</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="Download" size={14} />
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Icon name="Eye" size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Заказы</h2>
              <p className="text-muted-foreground">Управляйте заказами клиентов</p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">Все</Button>
              <Button variant="outline" size="sm" className="text-yellow-400">Новые (8)</Button>
              <Button variant="outline" size="sm">В обработке</Button>
              <Button variant="outline" size="sm">Доставка</Button>
              <Button variant="outline" size="sm">Завершены</Button>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((order) => (
                <Card key={order}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-bold text-lg">Заказ #{15670 + order}</p>
                        <p className="text-sm text-muted-foreground">27 октября 2024, 14:32</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-900/30 text-yellow-400 border-yellow-700">
                          Новый
                        </Badge>
                        <Button variant="outline" size="sm">
                          Принять
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-lg"></div>
                      <div className="flex-1">
                        <p className="font-medium">Женское платье + еще 1 товар</p>
                        <p className="text-sm text-muted-foreground mt-1">Покупатель: Анна Петрова</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-primary">₽ 4,098</p>
                        <p className="text-sm text-muted-foreground">2 товара</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Аналитика</h2>
              <p className="text-muted-foreground">Статистика и данные вашего магазина</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Продажи за месяц</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">₽ 1,247,500</p>
                  <p className="text-sm text-green-400 mt-2 flex items-center">
                    <Icon name="TrendingUp" size={16} className="mr-1" />
                    +24.5% к прошлому месяцу
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Конверсия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-secondary">12.8%</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Из 12,450 посетителей
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Средний чек</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">₽ 3,890</p>
                  <p className="text-sm text-yellow-400 mt-2 flex items-center">
                    <Icon name="Minus" size={16} className="mr-1" />
                    -2.1% к среднему
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>График продаж</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[65, 45, 78, 52, 89, 67, 92, 58, 75, 82, 95, 88].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-lg opacity-80 hover:opacity-100 transition-opacity cursor-pointer" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
                <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                  <span>Янв</span>
                  <span>Фев</span>
                  <span>Мар</span>
                  <span>Апр</span>
                  <span>Май</span>
                  <span>Июн</span>
                  <span>Июл</span>
                  <span>Авг</span>
                  <span>Сен</span>
                  <span>Окт</span>
                  <span>Ноя</span>
                  <span>Дек</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
