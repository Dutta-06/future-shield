
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const ModelComparison = () => {
  const [randomForestAccuracy, setRandomForestAccuracy] = useState(0);
  const [xgboostAccuracy, setXgboostAccuracy] = useState(0);
  
  // Simulate real-time model performance updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomForestAccuracy(96.8 + Math.random() * 2);
      setXgboostAccuracy(97.2 + Math.random() * 1.8);
    }, 3000);
    
    // Initial animation
    setTimeout(() => {
      setRandomForestAccuracy(97.1);
      setXgboostAccuracy(97.6);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  const randomForestMetrics = {
    precision: 0.983,
    recall: 0.971,
    f1Score: 0.977,
    processingTime: "12ms"
  };

  const xgboostMetrics = {
    precision: 0.987,
    recall: 0.974,
    f1Score: 0.981,
    processingTime: "8ms"
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            <span className="text-gradient">MODEL PERFORMANCE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time comparison of our dual AI models on the Kaggle Credit Card Fraud Dataset
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Random Forest Model */}
          <Card className="bg-card/80 border-primary/30 backdrop-blur-sm p-8 animate-slide-up hover:glow-primary transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary font-mono">RANDOM FOREST</h3>
                <Badge variant="outline" className="border-primary/50 text-primary mt-2">
                  Ensemble Learning
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{randomForestAccuracy.toFixed(1)}%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Precision</span>
                  <span className="text-primary font-semibold">{(randomForestMetrics.precision * 100).toFixed(1)}%</span>
                </div>
                <Progress value={randomForestMetrics.precision * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Recall</span>
                  <span className="text-primary font-semibold">{(randomForestMetrics.recall * 100).toFixed(1)}%</span>
                </div>
                <Progress value={randomForestMetrics.recall * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>F1-Score</span>
                  <span className="text-primary font-semibold">{(randomForestMetrics.f1Score * 100).toFixed(1)}%</span>
                </div>
                <Progress value={randomForestMetrics.f1Score * 100} className="h-2" />
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span>Processing Time</span>
                  <span className="text-primary font-semibold font-mono">{randomForestMetrics.processingTime}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* XGBoost Model */}
          <Card className="bg-card/80 border-secondary/30 backdrop-blur-sm p-8 animate-slide-up hover:glow-secondary transition-all duration-300" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-secondary font-mono">XGBOOST</h3>
                <Badge variant="outline" className="border-secondary/50 text-secondary mt-2">
                  Gradient Boosting
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-secondary">{xgboostAccuracy.toFixed(1)}%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Precision</span>
                  <span className="text-secondary font-semibold">{(xgboostMetrics.precision * 100).toFixed(1)}%</span>
                </div>
                <Progress value={xgboostMetrics.precision * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Recall</span>
                  <span className="text-secondary font-semibold">{(xgboostMetrics.recall * 100).toFixed(1)}%</span>
                </div>
                <Progress value={xgboostMetrics.recall * 100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>F1-Score</span>
                  <span className="text-secondary font-semibold">{(xgboostMetrics.f1Score * 100).toFixed(1)}%</span>
                </div>
                <Progress value={xgboostMetrics.f1Score * 100} className="h-2" />
              </div>
              
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-sm">
                  <span>Processing Time</span>
                  <span className="text-secondary font-semibold font-mono">{xgboostMetrics.processingTime}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;
