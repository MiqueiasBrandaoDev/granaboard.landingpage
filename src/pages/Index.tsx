import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageCircle, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Zap,
  Target,
  CreditCard,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  DollarSign,
  Award,
  Eye,
  Lightbulb,
  Banknote,
  Timer,
  Lock,
  HeartHandshake,
  Sparkles,
  TrendingDown,
  Calendar,
  ChevronRight,
  Minus,
  Plus,
  Send
} from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Index = () => {
  const transformativeFeatures = [
    {
      icon: MessageCircle,
      title: "Controle via WhatsApp",
      description: "Envie uma foto do cupom fiscal e pronto! Receba alertas automáticos e consulte seu saldo a qualquer momento.",
      benefit: "Sem apps extras para aprender"
    },
    {
      icon: Brain,
      title: "IA Financeira Avançada",
      description: "GPT-4 categoriza automaticamente seus gastos, detecta padrões e prevê gastos futuros.",
      benefit: "Economia de 85% no tempo"
    },
    {
      icon: BarChart3,
      title: "Dashboard Inteligente",
      description: "Visão completa das suas finanças em segundos com gráficos e alertas personalizados.",
      benefit: "Decisões baseadas em dados"
    },
    {
      icon: Lightbulb,
      title: "Insights Personalizados",
      description: "Descubra onde você mais gasta, receba dicas baseadas no seu perfil e identifique oportunidades.",
      benefit: "23% de economia no 1º mês"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Conecte seu WhatsApp",
      description: "Em 2 minutos você está pronto para começar"
    },
    {
      step: "2", 
      title: "Envie suas transações",
      description: "Foto do cupom, mensagem de texto ou nota de voz"
    },
    {
      step: "3",
      title: "IA processa tudo",
      description: "Categorização automática e insights personalizados"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Arquiteta",
      text: "Consegui economizar R$ 800 no primeiro mês só seguindo as dicas da IA",
      rating: 5
    },
    {
      name: "João Santos", 
      role: "Engenheiro",
      text: "Nunca pensei que controlar minhas finanças fosse tão fácil",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Designer",
      text: "Em 3 meses consegui juntar para minha viagem dos sonhos",
      rating: 5
    }
  ];

  const results = [
    { number: "23%", label: "Economia média no 1º mês" },
    { number: "85%", label: "Redução no tempo de controle" },
    { number: "94%", label: "Usuários atingem suas metas" },
    { number: "78%", label: "Redução do stress financeiro" }
  ];

  const faq = [
    {
      question: "Como funciona a integração com WhatsApp?",
      answer: "Você adiciona nosso número oficial do WhatsApp e começa a enviar suas transações. Nossa IA processa automaticamente fotos de cupons, mensagens de texto e notas de voz."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Sim! Usamos criptografia de ponta a ponta, servidores brasileiros e nunca compartilhamos seus dados pessoais. Empresa registrada no Brasil com suporte 24/7."
    },
    {
      question: "Preciso baixar algum app?",
      answer: "Não! Tudo funciona pelo WhatsApp que você já usa. Opcionalmente, você pode acessar o dashboard pelo navegador para relatórios detalhados."
    },
    {
      question: "Como cancelo se não gostar?",
      answer: "Cancelamento instantâneo pelo próprio WhatsApp. Sem burocracias, sem taxas. Reembolso garantido nos primeiros 7 dias."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-gradient-accent sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-primary">Grana Board</span>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" className="text-primary hidden sm:inline-flex">
              Como Funciona
            </Button>
            <Button variant="cta" size="sm" className="sm:size-lg text-sm sm:text-base">
              <span className="hidden sm:inline">Teste 3 Dias Grátis</span>
              <span className="sm:hidden">Teste Grátis</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <Badge variant="outline" className="border-primary text-primary px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
                🚀 Primeiro do Brasil com IA nativa
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Transforme sua vida financeira
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  em 30 dias
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                Controle total das suas finanças direto pelo WhatsApp. 
                <strong> Sem planilhas, sem complicação, sem estresse.</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Button variant="hero" size="lg" className="group shadow-glow w-full sm:w-auto">
                <span className="hidden sm:inline">Comece Seu Teste de 3 Dias</span>
                <span className="sm:hidden">Teste 3 Dias Grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-primary border-primary hover:bg-primary/10 w-full sm:w-auto">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Ver Demonstração</span>
                <span className="sm:hidden">Demo</span>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                <span>Teste 3 dias grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                <span>Cancelamento instantâneo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {result.number}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground px-2">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                  Imagina nunca mais se preocupar com dinheiro no final do mês
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Chega de planilhas complicadas, de não saber para onde foi seu dinheiro 
                  e de stress no final do mês. <strong>Finalmente uma solução que funciona de verdade.</strong>
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-destructive/20 text-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Minus className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Sem controle financeiro</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Não sabe para onde vai seu dinheiro e sempre fica no vermelho</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success/20 text-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">Controle total pelo WhatsApp</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">IA categoriza tudo automaticamente e você sabe exatamente onde está gastando</p>
                  </div>
                </div>
              </div>

              <Button variant="cta" size="lg" className="group w-full sm:w-auto">
                <span className="hidden sm:inline">Transforme Suas Finanças Agora</span>
                <span className="sm:hidden">Transforme Suas Finanças</span>
                <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Grana Board Dashboard" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl"></div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-success rounded-full blur-xl opacity-70"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-primary rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Veja sua vida financeira se transformar em dias
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Recursos únicos que fazem você economizar tempo e dinheiro desde o primeiro dia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {transformativeFeatures.map((feature, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-primary-glow transition-all duration-300 border-primary/20 bg-gradient-card">
                <CardContent className="p-0 space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
                    <div className="text-xs sm:text-sm font-medium text-success">✓ {feature.benefit}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              3 passos simples para transformar suas finanças
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
              Setup em 2 minutos. Resultados desde o primeiro dia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-xl sm:text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground px-4 sm:px-0">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <span className="hidden sm:inline">Conectar WhatsApp Agora</span>
              <span className="sm:hidden">Conectar WhatsApp</span>
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground px-4 sm:px-0">
              Mais de 10.000 brasileiros já transformaram suas finanças
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-current" />
                ))}
              </div>
              <span className="text-sm sm:text-base text-muted-foreground">4.9/5 de satisfação</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-4 sm:p-6 border-primary/20 bg-gradient-card">
                <CardContent className="p-0 space-y-3 sm:space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-foreground font-medium">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Invista menos que um café por dia
            </h2>
            <p className="text-xl text-muted-foreground">
              R$ 0,85 por dia para transformar sua vida financeira
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Plano Mensal */}
            <Card className="p-8 border-primary/20 bg-gradient-card relative">
              <CardContent className="p-0 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Plano Mensal</h3>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">R$ 29</div>
                    <div className="text-muted-foreground">por mês</div>
                    <div className="text-sm text-muted-foreground">Menos que um almoço por semana</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Controle completo via WhatsApp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>IA para categorização automática</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Dashboard inteligente completo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Relatórios e insights personalizados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span>Suporte 24/7 em português</span>
                  </li>
                </ul>

                <Button variant="cta" size="lg" className="w-full">
                  Teste 3 Dias Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Plano Anual */}
            <Card className="p-8 border-primary bg-gradient-card relative shadow-glow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge variant="default" className="bg-destructive text-destructive-foreground animate-pulse">
                  🔥 Mais Popular - Economize R$ 36
                </Badge>
              </div>
              
              <CardContent className="p-0 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Plano Anual</h3>
                  <div className="space-y-1">
                    <div className="text-4xl font-bold text-primary">R$ 312</div>
                    <div className="text-muted-foreground">por ano</div>
                    <div className="text-sm text-success font-medium">Economia de R$ 36 vs mensal</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                    <span className="text-sm sm:text-base">Tudo do plano mensal</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                    <span className="text-sm sm:text-base">2 meses grátis inclusos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                    <span className="text-sm sm:text-base">Preço bloqueado por vida</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                    <span className="text-sm sm:text-base">Acesso prioritário a novos recursos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                    <span className="text-sm sm:text-base">Consultoria financeira gratuita</span>
                  </li>
                </ul>

                <Button variant="hero" size="lg" className="w-full">
                  <span className="hidden sm:inline">Garantir Preço Vitalício</span>
                  <span className="sm:hidden">Garantir Preço</span>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 sm:mt-12 space-y-4">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Reembolso em 7 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Dados seguros</span>
              </div>
              <div className="flex items-center space-x-2">
                <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Suporte brasileiro</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-muted-foreground px-4 sm:px-0">
              Investimento que se paga em economia no primeiro mês
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-12 sm:py-16 bg-destructive/10 border-y border-destructive/20">
        <div className="container mx-auto px-4 text-center space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              ⚡ Vagas limitadas para o beta
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
              Apenas os primeiros 1000 usuários terão acesso ao preço promocional vitalício
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-6 sm:space-x-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-destructive">847</div>
              <div className="text-xs sm:text-sm text-muted-foreground">vagas restantes</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-destructive">3</div>
              <div className="text-xs sm:text-sm text-muted-foreground">dias restantes</div>
            </div>
          </div>

          <Button variant="urgency" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            <span className="hidden sm:inline">Garantir Minha Vaga Agora</span>
            <span className="sm:hidden">Garantir Vaga</span>
            <Timer className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Dúvidas frequentes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4 sm:px-0">
              Tudo que você precisa saber antes de começar
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {faq.map((item, index) => (
              <Card key={index} className="p-4 sm:p-6 border-primary/20 bg-gradient-card">
                <CardContent className="p-0 space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{item.question}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Pronto para nunca mais se preocupar com dinheiro?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4 sm:px-0">
              Junte-se aos milhares de brasileiros que já controlam suas finanças 
              de forma inteligente. <strong>Comece hoje e veja resultados em 7 dias.</strong>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              <span className="hidden sm:inline">Teste 3 Dias Sem Compromisso</span>
              <span className="sm:hidden">Teste 3 Dias Grátis</span>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              <span className="hidden sm:inline">Ver Demonstração Completa</span>
              <span className="sm:hidden">Ver Demo</span>
            </Button>
          </div>

          <div className="text-white/80 text-xs sm:text-sm px-4 sm:px-0">
            ✅ Sem cartão de crédito ✅ Cancelamento a qualquer momento ✅ Suporte 24/7
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Grana Board</span>
            </div>
            
            <div className="text-center md:text-right space-y-2">
              <p className="text-xs sm:text-sm opacity-80">
                Transformando vidas financeiras no Brasil 🇧🇷
              </p>
              <p className="text-xs opacity-60">
                Empresa brasileira • Dados seguros • Suporte 24/7
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;