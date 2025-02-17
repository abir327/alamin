import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/Tabs';
import { DollarSign, Trophy, Users, Clock, ArrowRight, Gift, Star, Sparkles, Timer, Calendar, Award, ChevronRight, Bell, Shield, Target, Check } from 'lucide-react';

interface Transaction {
  id: number;
  user: string;
  amount: number;
  timestamp: string;
}

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const names = [
  "Sarah M.", "John D.", "Emma W.", "Mike R.", "Lisa K.", "Tom B.", 
  "Anna P.", "James L.", "Maria G.", "David H.", "Sophie R.", "Chris T."
];

const prizeTiers = [
  { tier: "Grand Prize", amount: 500, odds: "1:10000" },
  { tier: "Second Prize", amount: 100, odds: "1:5000" },
  { tier: "Third Prize", amount: 50, odds: "1:1000" },
];

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, user: "Sarah M.", amount: 25, timestamp: "2 mins ago" },
    { id: 2, user: "John D.", amount: 50, timestamp: "5 mins ago" },
    { id: 3, user: "Emma W.", amount: 10, timestamp: "12 mins ago" },
    { id: 4, user: "Mike R.", amount: 100, timestamp: "15 mins ago" },
  ]);
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 3, hours: 14, minutes: 22, seconds: 0 });
  const [totalEntries, setTotalEntries] = useState(8427);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedPrizeTier, setSelectedPrizeTier] = useState(0);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTransaction = {
        id: Date.now(),
        user: names[Math.floor(Math.random() * names.length)],
        amount: Math.floor(Math.random() * 90) + 10,
        timestamp: "Just now"
      };

      setTransactions(prev => {
        const updated = [newTransaction, ...prev.slice(0, 3)];
        return updated;
      });

      setTotalEntries(prev => prev + 1);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);

      setTransactions(prev => 
        prev.map(t => ({
          ...t,
          timestamp: t.timestamp === "Just now" ? "Just now" :
                     t.timestamp === "2 mins ago" ? "5 mins ago" :
                     t.timestamp === "5 mins ago" ? "12 mins ago" :
                     "15 mins ago"
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    window.open(https://smrturl.co/a/s8bc4ef91ea/3706?s1=Detailtrend);
  };

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white/10 rounded-lg p-1.5 min-w-[3.5rem]">
      <span className="text-lg font-bold text-black leading-none">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs text-black/70 break-words text-center">{label}</span>
    </div>
  );   

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00D64F] to-[#00D64F]">
      {/* Floating CTA */}
      <div 
        className={`fixed bottom-8 z-40 right-8 transform transition-all duration-500 ${
          showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <button
          onClick={handleEnterClick}
          className="group bg-[#00CF31] border-4 border-white text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-3"
        >
          <Trophy size={24} className="animate-pulse" />
          <span className="font-semibold">Enter Now</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Notification */}
      <div className={`fixed z-40 top-4 right-4 transition-all duration-500 transform ${showNotification ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
          <Bell className="text-[#00CF31]" />
          <p className="text-sm">New entry received!</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-16 h-16 text-[#1f2937]/20 animate-[float_6s_ease-in-out_infinite]">
          <Gift size={64} />
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 text-[#1f2937]/20 animate-[float_8s_ease-in-out_infinite]">
          <Star size={48} />
        </div>
        <div className="absolute bottom-20 left-20 w-12 h-12 text-[#1f2937]/20 animate-[float_7s_ease-in-out_infinite]">
          <DollarSign size={48} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        {/* Stats Bar */}
        <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-4 mb-12 flex justify-around items-center">
          <div className="flex items-center gap-2">
            <Users className="text-[#00CF31]" />
            <div>
              <p className="text-sm text-gray-600">Total Entries</p>
              <p className="font-bold">{totalEntries.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="text-[#00CF31]" />
            <div>
              <p className="text-sm text-gray-600">Time Left</p>
              <div className="flex gap-1 items-center">
                <TimeBlock value={timeLeft.days} label="DAYS" />
                <span className="text-2xl">:</span>
                <TimeBlock value={timeLeft.hours} label="HRS" />
                <span className="text-2xl">:</span>
                <TimeBlock value={timeLeft.minutes} label="MIN" />
                <span className="text-2xl">:</span>
                <TimeBlock value={timeLeft.seconds} label="SEC" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 animate-ping">
              <Trophy size={64} className="text-[#fff]/30" />
            </div>
            <Trophy size={64} className="text-[#fff] relative z-10" />
          </div>
          <h1 className="text-7xl font-bold mb-6 text-gray-800">
             <span className="text-[#fff]">Win $500 Cash Prize!</span>
          </h1>
          <p className="text-xl text-white mb-12">Enter now for your chance to win big!</p>

          {/* Image-Based Hero Section with CTA */}
          <div className="rounded-2xl overflow-hidden flex md:flex-row flex-col max-w-5xl mx-auto mb-12">
            <div className="md:w-1/2 p-8 text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Claim Your $500 Reward</h2>
              <p className="text-white mb-6">
                Join thousands of others and enter our exclusive sweepstakes for a chance to win $500 cash!
              </p>
              <button
                onClick={handleEnterClick}
                className="inline-flex items-center gap-2 bg-[#fff] text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-[#fff]/90 transition-all transform hover:scale-105 group"
              >
                <Sparkles size={20} className='text-[#00CF31]'/>
                <span className='text-[#00CF31]'>Enter Sweepstakes Now</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform text-[#00CF31]" />
              </button>
            </div>
            <div className="md:w-1/2 relative">
  <img
    src="/uploads/mockup.png"
    alt="Mobile Mockup"
    className="w-full h-full object-cover z-40" // Original image
  />
             <span className="text-4xl text-white font-bold absolute top-0 left-0 animate-ping duration-700 pointer-events-none">5$</span>
             <span className="text-3xl text-white font-bold absolute top-40 left-9 animate-ping duration-700 pointer-events-none">15$</span>
             <span className="text-3xl text-white font-bold absolute top-20 right-10 animate-ping duration-700 pointer-events-none">7$</span>
          </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-12">
  <div className="border-2 border-white rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all">
    <DollarSign size={32} className="text-[#fff] mx-auto mb-2 sm:mb-3" />
    <h3 className="text-xl sm:text-2xl font-bold text-center">$500</h3>
    <p className="text-gray-600 text-center text-sm sm:text-base">Cash Prize</p>
  </div>
  <div className="border-2 border-white rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all">
    <Users size={32} className="text-[#fff] mx-auto mb-2 sm:mb-3" />
    <h3 className="text-xl sm:text-2xl font-bold text-center">8,427+</h3>
    <p className="text-gray-600 text-center text-sm sm:text-base">Total Entries</p>
  </div>
  <div className="border-2 border-white rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-105 transition-all">
    <Trophy size={32} className="text-[#fff] mx-auto mb-2 sm:mb-3" />
    <h3 className="text-xl sm:text-2xl font-bold text-center">100%</h3>
    <p className="text-gray-600 text-center text-sm sm:text-base">Winner Rate</p>
  </div>
</div>

          {/* Prize Tiers Carousel */}
          <div className="mt-8">
            <div className="flex justify-center gap-4 mb-6">
              {prizeTiers.map((prize, index) => (
                <button
                  key={prize.tier}
                  onClick={() => setSelectedPrizeTier(index)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedPrizeTier === index
                      ? 'bg-[#00CF31] text-white border-2 border-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {prize.tier}
                </button>
              ))}
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{prizeTiers[selectedPrizeTier].tier}</h3>
                <span className="text-2xl font-bold text-[#00CF31]">
                  ${prizeTiers[selectedPrizeTier].amount}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Winning Odds: {prizeTiers[selectedPrizeTier].odds}</span>
                <button className="flex items-center gap-1 text-[#00CF31] hover:underline">
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="how-to-enter" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="how-to-enter" className="flex items-center gap-2">
              <ArrowRight size={20} /> How to Enter
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center gap-2">
              <Trophy size={20} /> About
            </TabsTrigger>
            <TabsTrigger value="winners" className="flex items-center gap-2">
              <Users size={20} /> Previous Winners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="how-to-enter">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">How to Enter & Win</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Follow these simple steps to enter the sweepstakes and get your chance to win the $500 cash prize!
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    {
                      icon: Users,
                      title: "1. Click to Enter",
                      desc: "Click any 'Enter Now' button to visit our secure entry page",
                      features: ["No registration needed", "Takes 30 seconds", "100% free"]
                    },
                    {
                      icon: Shield,
                      title: "2. Complete Entry",
                      desc: "Fill out a simple form on our partner site",
                      features: ["Basic info only", "No credit card", "Instant entry"]
                    },
                    {
                      icon: Target,
                      title: "3. Confirm Entry",
                      desc: "Get instant confirmation of your entry",
                      features: ["Immediate confirmation", "Entry tracking", "Prize alerts"]
                    },
                    {
                      icon: Bell,
                      title: "4. Stay Updated",
                      desc: "We'll notify you if you win",
                      features: ["Winner announcements", "Prize claiming info", "Next drawing dates"]
                    }
                  ].map((step) => (
                    <div key={step.title} className="bg-gray-50 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#00CF31]/10 rounded-full">
                          <step.icon className="text-[#00CF31] w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                          <p className="text-gray-600 mb-4">{step.desc}</p>
                          <ul className="space-y-2">
                            {step.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                                <Check size={16} className="text-[#00CF31]" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#00CF31]/5 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Win $500?</h3>
                  <p className="text-gray-600 mb-6">Don't miss your chance - enter now and you could be our next winner!</p>
                  <button
                    onClick={handleEnterClick}
                    className="inline-flex items-center gap-2 bg-[#00CF31] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00CF31]/90 transition-all transform hover:scale-105 group"
                  >
                    <Trophy size={20} />
                    <span>Enter Sweepstakes Now</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">About the Sweepstakes</h2>
              <p className="text-gray-600 mb-8">
                Don't miss your chance to win $500 in cash! Our sweepstakes is open to all US residents
                aged 18 and above. The winner will be randomly selected and notified via email.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#00CF31]/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-8 text-center">
                    <DollarSign size={40} className="mx-auto mb-4 text-[#00CF31]" />
                    <h3 className="font-bold mb-2 text-gray-800">$500 Prize</h3>
                    <p className="text-gray-600">Cash prize for the lucky winner</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#00CF31]/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-8 text-center">
                    <Clock size={40} className="mx-auto mb-4 text-[#00CF31]" />
                    <h3 className="font-bold mb-2 text-gray-800">Daily Entries</h3>
                    <p className="text-gray-600">Enter once every 24 hours</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#00CF31]/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="relative p-8 text-center">
                    <Trophy size={40} className="mx-auto mb-4 text-[#00CF31]" />
                    <h3 className="font-bold mb-2 text-gray-800">Monthly Drawing</h3>
                    <p className="text-gray-600">Winner selected every month</p>
                  </div>
                </div>
              </div>

              {/* Additional Features */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="text-[#00CF31]" />
                    Security Guarantee
                  </h3>
                  <p className="text-gray-600">
                    Your information is protected with industry-standard encryption.
                    We never share your data with third parties.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Target className="text-[#00CF31]" />
                    Winner Selection
                  </h3>
                  <p className="text-gray-600">
                    Winners are selected using a certified random number generator
                    to ensure fair and unbiased results.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="winners">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Previous Winners</h2>
              <div className="grid gap-4">
                {[
                  { month: "February 2024", name: "Jessica Thompson", location: "New York, NY", amount: 500 },
                  { month: "January 2024", name: "Robert Martinez", location: "Miami, FL", amount: 500 },
                  { month: "December 2023", name: "Amanda Chen", location: "Seattle, WA", amount: 500 }
                ].map((winner) => (
                  <div key={winner.month} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00CF31]/5 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    <div className="relative p-6 border border-gray-100 rounded-lg hover:border-[#00CF31] transition-colors duration-300">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#00CF31]/10 rounded-full">
                          <Trophy className="text-[#00CF31]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-800">{winner.month}</h3>
                            <span className="text-[#00CF31] font-bold">${winner.amount}</span>
                          </div>
                          <p className="text-gray-600">{winner.name} - {winner.location}</p>
                        </div>
                        <Award className="text-[#00CF31] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Winner Statistics */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-2xl text-[#00CF31]">$4,500</h4>
                  <p className="text-sm text-gray-600">Total Prizes Awarded</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-2xl text-[#00CF31]">9</h4>
                  <p className="text-sm text-gray-600">Winners This Year</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-2xl text-[#00CF31]">100%</h4>
                  <p className="text-sm text-gray-600">Prize Claim Rate</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Recent Entries */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="text-[#fff]" />
              Recent Entries
            </h2>
            <div className="flex items-center gap-2 text-sm text-white">
              <Clock size={16} />
              <span>Updates every few seconds</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-100">
              {transactions.map((transaction) => (
                <div 
                  key={transaction.id} 
                  className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#00CF31]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users size={20} className="text-[#00CF31]" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{transaction.user}</p>
                      <p className="text-sm text-gray-500">{transaction.timestamp}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#00CF31] font-medium">${transaction.amount}</span>
                    <ChevronRight className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
