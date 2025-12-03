import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import ContactsAndFooter from '@/components/ContactsAndFooter';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hours, setHours] = useState(2);
  const [clientType, setClientType] = useState('standard');
  const [season, setSeason] = useState('regular');
  const [vehicleType, setVehicleType] = useState('sprinter');
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  
  const calculatePrice = () => {
    const actualHours = Math.max(2, hours);
    const baseRate = vehicleType === 'bus' ? 3500 : 2500;
    let price = actualHours * baseRate;
    
    if (clientType === 'corporate') price *= 0.85;
    if (clientType === 'subscription') price *= 0.75;
    
    if (season === 'winter') price *= 1.15;
    if (season === 'summer') price *= 0.90;
    
    setCalculatedPrice(Math.round(price));
  };

  useEffect(() => {
    calculatePrice();
  }, [hours, clientType, season, vehicleType]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <MainContent
        hours={hours}
        setHours={setHours}
        clientType={clientType}
        setClientType={setClientType}
        season={season}
        setSeason={setSeason}
        vehicleType={vehicleType}
        setVehicleType={setVehicleType}
        calculatedPrice={calculatedPrice}
        scrollToSection={scrollToSection}
      />
      <ContactsAndFooter />
    </div>
  );
};

export default Index;