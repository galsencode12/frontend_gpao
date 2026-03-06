'use client';

import React, { useState } from 'react';
import { 
  Factory, 
  Play, 
  Pause, 
  CheckSquare, 
  AlertTriangle,
  Search,
  Filter,
  Plus
} from 'lucide-react';

export default function ProductionModule() {
  const [activeTab, setActiveTab] = useState<'of' | 'suivi'>('of');

  const ofData = [
    { id: 'OF-2023-1042', product: 'Jus de Mangue 1L', qty: 5000, start: '12/10/2023', status: 'En cours', progress: 65, priority: 'Haute' },
    { id: 'OF-2023-1043', product: 'Nectar de Goyave 500ml', qty: 2500, start: '13/10/2023', status: 'Planifié', progress: 0, priority: 'Normale' },
    { id: 'OF-2023-1044', product: 'Sirop de Bissap 750ml', qty: 1200, start: '14/10/2023', status: 'Planifié', progress: 0, priority: 'Basse' },
    { id: 'OF-2023-1041', product: 'Jus d\'Ananas 1L', qty: 3000, start: '10/10/2023', status: 'Terminé', progress: 100, priority: 'Normale' },
  ];

  const suiviData = [
    { id: 'SUI-001', of: 'OF-2023-1042', op: 'OP10 - Préparation', resource: 'Cuve Mélange 1', operator: 'A. Ndiaye', start: '08:00', end: '10:30', qtyOk: 5000, qtyRebut: 0, status: 'Terminé' },
    { id: 'SUI-002', of: 'OF-2023-1042', op: 'OP20 - Pasteurisation', resource: 'Pasteurisateur A', operator: 'M. Fall', start: '10:45', end: '13:15', qtyOk: 4980, qtyRebut: 20, status: 'Terminé' },
    { id: 'SUI-003', of: 'OF-2023-1042', op: 'OP30 - Embouteillage', resource: 'Ligne Embouteillage 1', operator: 'S. Diop', start: '13:30', end: '-', qtyOk: 3250, qtyRebut: 15, status: 'En cours' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Header & Tabs */}
      <div className="border-b border-slate-200 px-6 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Pilotage & Suivi de Production</h2>
            <p className="text-sm text-slate-500 mt-1">Gérez les Ordres de Fabrication et suivez l&apos;avancement en atelier.</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
            <Plus className="h-4 w-4" />
            Nouvel OF
          </button>
        </div>

        <div className="flex gap-6">
          <button 
            onClick={() => setActiveTab('of')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'of' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Factory className="h-4 w-4" />
            Ordres de Fabrication (OF)
          </button>
          <button 
            onClick={() => setActiveTab('suivi')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'suivi' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <CheckSquare className="h-4 w-4" />
            Suivi d&apos;Atelier (Pointages)
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Rechercher un OF, un produit..." 
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <Filter className="h-4 w-4 text-slate-500" />
          Filtrer
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'of' && (
          <div className="space-y-6">
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">N° OF</th>
                    <th className="px-6 py-4 font-medium">Produit Fini</th>
                    <th className="px-6 py-4 font-medium text-right">Quantité</th>
                    <th className="px-6 py-4 font-medium">Date Lancement</th>
                    <th className="px-6 py-4 font-medium">Priorité</th>
                    <th className="px-6 py-4 font-medium">Avancement</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ofData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                      <td className="px-6 py-4 text-slate-700">{item.product}</td>
                      <td className="px-6 py-4 text-right font-medium text-slate-900">{item.qty.toLocaleString()}</td>
                      <td className="px-6 py-4 text-slate-500">{item.start}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.priority === 'Haute' ? 'bg-red-100 text-red-700 border border-red-200' :
                          item.priority === 'Normale' ? 'bg-slate-100 text-slate-700 border border-slate-200' :
                          'bg-blue-100 text-blue-700 border border-blue-200'
                        }`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-200 rounded-full h-2 max-w-[80px]">
                            <div className={`h-2 rounded-full ${
                              item.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'
                            }`} style={{ width: `${item.progress}%` }}></div>
                          </div>
                          <span className="text-xs font-medium text-slate-600">{item.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                          item.status === 'Terminé' ? 'bg-emerald-100 text-emerald-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.status === 'Planifié' && (
                            <button className="p-1.5 text-slate-400 hover:text-emerald-600 rounded-md hover:bg-emerald-50" title="Lancer"><Play className="h-4 w-4" /></button>
                          )}
                          {item.status === 'En cours' && (
                            <button className="p-1.5 text-slate-400 hover:text-amber-600 rounded-md hover:bg-amber-50" title="Suspendre"><Pause className="h-4 w-4" /></button>
                          )}
                          <button className="p-1.5 text-slate-400 hover:text-blue-600 rounded-md hover:bg-blue-50" title="Détails"><CheckSquare className="h-4 w-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'suivi' && (
          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-lg p-4 mb-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">OF-2023-1042 : Jus de Mangue 1L</h3>
                <p className="text-sm text-slate-500 mt-1">Saisie des temps et quantités par opération.</p>
              </div>
              <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
                <Plus className="h-4 w-4" />
                Nouveau Pointage
              </button>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">N° Pointage</th>
                    <th className="px-6 py-4 font-medium">Opération</th>
                    <th className="px-6 py-4 font-medium">Ressource</th>
                    <th className="px-6 py-4 font-medium">Opérateur</th>
                    <th className="px-6 py-4 font-medium">Horaires</th>
                    <th className="px-6 py-4 font-medium text-right">Qté Bonne</th>
                    <th className="px-6 py-4 font-medium text-right">Qté Rebut</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {suiviData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                      <td className="px-6 py-4 text-slate-700">{item.op}</td>
                      <td className="px-6 py-4 text-slate-500">{item.resource}</td>
                      <td className="px-6 py-4 text-slate-700">{item.operator}</td>
                      <td className="px-6 py-4 text-slate-500">{item.start} - {item.end}</td>
                      <td className="px-6 py-4 text-right font-medium text-emerald-600">{item.qtyOk.toLocaleString()}</td>
                      <td className={`px-6 py-4 text-right font-medium ${item.qtyRebut > 0 ? 'text-red-600' : 'text-slate-400'}`}>
                        {item.qtyRebut.toLocaleString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Terminé' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
