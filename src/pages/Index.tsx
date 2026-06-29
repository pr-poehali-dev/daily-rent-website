import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const objects = [
  {
    title: 'Резиденция «Панорама»',
    location: 'Москва-Сити, башня Федерация',
    price: '12 500',
    guests: 4,
    rooms: 2,
    area: 78,
    image: 'https://cdn.poehali.dev/projects/898e7672-cbb3-4c3e-85d0-048df965309b/files/8e5732a0-9b78-44ff-9105-686973bd6cfe.jpg',
  },
  {
    title: 'Студия «Скандинавия»',
    location: 'Центр, Патриаршие пруды',
    price: '7 900',
    guests: 2,
    rooms: 1,
    area: 42,
    image: 'https://cdn.poehali.dev/projects/898e7672-cbb3-4c3e-85d0-048df965309b/files/ccd2e127-0b50-44fe-b6b9-ce3d5b02449a.jpg',
  },
  {
    title: 'Пентхаус «Меридиан»',
    location: 'Пресненская набережная',
    price: '24 000',
    guests: 6,
    rooms: 3,
    area: 124,
    image: 'https://cdn.poehali.dev/projects/898e7672-cbb3-4c3e-85d0-048df965309b/files/1918e643-323a-4455-9c85-d3ace1b0385d.jpg',
  },
];

const reviews = [
  {
    name: 'Анна Соколова',
    role: 'Руководитель департамента',
    text: 'Безупречный сервис и внимание к деталям. Апартаменты соответствовали фотографиям полностью. Останавливалась трижды по работе.',
  },
  {
    name: 'Дмитрий Орлов',
    role: 'Финансовый директор',
    text: 'Бронирование заняло минуту, заселение без задержек. Идеальная локация для деловых поездок в центр столицы.',
  },
  {
    name: 'Елена Морозова',
    role: 'Архитектор',
    text: 'Эстетика интерьеров на высшем уровне. Чистота, тишина и продуманный комфорт. Рекомендую коллегам.',
  },
];

