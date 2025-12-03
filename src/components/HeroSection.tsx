import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
