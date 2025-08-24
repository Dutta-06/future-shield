
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface Transaction {
  id: string;
  amount: number;
  status: 'legitimate' | 'fraud';
  confidence: number;
  timestamp: string;
  model: 'Random Forest' | 'XGBoost';
}

const LiveDetection = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [totalProcessed, setTotalProcessed] = useState(47382);
  const [fraudDetected, setFraudDetected] = useState(127);

  // Generate realistic transaction data
  const generateTransaction = (): Transaction => {
    const isFraud = Math.random() < 0.02; // 2% fraud rate
    const models: ('Random Forest' | 'XGBoost')[] = ['Random Forest', 'XGBoost'];
    
    return {
      id: `TX${Date.now()}${Math.floor(Math.random() * 1000)}`,
      amount: Math.floor(Math.random() * 5000) + 10,
      status: isFraud ? 'fraud' : 'legitimate',
      confidence: isFraud ? 0.85 + Math.random() * 0.14 : 0.95 + Math.random() * 0.05,
      timestamp: new Date().toLocaleTimeString(),
      model: models[Math.floor(Math.random() * models.length)]
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newTransaction = generateTransaction();
      setTransactions(prev => [newTransaction, ...prev.slice(0, 9)]); // Keep last 10
      setTotalProcessed(prev => prev + 1);
      
      if (newTransaction.status === 'fraud') {
        setFraudDetected(prev => prev + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-mono mb-6">
            <span className="text-gradient">LIVE DETECTION</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time fraud detection simulation showing our models in action
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/80 border-primary/20 backdrop-blur-sm p-6 text-center animate-pulse-glow">
            <div className="text-3xl font-bold text-primary font-mono">{totalProcessed.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground mt-1">Transactions Processed</div>
          </Card>
          
          <Card className="bg-card/80 border-destructive/20 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-destructive font-mono">{fraudDetected}</div>
            <div className="text-sm text-muted-foreground mt-1">Fraud Attempts Blocked</div>
          </Card>
          
          <Card className="bg-card/80 border-accent/20 backdrop-blur-sm p-6 text-center">
            <div className="text-3xl font-bold text-accent font-mono">99.7%</div>
            <div className="text-sm text-muted-foreground mt-1">Detection Accuracy</div>
          </Card>
        </div>

        {/* Live Transactions Feed */}
        <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
          <div className="p-6 border-b border-border">
            <h3 className="text-2xl font-bold font-mono text-gradient mb-2">TRANSACTION MONITOR</h3>
            <p className="text-sm text-muted-foreground">Live feed of processed transactions</p>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {transactions.map((transaction, index) => (
              <div 
                key={transaction.id} 
                className={`p-4 border-b border-border/30 transition-all duration-300 ${
                  index === 0 ? 'animate-slide-up bg-primary/5' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="font-mono text-sm text-muted-foreground">
                      {transaction.timestamp}
                    </div>
                    <Badge 
                      variant={transaction.status === 'fraud' ? 'destructive' : 'outline'}
                      className={transaction.status === 'fraud' ? 'animate-pulse' : ''}
                    >
                      {transaction.status === 'fraud' ? '🚨 FRAUD' : '✅ LEGITIMATE'}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {transaction.model}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold">${transaction.amount.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        {(transaction.confidence * 100).toFixed(1)}% confidence
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      transaction.status === 'fraud' ? 'bg-destructive animate-pulse' : 'bg-accent'
                    }`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LiveDetection;
