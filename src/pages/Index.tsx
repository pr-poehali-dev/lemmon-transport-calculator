import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hours, setHours] = useState(2);
  const [clientType, setClientType] = useState('standard');
  const [season, setSeason] = useState('regular');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const baseRate = 1500;
  
  const calculatePrice = () => {
    const actualHours = Math.max(2, hours);
    let price = actualHours * baseRate;
    
    if (clientType === 'corporate') price *= 0.85;
    if (clientType === 'subscription') price *= 0.75;
    
    if (season === 'winter') price *= 1.15;
    if (season === 'summer') price *= 0.90;
    
    setCalculatedPrice(Math.round(price));
  };

  useEffect(() => {
    calculatePrice();
  }, [hours, clientType, season]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-yellow-200 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍋</span>
              </div>
              <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Леммон
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'calculator', label: 'Калькулятор' },
                { id: 'fleet', label: 'Парк' },
                { id: 'reviews', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Позвонить
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-accent text-accent-foreground">
                Профессиональные перевозки
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Ваше путешествие с{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  комфортом
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Современный парк транспорта, опытные водители и выгодные корпоративные тарифы. 
                Минимальная подача — 2 часа.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-xl transition-all"
                  onClick={() => scrollToSection('calculator')}
                >
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {[
                    { icon: 'Clock', title: 'Пунктуальность', desc: 'Прибытие точно в срок' },
                    { icon: 'Shield', title: 'Безопасность', desc: 'Застрахованный транспорт' },
                    { icon: 'Star', title: 'Комфорт', desc: 'Премиум автомобили' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-lg">{item.title}</h3>
                        <p className="text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Наши услуги</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Виды перевозок
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предлагаем широкий спектр услуг для любых целей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: 'Briefcase',
                title: 'Деловые поездки',
                desc: 'Трансфер для бизнес-встреч и корпоративных мероприятий',
                features: ['Wi-Fi в салоне', 'Зарядка устройств', 'Вода и пресса'],
              },
              {
                icon: 'Plane',
                title: 'Трансферы в аэропорт',
                desc: 'Комфортная доставка до аэропорта и встреча с табличкой',
                features: ['Отслеживание рейсов', 'Помощь с багажом', 'Детские кресла'],
              },
              {
                icon: 'PartyPopper',
                title: 'Торжественные события',
                desc: 'Свадьбы, юбилеи и другие праздничные мероприятия',
                features: ['Украшение авто', 'Фото на память', 'Шампанское'],
              },
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={service.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  <div className="space-y-2 pt-4 border-t">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <Icon name="Check" className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-secondary">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Калькулятор</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Рассчитайте стоимость
            </h2>
            <p className="text-xl text-muted-foreground">
              Минимальная подача — 2 часа. Используйте наши скидки!
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-primary/10 animate-scale-in">
            <CardContent className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-lg font-semibold">Количество часов</Label>
                  <Input
                    type="number"
                    min="2"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="text-lg h-12 border-2"
                  />
                  <p className="text-sm text-muted-foreground">Минимум 2 часа (включая подачу)</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-semibold">Тип клиента</Label>
                  <Select value={clientType} onValueChange={setClientType}>
                    <SelectTrigger className="text-lg h-12 border-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандарт</SelectItem>
                      <SelectItem value="corporate">Корпоративный (-15%)</SelectItem>
                      <SelectItem value="subscription">Подписка (-25%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-semibold">Сезон</Label>
                  <Select value={season} onValueChange={setSeason}>
                    <SelectTrigger className="text-lg h-12 border-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="winter">Зима (+15%)</SelectItem>
                      <SelectItem value="regular">Весна/Осень</SelectItem>
                      <SelectItem value="summer">Лето (-10%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-lg font-semibold">Базовая ставка</Label>
                  <div className="h-12 border-2 border-muted rounded-lg flex items-center px-4 bg-muted/30">
                    <span className="text-lg font-semibold">{baseRate} ₽/час</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary via-secondary to-accent p-8 rounded-2xl text-center">
                <p className="text-white/80 text-lg mb-2">Итоговая стоимость</p>
                <p className="text-5xl font-heading font-bold text-white mb-4">
                  {calculatedPrice.toLocaleString()} ₽
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => scrollToSection('contacts')}
                >
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Забронировать
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="fleet" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary text-primary-foreground">Наш парк</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Автомобили
            </h2>
            <p className="text-xl text-muted-foreground">
              Современные и комфортабельные автомобили на любой вкус
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Mercedes-Benz E-Class', type: 'Бизнес-класс', seats: '3 пассажира', price: '2000 ₽/час' },
              { name: 'Mercedes-Benz V-Class', type: 'Минивэн', seats: '6 пассажиров', price: '2500 ₽/час' },
              { name: 'Mercedes-Benz S-Class', type: 'Премиум', seats: '3 пассажира', price: '3000 ₽/час' },
            ].map((car, idx) => (
              <Card 
                key={idx} 
                className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Car" className="h-24 w-24 text-primary" />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-heading font-bold">{car.name}</h3>
                  <Badge variant="outline">{car.type}</Badge>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Users" className="h-4 w-4" />
                    <span>{car.seats}</span>
                  </div>
                  <div className="pt-4 border-t flex items-center justify-between">
                    <span className="text-2xl font-heading font-bold text-primary">{car.price}</span>
                    <Button variant="outline">Выбрать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Что говорят клиенты
            </h2>
            <p className="text-xl text-muted-foreground">
              Более 2000 довольных пассажиров
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Петрова',
                role: 'Директор компании',
                text: 'Пользуемся услугами Леммон уже год. Всегда пунктуальны, вежливые водители, чистые автомобили. Корпоративная скидка — приятный бонус!',
                rating: 5,
              },
              {
                name: 'Михаил Соколов',
                role: 'Частный клиент',
                text: 'Отличный сервис для поездок в аэропорт! Отслеживают рейсы, помогают с багажом. Рекомендую!',
                rating: 5,
              },
              {
                name: 'Елена Морозова',
                role: 'Организатор свадеб',
                text: 'Заказывали машину на свадьбу. Украсили по нашим пожеланиям, водитель был очень профессионален. Спасибо!',
                rating: 5,
              },
            ].map((review, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                  <div className="pt-4 border-t flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Ответим на все вопросы и поможем с бронированием
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-scale-in">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79001234567" className="text-primary hover:underline text-lg">
                        +7 (900) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:info@lemmon.ru" className="text-primary hover:underline">
                        info@lemmon.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">Москва, ул. Примерная, 123</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Режим работы</p>
                      <p className="text-muted-foreground">Круглосуточно, без выходных</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label>Ваше имя</Label>
                    <Input placeholder="Иван Иванов" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Телефон</Label>
                    <Input type="tel" placeholder="+7 (900) 123-45-67" className="h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Сообщение</Label>
                    <Textarea 
                      placeholder="Расскажите о вашей поездке..."
                      className="min-h-32 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full h-12 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg">
                    <Icon name="Send" className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🍋</span>
                <span className="text-2xl font-heading font-bold">Леммон</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Профессиональные пассажирские перевозки с 2015 года
              </p>
            </div>
            
            {[
              {
                title: 'Услуги',
                links: ['Деловые поездки', 'Трансферы', 'Торжества', 'Почасовая аренда'],
              },
              {
                title: 'Компания',
                links: ['О нас', 'Парк', 'Вакансии', 'Партнерам'],
              },
              {
                title: 'Поддержка',
                links: ['Контакты', 'FAQ', 'Оплата', 'Гарантии'],
              },
            ].map((column, idx) => (
              <div key={idx}>
                <h3 className="font-heading font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70">© 2024 Леммон. Все права защищены.</p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon name={social as any} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
