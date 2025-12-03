import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
