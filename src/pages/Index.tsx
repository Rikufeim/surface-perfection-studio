import React, { useState } from 'react';
import { 
  Paintbrush, 
  PaintRoller, 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  CheckCircle, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Linkedin,
  Layers,
  Palette,
  Maximize2,
  MessageCircle
} from 'lucide-react';
import logo from '@/assets/logo.webp';
import keittioEnnen from '@/assets/keittio-ennen.jpeg';
import keittioValmis from '@/assets/keittio-valmis.jpeg';
import portaatEnnen from '@/assets/portaat-ennen.jpeg';
import portaatValmis from '@/assets/portaat-valmis.jpeg';

/* --- DATA --- */

const servicesData = [
  {
    icon: Paintbrush,
    title: "Sisämaalaus",
    description: "Kattavat maalaus-, lakkaus- ja öljyämistyöt sisätiloissa. Luomme kotiisi uuden ilmeen laadukkailla materiaaleilla.",
    features: ["Seinät ja katot", "Lattioiden maalaus ja lakkaus", "Värisuunnitteluapu", "Pölytön lopputulos"]
  },
  {
    icon: Layers,
    title: "Tapetointi",
    description: "Asiantunteva tapetointipalvelu. Autamme materiaalin valinnassa ja takaamme saumattoman lopputuloksen.",
    features: ["Vanhan tapetin poisto", "Kuitu- ja paperitapetit", "Kuviosahdistus", "Pohjan tasoitus"]
  },
  {
    icon: Home,
    title: "Ulkomaalaus",
    description: "Julkisivujen ja ulkorakennusten maalaus säänkestävillä tuotteilla. Suojaa kotisi ja paranna sen arvoa.",
    features: ["Julkisivut", "Terassit ja aidat", "Homepesut", "Ikkunapuitteet"]
  },
  {
    icon: Palette,
    title: "Tehosteseinät",
    description: "Persoonallisuutta kotiin tehosteseinillä. Toteutamme erikoismaalaukset ja efektipinnat toiveidesi mukaan.",
    features: ["Struktuuripinnat", "Kalkkimaalit", "Mikrosementti", "Erikoisvärit"]
  },
  {
    icon: PaintRoller,
    title: "Pohjatyöt",
    description: "Huolellinen pohjatyö on kestävän lopputuloksen perusta. Hoidamme kaikki valmistelut ammattitaidolla.",
    features: ["Tasoitukset ja kittaukset", "Hionta", "Suojaukset", "Pohjamaalaus"]
  }
];

const referencesData = [
  { id: 1, src: portaatEnnen, title: "Portaikko ennen remonttia" },
  { id: 2, src: portaatValmis, title: "Portaikko remontin jälkeen" },
  { id: 3, src: keittioEnnen, title: "Keittiö ennen remonttia" },
  { id: 4, src: keittioValmis, title: "Keittiö remontin jälkeen" },
];

/* --- KOMPONENTIT --- */

