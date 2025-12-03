import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const ContactsAndFooter = () => {
  return (
    <>
      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">Контакты</Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Забронируйте заранее!
            </h2>
            <p className="text-xl text-muted-foreground">
              В сезон спрос высокий. Работаем с ИП, ООО и физлицами. Лицензированная компания
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
                Элитные пассажирские перевозки с 2008 года. Более 17 лет опыта на рынке.
              </p>
            </div>
            
            {[
              {
                title: 'Маршруты',
                links: ['Москва и МО', 'Санкт-Петербург', 'Казань, Сочи', 'По России'],
              },
              {
                title: 'Услуги',
                links: ['Корпоративы', 'Экскурсии', 'Свадьбы', 'Школьные выезды'],
              },
              {
                title: 'Компания',
                links: ['О нас', 'Госконтракты', 'Скидки до 10%', 'Лицензия'],
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
    </>
  );
};

export default ContactsAndFooter;