'use client';

import React from 'react';
import { 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Package, 
  Factory,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

const productionData = [
  { name: 'Lun', prevu: 120, realise: 110 },
  { name: 'Mar', prevu: 130, realise: 135 },
  { name: 'Mer', prevu: 125, realise: 120 },
  { name: 'Jeu', prevu: 140, realise: 138 },
  { name: 'Ven', prevu: 135, realise: 142 },
  { name: 'Sam', prevu: 80, realise: 85 },
];

const trsData = [
  { time: '08:00', value: 75 },
  { time: '10:00', value: 82 },
  { time: '12:00', value: 85 },
  { time: '14:00', value: 78 },
  { time: '16:00', value: 88 },
  { time: '18:00', value: 84 },
];

export default function DashboardModule() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Taux de Rendement Synthétique (TRS)</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">84.5%</h3>
            </div>
            <div className="p-2 bg-emerald-100 rounded-lg">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
            <span className="text-emerald-500 font-medium">+2.4%</span>
            <span className="text-slate-400 ml-2">vs hier</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Ordres de Fabrication en cours</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">24</h3>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <Factory className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-slate-600 font-medium">18</span>
            <span className="text-slate-400 ml-2">dans les temps</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Ruptures de stock critiques</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">3</h3>
            </div>
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-500 font-medium">Action requise</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Taux de Conformité</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">98.2%</h3>
            </div>
            <div className="p-2 bg-indigo-100 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-indigo-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
            <span className="text-emerald-500 font-medium">+0.5%</span>
            <span className="text-slate-400 ml-2">vs semaine dernière</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Production Hebdomadaire (Unités)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="prevu" name="Prévu" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="realise" name="Réalisé" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Évolution du TRS (Aujourd&apos;hui)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} domain={[60, 100]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line type="monotone" dataKey="value" name="TRS (%)" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-800">Ordres de Fabrication Récents</h3>
            <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">Voir tout</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-6 py-3 font-medium">N° OF</th>
                  <th className="px-6 py-3 font-medium">Produit</th>
                  <th className="px-6 py-3 font-medium">Quantité</th>
                  <th className="px-6 py-3 font-medium">Statut</th>
                  <th className="px-6 py-3 font-medium">Échéance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">OF-2023-1042</td>
                  <td className="px-6 py-4">Jus de Mangue 1L</td>
                  <td className="px-6 py-4">5,000</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">En production</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Aujourd&apos;hui, 16:00</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">OF-2023-1043</td>
                  <td className="px-6 py-4">Nectar de Goyave 500ml</td>
                  <td className="px-6 py-4">2,500</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">En attente</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Demain, 08:00</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">OF-2023-1041</td>
                  <td className="px-6 py-4">Sirop de Bissap 750ml</td>
                  <td className="px-6 py-4">1,200</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">Terminé</span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Hier, 14:30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">Alertes & Notifications</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex gap-3">
              <div className="mt-0.5 p-1.5 bg-red-100 text-red-600 rounded-full flex-shrink-0">
                <AlertCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Rupture imminente: Sucre en poudre</p>
                <p className="text-xs text-slate-500 mt-0.5">Stock actuel: 150 kg (Seuil: 200 kg). Impacte OF-2023-1043.</p>
                <p className="text-xs text-slate-400 mt-1">Il y a 2 heures</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 p-1.5 bg-amber-100 text-amber-600 rounded-full flex-shrink-0">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Retard sur Ligne 2</p>
                <p className="text-xs text-slate-500 mt-0.5">Maintenance préventive prolongée de 45 minutes.</p>
                <p className="text-xs text-slate-400 mt-1">Il y a 3 heures</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 p-1.5 bg-indigo-100 text-indigo-600 rounded-full flex-shrink-0">
                <Package className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800">Réception fournisseur</p>
                <p className="text-xs text-slate-500 mt-0.5">Commande FRN-892 (Bouteilles verre 1L) réceptionnée.</p>
                <p className="text-xs text-slate-400 mt-1">Ce matin, 08:15</p>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 rounded-b-xl">
            <button className="text-sm text-slate-600 font-medium hover:text-slate-900 w-full text-center">Voir toutes les alertes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