// WhatsApp Icon SVG
const WhatsAppIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// GradientButton
const GradientButton = ({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) => (
  <button 
    onClick={onClick} 
    className={`text-white font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 ${className}`}
    style={{
      background: "radial-gradient(circle at 30% 70%, #6b2bff70 0%, transparent 45%), radial-gradient(circle at 70% 30%, #00000070 0%, transparent 45%), linear-gradient(180deg, #000000 0%, #000000 100%)",
      filter: "brightness(1.2)"
    }}
  >
    {children}
  </button>
);

// Floating Contact Button
const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = {
    background: "radial-gradient(circle at 30% 70%, #6b2bff70 0%, transparent 45%), radial-gradient(circle at 70% 30%, #00000070 0%, transparent 45%), linear-gradient(180deg, #000000 0%, #000000 100%)",
    filter: "brightness(1.2)"
  };

  return (
    <div className="fixed bottom-24 right-6 z-[100] flex flex-col items-end gap-4">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-8 duration-300 mb-2">
           <a 
             href="https://wa.me/358458466055" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center justify-end gap-3 group"
           >
             <span className="bg-white text-neutral-900 px-3 py-1.5 rounded-lg shadow-lg font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               WhatsApp
             </span>
             <div 
               className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
               style={buttonStyle}
             >
                <WhatsAppIcon size={20} className="text-white" />
             </div>
           </a>

           <a 
             href="mailto:info@js-laatupinta.fi"
             className="flex items-center justify-end gap-3 group"
           >
             <span className="bg-white text-neutral-900 px-3 py-1.5 rounded-lg shadow-lg font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               Lähetä sähköpostia
             </span>
             <div 
               className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
               style={buttonStyle}
             >
                <Mail size={20} className="text-white" />
             </div>
           </a>

           <a 
             href="tel:+358458466055"
             className="flex items-center justify-end gap-3 group"
           >
             <span className="bg-white text-neutral-900 px-3 py-1.5 rounded-lg shadow-lg font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               Soita
             </span>
             <div 
               className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110"
               style={buttonStyle}
             >
                <Phone size={20} className="text-white" />
             </div>
           </a>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-14 h-14 rounded-full flex items-center justify-center transition-all transform hover:scale-105 z-50"
        style={buttonStyle}
      >
        <MessageCircle size={24} className="text-white" />
      </button>
    </div>
  );
};

