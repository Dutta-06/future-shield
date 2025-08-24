
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 gradient-secondary rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 gradient-primary rounded-full opacity-10 animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          <Badge variant="outline" className="border-primary/50 text-primary glow-primary px-4 py-2">
            🤖 AI-Powered Security
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold font-mono">
            <span className="text-gradient">FRAUD</span>
            <span className="text-foreground">SHIELD</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Next-generation credit card fraud detection platform powered by 
            <span className="text-primary font-semibold"> Random Forest</span> and 
            <span className="text-secondary font-semibold"> XGBoost</span> machine learning models
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in-delay">
            <Card className="bg-card/50 border-primary/20 backdrop-blur-sm p-6 hover:glow-primary transition-all duration-300">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-lg font-semibold text-primary mb-2">Real-time Detection</h3>
              <p className="text-sm text-muted-foreground">Millisecond fraud detection with 99.7% accuracy</p>
            </Card>
            
            <Card className="bg-card/50 border-secondary/20 backdrop-blur-sm p-6 hover:glow-secondary transition-all duration-300">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Dual AI Models</h3>
              <p className="text-sm text-muted-foreground">Random Forest & XGBoost ensemble learning</p>
            </Card>
            
            <Card className="bg-card/50 border-accent/20 backdrop-blur-sm p-6 hover:glow-accent transition-all duration-300">
              <div className="text-3xl mb-2">🛡️</div>
              <h3 className="text-lg font-semibold text-accent mb-2">Advanced Security</h3>
              <p className="text-sm text-muted-foreground">Protecting millions of transactions daily</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
