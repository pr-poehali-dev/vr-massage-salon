import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: 'Mountain',
      title: 'Горные вершины',
      description: 'Массаж в окружении величественных гор и свежего воздуха',
      price: '2500 ₽'
    },
    {
      icon: 'Waves',
      title: 'Океанский бриз',
      description: 'Релаксация под звуки прибоя на берегу теплого моря',
      price: '2800 ₽'
    },
    {
      icon: 'Trees',
      title: 'Лесной оазис',
      description: 'Погружение в атмосферу дикого леса с пением птиц',
      price: '2500 ₽'
    },
    {
      icon: 'Sunset',
      title: 'Закат в пустыне',
      description: 'Медитативный массаж на фоне розового заката',
      price: '3000 ₽'
    },
    {
      icon: 'Flower2',
      title: 'Сад сакуры',
      description: 'Японский массаж в цветущем саду сакуры',
      price: '3200 ₽'
    },
    {
      icon: 'Sparkles',
      title: 'Северное сияние',
      description: 'Уникальный опыт под сиянием полярных огней',
      price: '3500 ₽'
    }
  ];

  const reviews = [
    {
      name: 'Анна Смирнова',
      text: 'Невероятный опыт! Впервые попробовала VR-массаж и была поражена. Ощущение полного присутствия на океане.',
      rating: 5
    },
    {
      name: 'Дмитрий Петров',
      text: 'Отличная альтернатива обычному массажу. Визуализация помогает полностью расслабиться и забыть о проблемах.',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      text: 'Хожу уже третий месяц. Особенно нравится программа с горами. После сеанса чувствую прилив энергии!',
      rating: 5
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/ce2c8a9c-410b-472f-acdf-1838b003e114/files/bafd3f51-c24d-4acc-ad35-6bdb8c44fa63.jpg',
    'https://cdn.poehali.dev/projects/ce2c8a9c-410b-472f-acdf-1838b003e114/files/4b25d0f0-0698-4844-877f-9731e0d4f084.jpg',
    'https://cdn.poehali.dev/projects/ce2c8a9c-410b-472f-acdf-1838b003e114/files/fc4c3d3b-cdda-4292-a6f2-b54ea63267ab.jpg'
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-primary">VR Релакс</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О нас', 'Услуги', 'Цены', 'Галерея', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground/70 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:block">Записаться</Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-24 pb-16 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Массаж в <span className="text-primary">виртуальной реальности</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Погрузитесь в мир абсолютного расслабления. Сочетание профессионального массажа и 
                иммерсивных VR-пространств для максимального эффекта.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на сеанс
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={galleryImages[0]} 
                alt="VR массажный салон" 
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">О нас</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы первый в России салон, объединивший традиционные техники массажа с технологиями 
              виртуальной реальности. Наши специалисты прошли обучение в лучших школах массажа, 
              а VR-пространства разработаны совместно с психологами для достижения максимального 
              расслабляющего эффекта.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <Icon name="Award" size={48} className="mx-auto text-primary" />
                <h3 className="text-2xl font-bold">5 лет</h3>
                <p className="text-muted-foreground">На рынке wellness услуг</p>
              </div>
              <div className="space-y-2">
                <Icon name="Users" size={48} className="mx-auto text-primary" />
                <h3 className="text-2xl font-bold">10000+</h3>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
              <div className="space-y-2">
                <Icon name="Star" size={48} className="mx-auto text-primary" />
                <h3 className="text-2xl font-bold">4.9</h3>
                <p className="text-muted-foreground">Средний рейтинг</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши VR-программы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите виртуальное пространство для вашего сеанса массажа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-lg text-muted-foreground">Выберите подходящий вариант</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Пробный сеанс</CardTitle>
                <CardDescription>Идеально для первого знакомства</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">2000 ₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>30 минут массажа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Любая VR-программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Консультация специалиста</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>Оптимальное соотношение цены и времени</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">3500 ₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>60 минут массажа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Любая VR-программа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Ароматерапия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Чай после сеанса</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <CardDescription>Максимальное погружение и релакс</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-primary">5500 ₽</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>90 минут массажа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>2 VR-программы</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Ароматерапия</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Чай и снеки</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Запись сеанса</span>
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-lg text-muted-foreground">Наше пространство и VR-локации</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img src={img} alt={`Галерея ${index + 1}`} className="w-full h-80 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">Запишитесь на сеанс или задайте вопрос</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@vrrelax.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Часы работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={4} />
                    </div>
                    <Button className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" className="text-primary" size={24} />
            <span className="text-xl font-bold">VR Релакс</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 VR Релакс. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