// Navigaatio
const Navigation = ({ activePage, navigateTo, isInsideHero = false }: { activePage: string; navigateTo: (id: string) => void; isInsideHero?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Etusivu' },
    { id: 'services', label: 'Palvelut' },
    { id: 'references', label: 'Referenssit' },
    { id: 'contact', label: 'Yhteystiedot' },
  ];

  const handleNavClick = (id: string) => {
    navigateTo(id);
    setIsOpen(false);
  };

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 px-6 py-4`}>
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div onClick={() => handleNavClick('home')} className="cursor-pointer select-none flex items-center gap-3">
          <img src={logo} alt="JS-Laatupinta" className="h-12 md:h-14 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 p-2">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)} 
              className={`text-sm font-semibold uppercase tracking-wide cursor-pointer transition-colors duration-200 px-4 py-1 ${
                activePage === link.id ? 'text-fuchsia-400' : 'text-gray-300 hover:text-fuchsia-400'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="flex items-center gap-4 ml-2 border-l border-white/10 pl-6">
            <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-fuchsia-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <button className="md:hidden text-gray-400 hover:text-fuchsia-500" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-2 left-0 right-0 mx-4 border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 shadow-xl md:hidden bg-black/90 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 z-50">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)} 
              className={`text-left font-bold py-3 px-4 hover:bg-white/5 rounded-lg transition-all border-b border-white/5 last:border-0 ${
                activePage === link.id ? 'text-fuchsia-500' : 'text-gray-300 hover:text-fuchsia-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero -osio
const Hero = ({ activePage, navigateTo }: { activePage: string; navigateTo: (id: string) => void }) => {
  return (
    <div className="w-full">
      <section 
        id="hero" 
        className="min-h-screen flex flex-col items-start justify-start antialiased relative w-full overflow-hidden"
      >
        
        <Navigation activePage={activePage} navigateTo={navigateTo} isInsideHero={true} />

        <div className="p-6 max-w-7xl mx-auto relative z-20 w-full pt-32 md:pt-40 flex flex-col items-start justify-start">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Uutta maalia,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">
              raikasta tapettia
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            Maalaus ja tapetointi Vantaalla ja Uudellamaalla – huolellinen työnjälki, selkeä tarjous ja viimeistelty lopputulos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mt-8">
            <GradientButton onClick={() => navigateTo('contact')}>
              Ota yhteyttä
              <ArrowRight size={20} />
            </GradientButton>
            
            <button 
              onClick={() => navigateTo('services')}
              className="flex items-center gap-2 px-6 py-4 text-white font-medium hover:text-fuchsia-400 transition-colors"
            >
              <CheckCircle className="text-fuchsia-500" size={20} />
              <span>Tutustu palveluihin</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Etusivun Palvelu-preview
const HomeServicesPreview = ({ navigateTo }: { navigateTo: (id: string) => void }) => (
  <section className="relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 space-y-32">
      
      {/* OSA 1: Sisämaalaus (Kuva Vasen - Teksti Oikea) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Kuva */}
        <div className="relative group order-1 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop" 
              alt="Sisämaalausta" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Teksti */}
        <div className="order-2 lg:order-2">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sisämaalaus
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            Luomme kotiisi uuden ilmeen laadukkailla maalaustöillä. Hoidamme seinät, katot ja muut pinnat ammattitaidolla ja siististi, suojauksista loppusiivoukseen.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="w-5 h-5 text-fuchsia-500" /> Seinien ja kattojen maalaus
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="w-5 h-5 text-fuchsia-500" /> Tasoitetyöt ja pohjustukset
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="w-5 h-5 text-fuchsia-500" /> Listoitukset ja viimeistelyt
            </li>
          </ul>
        </div>
      </div>

      {/* OSA 2: Tapetointi (Teksti Ensin - Kuva Vieressä) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Teksti */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Tapetointi
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
            Tapetoinnilla saat tilaan helposti uutta ilmettä ja tunnelmaa. Asennamme kaikenlaiset tapetit huolellisesti ja tarkasti, aina kuviosahdistusta myöten.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="w-5 h-5 text-fuchsia-500" /> Kuitu- ja paperitapetit
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="w-5 h-5 text-fuchsia-500" /> Vanhan tapetin poisto
            </li>
            <li className="flex items-center gap-3 text-neutral-300">
              <CheckCircle className="w-5 h-5 text-fuchsia-500" /> Pohjatyöt tasaista pintaa varten
            </li>
          </ul>
        </div>

        {/* Kuva */}
        <div className="relative group">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop" 
              alt="Tapetointia" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
);

// Etusivun Referenssi-preview
const HomeReferencesPreview = ({ navigateTo }: { navigateTo: (id: string) => void }) => (
  <section>
        <div className="max-w-7xl mx-auto px-6 py-20">
       <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-2 block">Referenssit</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Viimeisimmät <span className="text-fuchsia-600">kohteet</span></h2>
          </div>
          <button onClick={() => navigateTo('references')} className="hidden md:flex items-center gap-2 text-white hover:text-fuchsia-500 transition-colors font-medium">
            Katso galleria <ArrowRight size={20} />
          </button>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {referencesData.slice(0, 3).map((ref) => (
          <div key={ref.id} className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-white/5">
               <img src={ref.src} alt={ref.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 flex items-end p-6">
                  <h4 className="text-white font-bold text-lg translate-y-2 group-hover:translate-y-0 transition-transform">{ref.title}</h4>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

// Etusivun Yhteystieto-osio
const HomeContactPreview = ({ navigateTo }: { navigateTo: (id: string) => void }) => (
  <section>
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Valmiina aloittamaan?</h2>
      <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
        Tarjoamme ilmaisen arviokäynnin ja selkeän tarjouksen. Ota yhteyttä, niin suunnitellaan urakka yhdessä.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
         <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-fuchsia-500">
               <Phone size={24} />
            </div>
            <div className="text-left">
               <div className="text-sm text-neutral-400">Soita meille</div>
               <div className="font-bold">045 846 6055</div>
            </div>
         </div>
         <div className="hidden sm:block w-px h-12 bg-neutral-800"></div>
         <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-fuchsia-500">
               <Mail size={24} />
            </div>
            <div className="text-left">
               <div className="text-sm text-neutral-400">Sähköposti</div>
               <div className="font-bold">info@js-laatupinta.fi</div>
            </div>
         </div>
      </div>
    </div>
  </section>
);


// Palvelut-sivu (Varsinainen sivu) - PÄIVITETTY ILMAN KORTTEJA
const ServicesPage = ({ navigateTo }: { navigateTo: (id: string) => void }) => {
  const detailedServices = [
    {
      ...servicesData[0],
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop"
    },
    {
      ...servicesData[1],
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop"
    },
    {
      ...servicesData[2],
      image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop" 
    },
    {
      ...servicesData[3],
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1200&auto=format&fit=crop"
    },
    {
      ...servicesData[4],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full pb-10">
      <section 
        className="min-h-screen flex flex-col items-start justify-start antialiased relative overflow-hidden w-full"
      >
        <Navigation activePage='services' navigateTo={navigateTo} isInsideHero={true} />
        
        <div className="p-6 max-w-7xl mx-auto relative z-20 w-full pt-32 md:pt-40">
           {/* Header Content */}
           <div className="mb-24 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Remontit suurella <br />
                <span className="text-fuchsia-600">sydämellä</span>
              </h2>
              <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                Tarjoamme monipuoliset maalaus- ja pintakäsittelypalvelut. Tutustu tarjontaamme ja kysy lisää – räätälöimme ratkaisun juuri sinulle.
              </p>
           </div>
           
           {/* Alternating Layout List */}
           <div className="flex flex-col gap-32 pb-24">
              {detailedServices.map((service, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Text Section */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-fuchsia-500 mb-6">
                       <service.icon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-neutral-300">
                          <CheckCircle className="w-5 h-5 text-fuchsia-500 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Section */}
                  <div className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
           </div>

        </div>
      </section>
    </div>
  );
};

// Referenssit-sivu
const ReferencesPage = () => {
  const [selectedImage, setSelectedImage] = useState<{ id: number; src: string; title: string } | null>(null);

  return (
    <div
      className="pt-32 pb-24 min-h-screen bg-black"
      style={{
        background:
          "radial-gradient(circle at 30% 70%, #6b2bff40 0%, transparent 45%), radial-gradient(circle at 70% 30%, #000000b3 0%, transparent 55%), linear-gradient(180deg, #000000 0%, #000000 100%)",
        filter: "brightness(1.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-2 block">Referenssit</span>
            <h2 className="text-4xl font-bold text-white">Jälkeä, joka <span className="text-fuchsia-600">kestää katseet</span></h2>
          </div>
          <p className="text-neutral-400 mt-4 md:mt-0 max-w-md">
            Tutustu toteuttamiimme kohteisiin. Teemme työt aina siististi ja aikataulussa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {referencesData.map((ref) => (
            <div 
              key={ref.id}
              onClick={() => setSelectedImage(ref)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-fuchsia-500/50 transition-all duration-300"
            >
              <img 
                src={ref.src} 
                alt={ref.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Maximize2 className="text-fuchsia-500 mb-2 w-8 h-8" />
                <h4 className="text-white font-bold text-lg">{ref.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-fuchsia-500 transition-colors">
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full rounded-lg shadow-xl shadow-black/40" />
            <h3 className="text-white text-xl font-bold mt-4 text-center">{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

// Yhteydenottosivu
const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm mb-2 block">Ota yhteyttä</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Aloitetaan <span className="text-fuchsia-600">projektisi</span></h2>
            <p className="text-neutral-400 text-lg mb-10">
              Olipa kyseessä pieni pintaremontti tai koko kodin maalausurakka, olemme apunasi. Pyydä ilmainen arvio!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 text-fuchsia-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Toimipaikka</h4>
                  <p className="text-neutral-400">Santaradantie 7 E, 01380 Vantaa</p>
                  <p className="text-neutral-500 text-sm mt-1">Posti: Pakkalanrinne 5 A 7, 01510 Vantaa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 text-fuchsia-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Soita meille</h4>
                  <p className="text-neutral-400">045 846 6055</p>
                  <p className="text-neutral-500 text-sm">Arkisin 8:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-900 p-3 rounded-lg border border-neutral-800 text-fuchsia-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">Sähköposti</h4>
                  <p className="text-neutral-400">info@js-laatupinta.fi</p>
                  <p className="text-neutral-500 text-sm">Vastaamme 24h sisällä</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h5 className="text-white font-bold mb-4">Seuraa meitä somessa</h5>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-fuchsia-500/30 flex items-center justify-center text-neutral-400 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-600 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Billing Info Side (Replaces Form) */}
          <div className="bg-black rounded-2xl p-5 md:p-6 border border-white/10 shadow-lg h-fit max-w-sm mx-auto md:mx-0">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Laskutustiedot</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Yritys</p>
                <p className="text-white font-bold text-lg">JS-Laatupinta Oy</p>
              </div>
              
              <div>
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Y-tunnus</p>
                <p className="text-white font-medium text-lg">3306460-9</p>
              </div>

              <div>
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Verkkolaskutusosoite</p>
                <p className="text-white font-medium text-lg tracking-wide">003733064609</p>
              </div>

              <div>
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Välittäjätunnus</p>
                <p className="text-white font-medium text-lg">003723327487</p>
              </div>

              <div>
                <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Verkkolaskuvälittäjä</p>
                <p className="text-white font-medium text-lg">APIX Messaging Oy</p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Map placeholder with grayscale effect */}
        <div className="mt-16 w-full h-64 md:h-80 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976.2415162431417!2d24.9654166!3d60.2941666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469207b7b7b7b7b7%3A0x123456789abcdef!2sSantaradantie%207%2C%2001380%20Vantaa!5e0!3m2!1sfi!2sfi!4v1620000000000!5m2!1sfi!2sfi" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Sijainti kartalla"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => (
  <footer 
    className="pt-16 pb-32 md:pb-36 text-sm border-t border-neutral-800"
    style={{
      background: "radial-gradient(circle at 30% 70%, #6b2bff30 0%, transparent 45%), radial-gradient(circle at 70% 30%, #000000b3 0%, transparent 55%), linear-gradient(180deg, #000000 0%, #000000 100%)",
    }}
  >
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="JS-Laatupinta" className="h-16 md:h-20 w-auto" />
      </div>
      
      <div className="text-neutral-500">
        © {new Date().getFullYear()} JS-Laatupinta Oy. Kaikki oikeudet pidätetään. <span className="mx-2">|</span> Y-tunnus: 3306460-9
      </div>

      <div className="flex gap-6 text-neutral-400">
        <a href="#" className="hover:text-fuchsia-500 transition-colors">Tietosuojaseloste</a>
        <a href="#" className="hover:text-fuchsia-500 transition-colors">Toimitusehdot</a>
      </div>
    </div>
  </footer>
);

// Pääsovellus ja sivunhallinta
const Index = () => {
  const [activePage, setActivePage] = useState('home');

  const navigateTo = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      className="min-h-screen text-white font-sans selection:bg-fuchsia-500 selection:text-white flex flex-col"
      style={{
        background:
          "radial-gradient(circle at 30% 70%, #6b2bff40 0%, transparent 45%), radial-gradient(circle at 70% 30%, #000000b3 0%, transparent 55%), linear-gradient(180deg, #000000 0%, #000000 100%)",
        filter: "brightness(1.1)",
      }}
    >
      <FloatingContactButton />
      
      {/* Show global navigation only when NOT on home page and NOT on services page (since they have internal nav) */}
      {activePage !== 'home' && activePage !== 'services' && <Navigation activePage={activePage} navigateTo={navigateTo} />}
      
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <Hero activePage={activePage} navigateTo={navigateTo} />
            <HomeServicesPreview navigateTo={navigateTo} />
            <HomeReferencesPreview navigateTo={navigateTo} />
            <HomeContactPreview navigateTo={navigateTo} />
          </>
        )}
        {activePage === 'services' && <ServicesPage navigateTo={navigateTo} />}
        {activePage === 'references' && <ReferencesPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
