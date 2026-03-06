'use client';

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { Download, Calendar, Filter } from 'lucide-react';

const trsMonthlyData = [
  { name: 'Jan', trs: 78, dispo: 85, perf: 92, qual: 98 },
  { name: 'Fév', trs: 80, dispo: 86, perf: 93, qual: 98 },
  { name: 'Mar', trs: 82, dispo: 88, perf: 94, qual: 99 },
  { name: 'Avr', trs: 81, dispo: 87, perf: 93, qual: 98 },
  { name: 'Mai', trs: 84, dispo: 90, perf: 95, qual: 99 },
  { name: 'Juin', trs: 85, dispo: 91, perf: 95, qual: 99 },
];

const costData = [
  { name: 'Matières Premières', value: 4500000 },
  { name: 'Main d&apos;œuvre', value: 2500000 },
  { name: 'Énergie', value: 1200000 },
  { name: 'Maintenance', value: 800000 },
  { name: 'Rebuts', value: 300000 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444'];

export default function AnalyticsModule() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 pt-6 pb-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Analyses & Performance</h2>
            <p className="text-sm text-slate-500 mt-1">Tableaux de bord de direction et indicateurs de performance (KPIs).</p>
          </div>
          <div className="flex gap-3">
            <button className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              S1 2023
            </button>
            <button className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtres
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
              <Download className="h-4 w-4" />
              Rapport PDF
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* TRS Evolution */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Évolution du TRS et ses composantes</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trsMonthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} domain={[60, 100]} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                  <Line type="monotone" dataKey="trs" name="TRS Global" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="dispo" name="Disponibilité" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="perf" name="Performance" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="qual" name="Qualité" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Répartition des Coûts de Production</h3>
            <div className="h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {costData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(Number(value))}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend 
                    layout="vertical" 
                    verticalAlign="middle" 
                    align="right"
                    iconType="circle"
                    wrapperStyle={{ fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* KPI Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800">Indicateurs Clés par Ligne de Production</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Ligne / Atelier</th>
                  <th className="px-6 py-4 font-medium text-right">TRS Moyen</th>
                  <th className="px-6 py-4 font-medium text-right">Taux de Rebut</th>
                  <th className="px-6 py-4 font-medium text-right">Arrêts non planifiés</th>
                  <th className="px-6 py-4 font-medium text-right">Coût / Unité</th>
                  <th className="px-6 py-4 font-medium">Tendance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">Ligne Embouteillage 1</td>
                  <td className="px-6 py-4 text-right font-medium text-emerald-600">86.5%</td>
                  <td className="px-6 py-4 text-right text-slate-700">1.2%</td>
                  <td className="px-6 py-4 text-right text-slate-700">4h 30m</td>
                  <td className="px-6 py-4 text-right text-slate-700">125 FCFA</td>
                  <td className="px-6 py-4 text-emerald-500">En hausse</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">Ligne Embouteillage 2</td>
                  <td className="px-6 py-4 text-right font-medium text-amber-600">78.2%</td>
                  <td className="px-6 py-4 text-right text-slate-700">2.5%</td>
                  <td className="px-6 py-4 text-right text-red-600 font-medium">12h 15m</td>
                  <td className="px-6 py-4 text-right text-slate-700">142 FCFA</td>
                  <td className="px-6 py-4 text-red-500">En baisse</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">Atelier Préparation</td>
                  <td className="px-6 py-4 text-right font-medium text-emerald-600">92.1%</td>
                  <td className="px-6 py-4 text-right text-slate-700">0.5%</td>
                  <td className="px-6 py-4 text-right text-slate-700">1h 45m</td>
                  <td className="px-6 py-4 text-right text-slate-700">45 FCFA</td>
                  <td className="px-6 py-4 text-emerald-500">Stable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
