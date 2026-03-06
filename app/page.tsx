'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  CalendarDays, 
  PackageSearch, 
  Factory, 
  CheckCircle, 
  BarChart3,
  Menu,
  Bell,
  Search,
  UserCircle
} from 'lucide-react';

// Import modules (we will create these)
import DashboardModule from '@/components/modules/DashboardModule';
import TechnicalDataModule from '@/components/modules/TechnicalDataModule';
import PlanningModule from '@/components/modules/PlanningModule';
import InventoryModule from '@/components/modules/InventoryModule';
import ProductionModule from '@/components/modules/ProductionModule';
import QualityModule from '@/components/modules/QualityModule';
import AnalyticsModule from '@/components/modules/AnalyticsModule';

type Module = 'dashboard' | 'technical' | 'planning' | 'inventory' | 'production' | 'quality' | 'analytics';

export default function GPAOApp() {
  const [activeModule, setActiveModule] = useState<Module>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard': return <DashboardModule />;
      case 'technical': return <TechnicalDataModule />;
      case 'planning': return <PlanningModule />;
      case 'inventory': return <InventoryModule />;
      case 'production': return <ProductionModule />;
      case 'quality': return <QualityModule />;
      case 'analytics': return <AnalyticsModule />;
      default: return <DashboardModule />;
    }
  };

  const navItems = [
    { id: 'dashboard', label: 'Tableau de Bord', icon: LayoutDashboard },
    { id: 'technical', label: 'Données Techniques', icon: Database },
    { id: 'planning', label: 'Planification (PDP)', icon: CalendarDays },
    { id: 'inventory', label: 'Stocks & Appro (CBN)', icon: PackageSearch },
    { id: 'production', label: 'Suivi Production (OF)', icon: Factory },
    { id: 'quality', label: 'Qualité & Traçabilité', icon: CheckCircle },
    { id: 'analytics', label: 'Analyses & Perf.', icon: BarChart3 },
  ];

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-slate-900 text-white transition-all duration-300 flex flex-col flex-shrink-0 z-20`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800 flex-shrink-0">
          {isSidebarOpen && (
            <div className="flex items-center gap-2 overflow-hidden">
              <Factory className="h-6 w-6 text-emerald-500 flex-shrink-0" />
              <span className="font-bold text-lg tracking-tight truncate">GPAO<span className="text-emerald-500">Afrique</span></span>
            </div>
          )}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors mx-auto"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeModule === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveModule(item.id as Module)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    } ${!isSidebarOpen ? 'justify-center' : ''}`}
                    title={!isSidebarOpen ? item.label : undefined}
                  >
                    <Icon className={`h-5 w-5 flex-shrink-0 ${isActive ? 'text-emerald-500' : ''}`} />
                    {isSidebarOpen && (
                      <span className="font-medium text-sm text-left truncate">
                        {item.label}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800 flex-shrink-0">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'justify-center'}`}>
            <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              MC
            </div>
            {isSidebarOpen && (
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-white truncate">M. Coulibaly</p>
                <p className="text-xs text-slate-400 truncate">Directeur Prod.</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <h1 className="text-xl font-semibold text-slate-800 hidden sm:block">
              {navItems.find(i => i.id === activeModule)?.label}
            </h1>
            <div className="max-w-md w-full ml-4 hidden md:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Rechercher un OF, un article, un lot..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors md:hidden">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Module Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-50/50">
          <div className="max-w-7xl mx-auto h-full">
            {renderModule()}
          </div>
        </div>
      </main>
    </div>
  );
}
