import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface MainContentProps {
  hours: number;
  setHours: (hours: number) => void;
  clientType: string;
  setClientType: (type: string) => void;
  season: string;
  setSeason: (season: string) => void;
  vehicleType: string;
  setVehicleType: (type: string) => void;
  calculatedPrice: number;
  scrollToSection: (sectionId: string) => void;
}

const MainContent = ({
  hours,
  setHours,
  clientType,
  setClientType,
  season,
  setSeason,
  vehicleType,
  setVehicleType,
  calculatedPrice,
  scrollToSection,
}: MainContentProps) => {
  const baseRate = vehicleType === 'bus' ? 3500 : 2500;
  return (
    <>
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
                  <Label className="text-lg font-semibold">Тип транспорта</Label>
                  <Select value={vehicleType} onValueChange={setVehicleType}>
                    <SelectTrigger className="text-lg h-12 border-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sprinter">Мерседес Спринтер (20 мест) — 2500 ₽/час</SelectItem>
                      <SelectItem value="bus">Автобус (47-53 места) — 3500 ₽/час</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
              { name: 'Мерседес Спринтер', type: 'Микроавтобус', seats: '20 мест', price: '2500 ₽/час' },
              { name: 'Автобус Tourist', type: 'Стандарт', seats: '47 мест', price: '3500 ₽/час' },
              { name: 'Автобус Premium', type: 'Комфорт', seats: '53 места', price: '3500 ₽/час' },
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
    </>
  );
};

export default MainContent;