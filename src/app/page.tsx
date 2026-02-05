'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, Ticket, ChevronRight, X, PartyPopper, Train, Truck, Palette, Users, UtensilsCrossed, Music, Sparkles, Scissors } from 'lucide-react';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Sticky Registration Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FFD93D] via-[#FF8C42] to-[#FF6B9D] py-3 px-4 text-center shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm md:text-base font-semibold text-white drop-shadow">
            🎉 Register FREE for Activity Tickets, Punch Passes & Coupons!
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white text-[#FF6B9D] px-4 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md hover:scale-105"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 relative overflow-hidden section-gradient">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl">🎈</div>
          <div className="absolute top-40 right-20 text-5xl">🎪</div>
          <div className="absolute bottom-40 left-1/4 text-4xl">🎠</div>
          <div className="absolute top-1/3 right-1/4 text-5xl">🎡</div>
          <div className="absolute bottom-20 right-10 text-6xl">🎉</div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo placeholder */}
            <div className="mb-8">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-[#FFD93D] font-bold text-sm tracking-wide">✨ GRAND OPENING EVENT ✨</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              <span className="gradient-text">Firefly</span>{' '}
              <span className="text-white">Fam Fest</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Grab your kiddos and head over to <strong>Utah's largest festival</strong> created just for families!
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                <Calendar className="w-5 h-5 text-[#FFD93D]" />
                <span className="text-white font-medium">Saturday, May 9, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                <MapPin className="w-5 h-5 text-[#FF6B9D]" />
                <span className="text-white font-medium">Eagle Mountain, Utah</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
                <Clock className="w-5 h-5 text-[#00BBF9]" />
                <span className="text-white font-medium">10 AM - 6 PM</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowModal(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#FFD93D] to-[#FF8C42] text-[#1A1A2E] font-bold text-lg rounded-full shadow-xl hover:scale-105 transition-all pulse-glow flex items-center justify-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                Register FREE
              </button>
              <a 
                href="#attractions"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                See All Attractions
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            {/* Registration Benefits */}
            <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-xl mx-auto">
              <p className="text-[#FFD93D] font-bold mb-3">🎟️ Registered Guests Receive:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-[#00F5D4]">✓</span>
                  5 Free Activity Tickets
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00F5D4]">✓</span>
                  Punch Passes
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00F5D4]">✓</span>
                  Free Treat Coupons
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FEFEFE"/>
          </svg>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="attractions" className="py-20 section-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Fredoka', sans-serif" }}>
              <span className="gradient-text">Check Out</span> All The Attractions!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Non-stop fun for the whole family — from toddlers to grown-ups!
            </p>
          </div>

          {/* Attraction Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Bounce House Village */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-[#FF8C42]">
              <div className="h-48 bg-gradient-to-br from-[#FF8C42] to-[#FFD93D] flex items-center justify-center">
                <PartyPopper className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#FF8C42]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🏰 Utah's Biggest Bounce House Village
                </h3>
                <p className="text-gray-600">
                  Your kids will love this giant inflatable playground featuring massive slides, thrilling obstacle courses, and high-energy fun. This action-packed fun zone will keep kids jumping with joy all day long!
                </p>
                <div className="mt-4 inline-block px-3 py-1 bg-[#FF8C42]/10 text-[#FF8C42] text-sm font-semibold rounded-full">
                  🎟️ Requires Activity Ticket
                </div>
              </div>
            </div>

            {/* Tiny Town */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-[#FF6B9D]">
              <div className="h-48 bg-gradient-to-br from-[#FF6B9D] to-[#9B5DE5] flex items-center justify-center">
                <span className="text-7xl">🧸</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#FF6B9D]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  👶 Tiny Town – Just for Toddlers
                </h3>
                <p className="text-gray-600">
                  Designed for your littles (2-4 years old), Tiny Town is a soft toddler zone filled with smaller bounce houses, a giant corn box, and sandbox stocked with Tonka trucks and buckets for building, digging, and pretending. Safe, shaded, and just their size!
                </p>
                <div className="mt-4 inline-block px-3 py-1 bg-[#FF6B9D]/10 text-[#FF6B9D] text-sm font-semibold rounded-full">
                  🎟️ Requires Activity Ticket
                </div>
              </div>
            </div>

            {/* Firefly Express */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-[#00BBF9]">
              <div className="h-48 bg-gradient-to-br from-[#00BBF9] to-[#00F5D4] flex items-center justify-center">
                <Train className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#00BBF9]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🚂 Firefly Express Train
                </h3>
                <p className="text-gray-600">
                  All aboard the Firefly Express! This whimsical, trackless train ride loops through the event and is the perfect break between bounce sessions. Great for toddlers, little adventurers, and tired feet of all ages!
                </p>
                <div className="mt-4 inline-block px-3 py-1 bg-[#00BBF9]/10 text-[#00BBF9] text-sm font-semibold rounded-full">
                  🎟️ Requires Activity Ticket
                </div>
              </div>
            </div>

            {/* Touch-a-Truck */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-[#9B5DE5]">
              <div className="h-48 bg-gradient-to-br from-[#9B5DE5] to-[#FF6B9D] flex items-center justify-center">
                <Truck className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#9B5DE5]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🚒 Touch-a-Truck Zone
                </h3>
                <p className="text-gray-600">
                  Climb inside real-life rescue, service, and construction vehicles—and meet the everyday heroes who drive them! Honk the horns, flash the lights, and explore everything from fire engines to bulldozers.
                </p>
                <div className="mt-4 inline-block px-3 py-1 bg-[#9B5DE5]/10 text-[#9B5DE5] text-sm font-semibold rounded-full">
                  ✨ FREE - Open to All
                </div>
              </div>
            </div>

            {/* Creation Stations */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-[#00F5D4]">
              <div className="h-48 bg-gradient-to-br from-[#00F5D4] to-[#00BBF9] flex items-center justify-center">
                <Palette className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#00A896]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🎨 Creation Stations
                </h3>
                <p className="text-gray-600 mb-3">
                  Hands-on, screen-free creativity awaits! Kids of all ages can design, decorate, and take home their own colorful projects.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>🪁 Sky High Flyers - Decorate your own kite!</li>
                  <li>✨ Glow & Go Streamers</li>
                  <li>🌬️ Breeze Catchers - Colorful windsocks</li>
                  <li>🎩 Hat-tastic Creations</li>
                </ul>
                <div className="mt-4 inline-block px-3 py-1 bg-[#00F5D4]/10 text-[#00A896] text-sm font-semibold rounded-full">
                  🎟️ Requires Activity Ticket
                </div>
              </div>
            </div>

            {/* Character Meet & Greet */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-4 border-[#FFD93D]">
              <div className="h-48 bg-gradient-to-br from-[#FFD93D] to-[#FF8C42] flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-[#FF8C42]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  👸 Character Meet & Greet
                </h3>
                <p className="text-gray-600 mb-3">
                  Snap a picture, share a hug, or high-five your favorite characters! Princesses, superheroes, cartoon icons, and more will rotate throughout the day.
                </p>
                <p className="text-xs text-gray-500">
                  Elsa, Anna, Belle • Spiderman, Mario & Luigi • Bluey, Mickey & Minnie • Plus stilt walkers, jugglers & acrobats!
                </p>
                <div className="mt-4 inline-block px-3 py-1 bg-[#FFD93D]/10 text-[#FF8C42] text-sm font-semibold rounded-full">
                  ✨ FREE - Open to All
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Food & Entertainment Section */}
      <section className="py-20 section-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Munchyard */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-[#FF8C42]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF8C42] to-[#FFD93D] rounded-2xl flex items-center justify-center">
                  <UtensilsCrossed className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#FF8C42]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🍔 The Munchyard
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Fuel your fun at our outdoor food truck roundup, offering a tasty mix of savory meals and sweet desserts.
              </p>
              <p className="text-gray-500">
                Whether you're craving BBQ, tacos, grilled cheese, or gourmet treats, there's something for every appetite!
              </p>
            </div>

            {/* Live Shows */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-[#9B5DE5]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#9B5DE5] to-[#FF6B9D] rounded-2xl flex items-center justify-center">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#9B5DE5]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🎤 Live Shows All Day
                </h3>
              </div>
              <p className="text-gray-600 text-lg mb-4">
                Don't miss the excitement on our main stage! Family-friendly entertainment will keep the energy high all day long.
              </p>
              <ul className="text-gray-500 space-y-2">
                <li>✨ Dazzling magic shows</li>
                <li>🦎 Wild reptile and bird encounters</li>
                <li>🎪 Jugglers, acrobats, bubble performers</li>
                <li>🎵 Music and dance performances</li>
                <li>🧊 Ice sculpting demonstrations</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Chalk Art & Grand Opening */}
      <section className="py-20 section-gradient text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Chalk Art */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B9D] to-[#FFD93D] rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🎨 Chalk Art Contest
                </h3>
              </div>
              <p className="text-white/90 text-lg mb-4">
                Families are invited to grab a square and create their own masterpiece!
              </p>
              <p className="text-white/70">
                Every family who participates will be entered into a grand prize drawing — and your colorful creations will be displayed throughout the event.
              </p>
            </div>

            {/* Grand Opening */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#FFD93D] to-[#FF8C42] rounded-2xl flex items-center justify-center">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  🎀 Grand Opening Ceremony
                </h3>
              </div>
              <p className="text-white/90 text-lg mb-4">
                Join us as we officially open the Firefly community with a special ribbon-cutting!
              </p>
              <p className="text-white/70">
                Remarks from local leaders and a sneak peek into the future of Active Family living at Firefly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 section-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            <span className="gradient-text">Don't Miss Out!</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Register now to get your FREE activity tickets, punch passes, and treat coupons. Walk-ins welcome, but registered guests get all the perks!
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="px-10 py-5 bg-gradient-to-r from-[#FFD93D] via-[#FF8C42] to-[#FF6B9D] text-white font-bold text-xl rounded-full shadow-xl hover:scale-105 transition-all pulse-glow"
          >
            🎉 Register FREE Now
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#FF8C42]" />
              <span>Saturday, May 9, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#FF6B9D]" />
              <span>Eagle Mountain, Utah</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#00BBF9]" />
              <span>10 AM - 6 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1A1A2E] text-white/60 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
            <span className="gradient-text font-bold text-lg">Firefly Fam Fest 2026</span>
          </p>
          <p>A Candlelight Homes Community Event • Eagle Mountain, Utah</p>
          <p className="mt-4 text-white/40">© 2026 Firefly Community. All rights reserved.</p>
        </div>
      </footer>

      {/* Registration Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                Register for FREE!
              </h3>
              <p className="text-gray-600 text-sm">
                Get 5 free activity tickets, punch passes, and treat coupons!
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF8C42] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF8C42] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF8C42] focus:outline-none transition-colors"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#FFD93D] via-[#FF8C42] to-[#FF6B9D] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                🎉 Complete Registration
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              By registering, you agree to receive event updates via email and SMS.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