const nav = [
  { label: 'Главная', id: 'home' },
  { label: 'Объекты', id: 'objects' },
  { label: 'Отзывы', id: 'reviews' },
  { label: 'Контакты', id: 'contacts' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-primary">РЕЗИДЕНЦИЯ</span>
          </button>
          <nav className="hidden md:flex items-center gap-10">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="hidden md:inline-flex rounded-none bg-accent hover:bg-accent/90 text-accent-foreground tracking-wide">
            Забронировать
          </Button>
          <button className="md:hidden text-primary" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
            {nav.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-muted-foreground hover:text-primary">
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/898e7672-cbb3-4c3e-85d0-048df965309b/files/9c88a8f1-c083-4771-965a-32c9c7197a4f.jpg"
            alt="Квартира у аэропорта Владивосток"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="container relative z-10 py-24">
          <div className="animate-fade-up inline-flex items-center gap-2.5 bg-background/10 backdrop-blur-sm border border-background/20 px-4 py-2 mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            <span className="text-background/90 text-sm tracking-wide">Свободные даты — бронь за 5 минут</span>
          </div>
          <h1 className="animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] text-background max-w-4xl" style={{ animationDelay: '0.2s' }}>
            Квартира у аэропорта<br />Владивосток
          </h1>
          <p className="animate-fade-up mt-8 text-background/80 text-lg max-w-xl leading-relaxed" style={{ animationDelay: '0.35s' }}>
            Уютная квартира в нескольких минутах от аэропорта. Ранний заезд, поздний выезд, всё для комфортной остановки между рейсами или перед вылетом.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.5s' }}>
            <Button onClick={() => scrollTo('contacts')} className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8 tracking-wide">
              Проверить свободные даты
            </Button>
            <Button variant="outline" className="rounded-none h-12 px-8 tracking-wide bg-transparent border-background/40 text-background hover:bg-background hover:text-primary">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
          <div className="animate-fade-up mt-12 flex flex-wrap gap-x-8 gap-y-3 text-background/80 text-sm" style={{ animationDelay: '0.6s' }}>
            <span className="flex items-center gap-2"><Icon name="Star" size={16} className="text-accent" /> Рейтинг 4.9</span>
            <span className="flex items-center gap-2"><Icon name="ShieldCheck" size={16} className="text-accent" /> Залог возвращается</span>
            <span className="flex items-center gap-2"><Icon name="Clock" size={16} className="text-accent" /> Заезд 24/7</span>
          </div>
          <div className="animate-fade-up mt-12 inline-flex flex-wrap items-center gap-x-10 gap-y-5 bg-background text-primary p-6 md:p-7 max-w-2xl" style={{ animationDelay: '0.7s' }}>
            <div>
              <div className="text-muted-foreground text-xs tracking-wide uppercase mb-1">Стоимость</div>
              <div className="font-display text-3xl font-semibold">от 2 500 ₽<span className="text-base text-muted-foreground font-body">/сутки</span></div>
            </div>
            <div className="border-l border-border pl-10">
              <div className="text-muted-foreground text-xs tracking-wide uppercase mb-1">До аэропорта</div>
              <div className="font-display text-3xl font-semibold">5–10 мин</div>
            </div>
            <Button onClick={() => scrollTo('contacts')} className="rounded-none bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-7 tracking-wide ml-auto">
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-secondary/40">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent text-sm tracking-wider-2 uppercase mb-4">Узнаёте себя?</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-primary mb-10 leading-tight">
                Три ситуации,<br />когда важно быть рядом
              </h2>
              <div className="space-y-5">
                <div className="bg-card border border-border p-6 flex gap-5 items-start hover:border-accent/50 transition-colors duration-300">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary flex items-center justify-center text-background">
                    <Icon name="AlarmClock" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1.5">Ранний рейс в 5 утра</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Такси до отеля в центре — 1,5 часа в пробках. Мы — в 10 минутах. Выспитесь, а не сидите в зале ожидания.
                    </p>
                  </div>
                </div>
                <div className="bg-card border border-border p-6 flex gap-5 items-start hover:border-accent/50 transition-colors duration-300">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary flex items-center justify-center text-background">
                    <Icon name="BriefcaseBusiness" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1.5">Командировка без суеты</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Несколько встреч в городе, потом сразу вылет. Нужна база рядом с аэропортом — без лишних трансферов и потерянных часов.
                    </p>
                  </div>
                </div>
                <div className="bg-card border border-border p-6 flex gap-5 items-start hover:border-accent/50 transition-colors duration-300">
                  <div className="w-12 h-12 flex-shrink-0 bg-primary flex items-center justify-center text-background">
                    <Icon name="CircleAlert" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1.5">Квартира-«сюрприз»</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Заказали жильё с фото из 2012-го, а приехали — совсем другое. У нас честные фото, точный адрес и гарантия соответствия.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/898e7672-cbb3-4c3e-85d0-048df965309b/files/e1a8b212-9bf0-4613-bf19-bd142edde6f6.jpg"
                alt="Аэропорт Владивосток ночью"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-accent text-accent-foreground px-6 py-4">
                <div className="font-display text-3xl font-semibold">5 мин</div>
                <div className="text-sm tracking-wide mt-0.5">до терминала</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution — Bento Grid */}
      <section className="py-24 bg-primary text-background">
        <div className="container">
          <div className="mb-12">
            <p className="text-accent text-sm tracking-wider-2 uppercase mb-4">Почему мы</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
              Всё, что нужно —<br />уже внутри
            </h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Фото квартиры — большая карточка */}
            <div className="col-span-2 row-span-2 relative overflow-hidden min-h-[320px]">
              <img
                src="https://cdn.poehali.dev/projects/898e7672-cbb3-4c3e-85d0-048df965309b/files/bcb3549b-a244-4780-a13f-0ab11d10ace1.jpg"
                alt="Реальное фото квартиры"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-primary/30" />
              <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
                <span className="bg-accent text-accent-foreground text-xs px-3 py-1.5 tracking-wide font-semibold">
                  ✓ Реальные фото
                </span>
                <span className="bg-background text-primary text-xs px-3 py-1.5 tracking-wide font-semibold">
                  ✦ Новый ремонт
                </span>
              </div>
            </div>

            {/* 24/7 акцент */}
            <div className="col-span-2 md:col-span-2 bg-accent text-accent-foreground p-7 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={22} />
                <span className="text-sm tracking-wide">Заезд в любое время</span>
              </div>
              <div className="font-display text-8xl md:text-9xl font-semibold leading-none mt-4 opacity-95">
                24/7
              </div>
            </div>

            {/* Уборка */}
            <div className="bg-background/10 border border-background/15 hover:bg-background/15 transition-colors p-6 flex flex-col gap-4">
              <div className="w-10 h-10 bg-background/10 flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-semibold mb-1">Уборка</div>
                <div className="text-background/60 text-sm">Перед каждым заездом. Свежее бельё и полотенца.</div>
              </div>
            </div>

            {/* Кухня */}
            <div className="bg-background/10 border border-background/15 hover:bg-background/15 transition-colors p-6 flex flex-col gap-4">
              <div className="w-10 h-10 bg-background/10 flex items-center justify-center">
                <Icon name="UtensilsCrossed" size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-semibold mb-1">Полная кухня</div>
                <div className="text-background/60 text-sm">Плита, холодильник, микроволновка, посуда.</div>
              </div>
            </div>

            {/* Wi-Fi */}
            <div className="bg-background/10 border border-background/15 hover:bg-background/15 transition-colors p-6 flex flex-col gap-4">
              <div className="w-10 h-10 bg-background/10 flex items-center justify-center">
                <Icon name="Wifi" size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-semibold mb-1">Wi-Fi 100 Мбит</div>
                <div className="text-background/60 text-sm">Быстрый интернет для работы и видеозвонков.</div>
              </div>
            </div>

            {/* Парковка */}
            <div className="bg-background/10 border border-background/15 hover:bg-background/15 transition-colors p-6 flex flex-col gap-4">
              <div className="w-10 h-10 bg-background/10 flex items-center justify-center">
                <Icon name="ParkingSquare" size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-semibold mb-1">Парковка</div>
                <div className="text-background/60 text-sm">Бесплатное место рядом с домом.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Objects */}
      <section id="objects" className="py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-accent text-sm tracking-wider-2 uppercase mb-4">Каталог</p>
              <h2 className="font-display text-5xl md:text-6xl font-medium text-primary">Избранные объекты</h2>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Каждый объект проходит проверку наших специалистов. Цена указана за сутки.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {objects.map((obj) => (
              <article key={obj.title} className="group bg-card border border-border hover:shadow-xl transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img src={obj.image} alt={obj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground text-sm px-4 py-1.5 tracking-wide">
                    {obj.price} ₽ / сутки
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold text-primary mb-2">{obj.title}</h3>
                  <p className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    {obj.location}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-5">
                    <span className="flex items-center gap-2"><Icon name="Users" size={16} /> {obj.guests} гостя</span>
                    <span className="flex items-center gap-2"><Icon name="DoorOpen" size={16} /> {obj.rooms} комн.</span>
                    <span className="flex items-center gap-2"><Icon name="Maximize" size={16} /> {obj.area} м²</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-28 bg-primary text-background">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent text-sm tracking-wider-2 uppercase mb-4">Отзывы</p>
            <h2 className="font-display text-5xl md:text-6xl font-medium">Нам доверяют</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((rev) => (
              <div key={rev.name} className="border border-background/15 p-8 hover:border-accent/60 transition-colors duration-500">
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={18} fallback="Star" />)}
                </div>
                <p className="text-background/85 leading-relaxed mb-8 font-display text-xl">«{rev.text}»</p>
                <div className="border-t border-background/15 pt-5">
                  <div className="font-semibold">{rev.name}</div>
                  <div className="text-background/60 text-sm">{rev.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-28">
        <div className="container grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-accent text-sm tracking-wider-2 uppercase mb-4">Контакты</p>
            <h2 className="font-display text-5xl md:text-6xl font-medium text-primary mb-8">Забронировать</h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Оставьте заявку — персональный менеджер свяжется с вами в течение 15 минут и подберёт идеальный вариант.
            </p>
            <div className="space-y-6">
              {[
                ['Phone', '+7 (495) 000-00-00'],
                ['Mail', 'booking@residence.ru'],
                ['MapPin', 'Москва, Пресненская наб., 12'],
                ['Clock', 'Ежедневно, 09:00 — 21:00'],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-11 h-11 flex items-center justify-center bg-secondary text-accent">
                    <Icon name={icon} size={20} />
                  </div>
                  <span className="text-primary">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <form className="bg-card border border-border p-8 md:p-10 space-y-5">
            <div>
              <label className="block text-sm text-muted-foreground mb-2 tracking-wide">Ваше имя</label>
              <input type="text" className="w-full h-12 px-4 bg-background border border-input focus:border-accent outline-none transition-colors" placeholder="Иван Иванов" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 tracking-wide">Телефон</label>
              <input type="tel" className="w-full h-12 px-4 bg-background border border-input focus:border-accent outline-none transition-colors" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2 tracking-wide">Комментарий</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-background border border-input focus:border-accent outline-none transition-colors resize-none" placeholder="Даты заезда, пожелания..." />
            </div>
            <Button type="button" className="w-full rounded-none bg-accent hover:bg-accent/90 text-accent-foreground h-12 tracking-wide">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-background/70 py-10 border-t border-background/10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-display text-xl text-background">РЕЗИДЕНЦИЯ</span>
          <span>© 2026 Резиденция. Премиальная посуточная аренда.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;