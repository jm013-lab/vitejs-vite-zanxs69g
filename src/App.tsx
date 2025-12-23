import React, { useState } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Pill, 
  Utensils, 
  CheckCircle2, 
  MapPin, 
  ClipboardCheck, 
  Activity,
  Phone,
  Menu,
  X,
  Stethoscope
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('ghl-form-embed');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-900 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">
                Axis<span className="text-emerald-800">Senior</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <MapPin className="h-4 w-4 text-emerald-700" />
                <span>Serving Sacramento & Northern CA</span>
              </div>
              <button 
                onClick={scrollToForm}
                className="bg-[#D97706] hover:bg-amber-700 text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Check Availability
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="h-4 w-4" />
                Serving Sacramento & Northern CA
              </div>
              <button 
                onClick={scrollToForm}
                className="w-full bg-[#D97706] text-white py-3 rounded-md font-bold"
              >
                Check Availability
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
                <Activity className="h-4 w-4" />
                <span>Licensed Care Professionals</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Is Mom Safe at Home? <br />
                <span className="text-emerald-900">Get the Clinical Safety Score.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Don't wait for a fall. Axis Senior provides a <span className="font-semibold text-slate-900">free 15-point home audit</span> by licensed care professionals to identify risks before they become emergencies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  VI-SPDAT Risk Standard
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-800 to-emerald-500 rounded-t-2xl"></div>
                
                {/* GHL FORM EMBED AREA */}
                <div id="ghl-form-embed" className="min-h-[400px] flex flex-col items-center justify-center bg-slate-50 border-2 border-dashed border-slate-300 rounded-lg">
                  <p className="text-slate-400 font-medium text-center px-4">
                    [ GHL Form Embed Placeholder ]<br/>
                    <span className="text-sm">Embed your scheduling form here</span>
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-slate-400">
                    Your information is secure and encrypted.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="py-10 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left opacity-90">
            <p className="text-lg font-medium">Trusted by families in Sacramento since 2015</p>
            <div className="flex gap-8">
              <div className="flex flex-col items-center md:items-start">
                <span className="font-bold text-2xl">1,200+</span>
                <span className="text-sm text-emerald-200">Audits Completed</span>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-bold text-2xl">4.9/5</span>
                <span className="text-sm text-emerald-200">Family Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM AGITATION SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The "Silent" Risks in Your Parent's Home</h2>
            <p className="text-lg text-slate-600">
              Most adult children don't notice hazards until an accident happens. Our clinical data shows these are the 4 biggest threats to independent living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Fall Risks</h3>
              <p className="text-slate-600 text-sm">Loose stair rails, slick bathroom tiles, and lack of grab bars are the #1 cause of hospitalization.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Pill className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Medication Errors</h3>
              <p className="text-slate-600 text-sm">Confusing bottle labels and missed doses can lead to rapid health decline and ER visits.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Nutritional Decline</h3>
              <p className="text-slate-600 text-sm">Empty fridges or expired food are early warning signs of cognitive difficulty or mobility issues.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="bg-slate-200 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Environmental</h3>
              <p className="text-slate-600 text-sm">Inadequate lighting and cluttered walkways create invisible traps for aging eyes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE SOLUTION / CHECKLIST SECTION --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-block bg-[#D97706] text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
                THE AXIS AUDIT
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">We Don't Just Visit.<br />We Score the Home.</h2>
              <p className="text-slate-300 text-lg mb-8">
                Our team acts as "boots on the ground" to assess 15 clinical safety vectors. You get a clear, scored report and a Permanent Housing Stabilization Plan.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Bathroom safety & grab bar stress-testing",
                  "Lighting lumen analysis for visibility",
                  "Medication organization review",
                  "Trip hazard identification (rugs, cords)",
                  "Refrigerator & pantry nutritional audit"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToForm}
                className="mt-10 bg-[#D97706] hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
              >
                Get Your Free 15-Point Score
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div>
                    <h3 className="text-xl font-bold">Safety Scorecard</h3>
                    <p className="text-sm text-slate-400">Patient: M. Thompson</p>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">82/100</div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Fall Prevention</span>
                      <span className="text-orange-400">Needs Attention</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-400 h-full w-[45%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Medication Adherence</span>
                      <span className="text-emerald-400">Good</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[90%]"></div>
                    </div>
                  </div>
                   <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Nutrition Status</span>
                      <span className="text-emerald-400">Excellent</span>
                    </div>
                    <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[95%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-0"></div>

            <div className="relative z-10 text-center">
              <div className="bg-white w-24 h-24 rounded-full border-4 border-emerald-50 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ClipboardCheck className="h-10 w-10 text-emerald-800" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">1. Request Audit</h3>
              <p className="text-slate-600 px-4">Fill out the form above. We'll contact you within 24 hours to schedule.</p>
            </div>

            <div className="relative z-10 text-center">
              <div className="bg-white w-24 h-24 rounded-full border-4 border-emerald-50 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Stethoscope className="h-10 w-10 text-emerald-800" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">2. We Visit & Score</h3>
              <p className="text-slate-600 px-4">A licensed pro visits the home, checking our 15-point clinical vector list.</p>
            </div>

            <div className="relative z-10 text-center">
              <div className="bg-white w-24 h-24 rounded-full border-4 border-emerald-50 flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 className="h-10 w-10 text-emerald-800" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">3. Get The Plan</h3>
              <p className="text-slate-600 px-4">Receive a Stabilization Plan to keep Mom safe and prevent hospitalizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Peace of mind is one visit away.</h2>
          <p className="text-lg text-slate-600 mb-8">
            The audit is completely free. The peace of mind knowing they are safe is priceless.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-[#D97706] hover:bg-amber-700 text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
          >
            Check Availability in Sacramento
          </button>
          <p className="mt-4 text-sm text-slate-400">Limited availability per month.</p>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-6 w-6 text-emerald-500" />
                <span className="font-bold text-xl text-white">AxisSenior</span>
              </div>
              <p className="max-w-xs text-sm">
                Preventing avoidable hospitalizations through proactive home environments and clinical audits.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> (916) 555-0123
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Sacramento, CA
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>HIPAA Notice</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-xs text-center">
            &copy; {new Date().getFullYear()} Axis Senior. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;