'use client';

import React, { useState } from 'react';
import { 
  PackageSearch, 
  ArrowRightLeft, 
  Calculator, 
  AlertCircle,
  Search,
  Filter,
  Download
} from 'lucide-react';

type Tab = 'stocks' | 'cbn';

export default function InventoryModule() {
  const [activeTab, setActiveTab] = useState<Tab>('stocks');

  const stockData = [
    { id: 'MP-001', name: 'Purée de Mangue', category: 'Matière Première', qty: 1250, unit: 'Kg', min: 500, status: 'Normal' },
    { id: 'MP-002', name: 'Sucre en poudre', category: 'Matière Première', qty: 150, unit: 'Kg', min: 200, status: 'Rupture' },
    { id: 'EMB-001', name: 'Bouteille Verre 1L', category: 'Emballage', qty: 8500, unit: 'Unité', min: 2000, status: 'Normal' },
    { id: 'PRD-001', name: 'Jus de Mangue 1L', category: 'Produit Fini', qty: 420, unit: 'Bouteille', min: 1000, status: 'Alerte' },
  ];

  const cbnData = [
    { id: 'REQ-001', item: 'Sucre en poudre', type: 'Achat', qty: 500, unit: 'Kg', date: '15/10/2023', reason: 'OF-2023-1043' },
    { id: 'REQ-002', item: 'Bouchon Métallique 38mm', type: 'Achat', qty: 10000, unit: 'Unité', date: '18/10/2023', reason: 'Stock Sécurité' },
    { id: 'REQ-003', item: 'Jus de Mangue 1L', type: 'Fabrication', qty: 2500, unit: 'Bouteille', date: '12/10/2023', reason: 'Commande Client #402' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Header & Tabs */}
      <div className="border-b border-slate-200 px-6 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Stocks & Approvisionnements</h2>
            <p className="text-sm text-slate-500 mt-1">Gérez vos niveaux de stock et lancez le Calcul des Besoins Nets (CBN).</p>
          </div>
          <div className="flex gap-3">
            <button className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
              <ArrowRightLeft className="h-4 w-4" />
              Mouvement
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
              <Calculator className="h-4 w-4" />
              Lancer CBN
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <button 
            onClick={() => setActiveTab('stocks')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'stocks' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <PackageSearch className="h-4 w-4" />
            État des Stocks
          </button>
          <button 
            onClick={() => setActiveTab('cbn')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'cbn' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Calculator className="h-4 w-4" />
            Besoins Nets (CBN)
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Rechercher un article..." 
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Filter className="h-4 w-4 text-slate-500" />
            Filtrer
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Download className="h-4 w-4 text-slate-500" />
            Exporter
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'stocks' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
                  <PackageSearch className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Valeur Totale Stock</p>
                  <p className="text-xl font-bold text-slate-800">12.5M FCFA</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-full">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Articles en Rupture</p>
                  <p className="text-xl font-bold text-slate-800">3</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-amber-100 text-amber-600 rounded-full">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Articles en Alerte</p>
                  <p className="text-xl font-bold text-slate-800">8</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">Code Article</th>
                    <th className="px-6 py-4 font-medium">Désignation</th>
                    <th className="px-6 py-4 font-medium">Catégorie</th>
                    <th className="px-6 py-4 font-medium text-right">Quantité</th>
                    <th className="px-6 py-4 font-medium text-right">Seuil Min.</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {stockData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                      <td className="px-6 py-4 text-slate-700">{item.name}</td>
                      <td className="px-6 py-4 text-slate-500">{item.category}</td>
                      <td className={`px-6 py-4 text-right font-medium ${
                        item.qty < item.min ? 'text-red-600' : 'text-slate-900'
                      }`}>
                        {item.qty.toLocaleString()} <span className="text-xs text-slate-500 font-normal">{item.unit}</span>
                      </td>
                      <td className="px-6 py-4 text-right text-slate-500">
                        {item.min.toLocaleString()} <span className="text-xs">{item.unit}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Normal' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'Alerte' ? 'bg-amber-100 text-amber-700' :
                          'bg-red-100 text-red-700'
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

        {activeTab === 'cbn' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 mb-6">
              <Calculator className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-900">Dernier calcul: Aujourd&apos;hui, 08:30</h4>
                <p className="text-sm text-blue-700 mt-1">Le CBN a généré 3 propositions de réapprovisionnement basées sur le PDP et les commandes en cours.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">N° Suggestion</th>
                    <th className="px-6 py-4 font-medium">Article</th>
                    <th className="px-6 py-4 font-medium">Type</th>
                    <th className="px-6 py-4 font-medium text-right">Quantité Nette</th>
                    <th className="px-6 py-4 font-medium">Date Requise</th>
                    <th className="px-6 py-4 font-medium">Origine du Besoin</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {cbnData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                      <td className="px-6 py-4 text-slate-700">{item.item}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.type === 'Achat' ? 'bg-indigo-100 text-indigo-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-slate-900">
                        {item.qty.toLocaleString()} <span className="text-xs text-slate-500 font-normal">{item.unit}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-700">{item.date}</td>
                      <td className="px-6 py-4 text-slate-500 text-xs">{item.reason}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-md transition-colors">
                          Valider
                        </button>
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
