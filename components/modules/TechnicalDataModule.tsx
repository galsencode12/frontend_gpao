'use client';

import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Box, 
  FileText, 
  GitMerge, 
  Settings,
  Edit,
  Trash2
} from 'lucide-react';

type Tab = 'products' | 'boms' | 'routings';

export default function TechnicalDataModule() {
  const [activeTab, setActiveTab] = useState<Tab>('products');

  const products = [
    { id: 'PRD-001', name: 'Jus de Mangue 1L', category: 'Produit Fini', unit: 'Bouteille', status: 'Actif' },
    { id: 'PRD-002', name: 'Nectar de Goyave 500ml', category: 'Produit Fini', unit: 'Bouteille', status: 'Actif' },
    { id: 'MP-001', name: 'Purée de Mangue', category: 'Matière Première', unit: 'Kg', status: 'Actif' },
    { id: 'MP-002', name: 'Sucre en poudre', category: 'Matière Première', unit: 'Kg', status: 'Actif' },
    { id: 'EMB-001', name: 'Bouteille Verre 1L', category: 'Emballage', unit: 'Unité', status: 'Actif' },
    { id: 'EMB-002', name: 'Bouchon Métallique 38mm', category: 'Emballage', unit: 'Unité', status: 'Actif' },
  ];

  const boms = [
    { id: 'NOM-PRD-001', product: 'Jus de Mangue 1L', version: 'v1.2', components: 4, status: 'Validée' },
    { id: 'NOM-PRD-002', product: 'Nectar de Goyave 500ml', version: 'v1.0', components: 5, status: 'Validée' },
  ];

  const routings = [
    { id: 'GAM-PRD-001', product: 'Jus de Mangue 1L', operations: 5, time: '45 min', status: 'Validée' },
    { id: 'GAM-PRD-002', product: 'Nectar de Goyave 500ml', operations: 6, time: '55 min', status: 'En révision' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Header & Tabs */}
      <div className="border-b border-slate-200 px-6 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Données Techniques</h2>
            <p className="text-sm text-slate-500 mt-1">Gérez vos articles, nomenclatures et gammes opératoires.</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
            <Plus className="h-4 w-4" />
            Nouveau
          </button>
        </div>

        <div className="flex gap-6">
          <button 
            onClick={() => setActiveTab('products')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'products' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Box className="h-4 w-4" />
            Articles & Produits
          </button>
          <button 
            onClick={() => setActiveTab('boms')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'boms' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <GitMerge className="h-4 w-4" />
            Nomenclatures
          </button>
          <button 
            onClick={() => setActiveTab('routings')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'routings' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <Settings className="h-4 w-4" />
            Gammes Opératoires
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
          />
        </div>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <Filter className="h-4 w-4 text-slate-500" />
          Filtrer
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'products' && (
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Code Article</th>
                  <th className="px-6 py-4 font-medium">Désignation</th>
                  <th className="px-6 py-4 font-medium">Catégorie</th>
                  <th className="px-6 py-4 font-medium">Unité</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {products.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                    <td className="px-6 py-4 text-slate-700">{item.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.category === 'Produit Fini' ? 'bg-indigo-100 text-indigo-700' :
                        item.category === 'Matière Première' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }`}>
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{item.unit}</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 rounded-md hover:bg-blue-50"><Edit className="h-4 w-4" /></button>
                        <button className="p-1.5 text-slate-400 hover:text-red-600 rounded-md hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'boms' && (
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Code Nomenclature</th>
                  <th className="px-6 py-4 font-medium">Produit Fini</th>
                  <th className="px-6 py-4 font-medium">Version</th>
                  <th className="px-6 py-4 font-medium">Composants</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {boms.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                    <td className="px-6 py-4 text-slate-700">{item.product}</td>
                    <td className="px-6 py-4 text-slate-500">{item.version}</td>
                    <td className="px-6 py-4 text-slate-500">{item.components} articles</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 rounded-md hover:bg-blue-50"><Edit className="h-4 w-4" /></button>
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100"><FileText className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'routings' && (
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-medium">Code Gamme</th>
                  <th className="px-6 py-4 font-medium">Produit Fini</th>
                  <th className="px-6 py-4 font-medium">Nb. Opérations</th>
                  <th className="px-6 py-4 font-medium">Temps Total</th>
                  <th className="px-6 py-4 font-medium">Statut</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {routings.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                    <td className="px-6 py-4 text-slate-700">{item.product}</td>
                    <td className="px-6 py-4 text-slate-500">{item.operations} étapes</td>
                    <td className="px-6 py-4 text-slate-500">{item.time}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.status === 'Validée' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 rounded-md hover:bg-blue-50"><Edit className="h-4 w-4" /></button>
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-100"><FileText className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
