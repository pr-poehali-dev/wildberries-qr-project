import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Одежда', icon: 'Shirt' },
  { name: 'Обувь', icon: 'HeartPulse' },
  { name: 'Электроника', icon: 'Laptop' },
  { name: 'Дом', icon: 'Home' },
  { name: 'Красота', icon: 'Sparkles' },
  { name: 'Детям', icon: 'Baby' },
  { name: 'Продукты', icon: 'ShoppingBasket' },
  { name: 'Спорт', icon: 'Dumbbell' },
];

const products = [
  { id: 1, name: 'Женское платье', price: 2499, oldPrice: 3999, discount: 37, rating: 4.8, reviews: 234 },
  { id: 2, name: 'Мужская рубашка', price: 1599, oldPrice: 2499, discount: 36, rating: 4.6, reviews: 156 },
  { id: 3, name: 'Кроссовки Nike', price: 5999, oldPrice: 8999, discount: 33, rating: 4.9, reviews: 512 },
  { id: 4, name: 'Наушники беспроводные', price: 3299, oldPrice: 4999, discount: 34, rating: 4.7, reviews: 389 },
  { id: 5, name: 'Рюкзак городской', price: 1899, oldPrice: 2999, discount: 37, rating: 4.5, reviews: 178 },
  { id: 6, name: 'Часы Smart Watch', price: 4599, oldPrice: 6999, discount: 34, rating: 4.8, reviews: 445 },
  { id: 7, name: 'Куртка зимняя', price: 6999, oldPrice: 9999, discount: 30, rating: 4.9, reviews: 267 },
  { id: 8, name: 'Джинсы мужские', price: 2299, oldPrice: 3499, discount: 34, rating: 4.6, reviews: 198 },
];

export default function Index() {
  const [trackNumber, setTrackNumber] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="ShoppingBag" size={28} className="text-secondary" />
            <span className="text-2xl font-bold">
              <span className="text-secondary">Wibes</span>
              <span className="text-primary">OK</span>
            </span>
          </div>
          
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Поиск товаров..."
                className="w-full pr-10"
              />
              <Icon name="Search" size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setActiveSection('profile')}
            >
              <Icon name="User" size={22} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setActiveSection('favorites')}
            >
              <Icon name="Heart" size={22} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setActiveSection('orders')}
            >
              <Icon name="Package" size={22} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={22} />
            </Button>
          </nav>
        </div>
      </header>

      <nav className="border-b bg-card">
        <div className="container flex gap-6 py-3 overflow-x-auto">
          <button
            onClick={() => setActiveSection('home')}
            className={`text-sm font-medium whitespace-nowrap transition-colors ${
              activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Главная
          </button>
          <button
            onClick={() => setActiveSection('profile')}
            className={`text-sm font-medium whitespace-nowrap transition-colors ${
              activeSection === 'profile' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Профиль
          </button>
          <button
            onClick={() => setActiveSection('orders')}
            className={`text-sm font-medium whitespace-nowrap transition-colors ${
              activeSection === 'orders' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Заказы
          </button>
          <button
            onClick={() => setActiveSection('contacts')}
            className={`text-sm font-medium whitespace-nowrap transition-colors ${
              activeSection === 'contacts' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Контакты
          </button>
          <button
            onClick={() => setActiveSection('favorites')}
            className={`text-sm font-medium whitespace-nowrap transition-colors ${
              activeSection === 'favorites' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Избранное
          </button>
        </div>
      </nav>

      <main className="container py-8">
        {activeSection === 'home' && (
          <>
            <section className="mb-12 bg-gradient-to-r from-purple-900/30 to-orange-900/30 rounded-2xl p-8 md:p-12 border border-border">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    Получить заказ легко!
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Отсканируйте QR-код или введите трек-номер для получения заказа
                  </p>
                  
                  <div className="flex gap-3 mb-6">
                    <Input
                      type="text"
                      placeholder="Введите трек-номер"
                      value={trackNumber}
                      onChange={(e) => setTrackNumber(e.target.value)}
                      className="flex-1"
                    />
                    <Button size="lg" className="bg-primary hover:bg-secondary">
                      Найти
                    </Button>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-card border border-border p-6 rounded-2xl shadow-lg">
                    <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="w-40 h-40 border-4 border-primary rounded-lg flex items-center justify-center">
                          <Icon name="QrCode" size={120} className="text-primary" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      Отсканируйте для получения заказа
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Категории</h2>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-accent transition-colors group"
                  >
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon name={category.icon as any} size={32} className="text-primary" />
                    </div>
                    <span className="text-xs font-medium text-center">{category.name}</span>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Популярные товары</h2>
                <Button variant="ghost" className="text-primary">
                  Смотреть все
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products.map((product) => (
                  <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-square bg-muted">
                        <Badge className="absolute top-2 left-2 bg-primary text-white">
                          -{product.discount}%
                        </Badge>
                        <button className="absolute top-2 right-2 w-8 h-8 bg-card rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Icon name="Heart" size={18} />
                        </button>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start p-4 gap-2">
                      <div className="flex items-center gap-1 text-xs">
                        <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-muted-foreground">({product.reviews})</span>
                      </div>
                      <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">{product.price} ₽</span>
                        <span className="text-xs text-muted-foreground line-through">{product.oldPrice} ₽</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </>
        )}

        {activeSection === 'profile' && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={40} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Иван Иванов</h2>
                  <p className="text-muted-foreground">ivan@example.com</p>
                </div>
              </div>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Settings" size={20} />
                  Настройки профиля
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="MapPin" size={20} />
                  Адреса доставки
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="CreditCard" size={20} />
                  Способы оплаты
                </Button>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'orders' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Мои заказы</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <Card key={order} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-semibold">Заказ №{12345 + order}</p>
                      <p className="text-sm text-muted-foreground">От 25 октября 2024</p>
                    </div>
                    <Badge variant="outline" className="bg-green-900/30 text-green-400 border-green-700">
                      Доставлен
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-muted rounded-lg"></div>
                    <div className="flex-1">
                      <p className="font-medium">Товары: 3 шт.</p>
                      <p className="text-sm text-muted-foreground">Сумма: 8 997 ₽</p>
                    </div>
                    <Button variant="outline">Повторить заказ</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">8 (800) 555-35-35</p>
                    <p className="text-sm text-muted-foreground">Бесплатный звонок по России</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">support@wildmarket.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Часы работы</p>
                    <p className="text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'favorites' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Избранное</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.slice(0, 4).map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-square bg-gray-100">
                      <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Icon name="Heart" size={18} className="text-primary fill-primary" />
                      </button>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start p-4 gap-2">
                    <div className="flex items-center gap-1 text-xs">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{product.rating}</span>
                    </div>
                    <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                    <span className="text-lg font-bold text-primary">{product.price} ₽</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t bg-card mt-16">
        <div className="container py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">О компании</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Покупателям</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Как сделать заказ</li>
                <li>Способы оплаты</li>
                <li>Доставка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Партнёрам</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Продавайте на WildMarket</li>
                <li>Сотрудничество</li>
                <li>Документы</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 WildMarket. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}