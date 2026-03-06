'use client';

import React, { useState } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  FileSearch, 
  ClipboardCheck,
  Search,
  Filter,
  Download
} from 'lucide-react';

type Tab = 'controles' | 'tracabilite';

export default function QualityModule() {
  const [activeTab, setActiveTab] = useState<Tab>('controles');

  const controlesData = [
    { id: 'CQ-2023-089', of: 'OF-2023-1042', product: 'Jus de Mangue 1L', type: 'Contrôle Final', date: '12/10/2023', result: 'Conforme', inspector: 'F. Sow' },
    { id: 'CQ-2023-090', of: 'OF-2023-1043', product: 'Nectar de Goyave', type: 'Contrôle En Cours', date: '13/10/2023', result: 'Non Conforme', inspector: 'A. Diop', issue: 'Brix trop faible' },
    { id: 'CQ-2023-091', of: 'OF-2023-1041', product: 'Sirop de Bissap', type: 'Contrôle Réception', date: '10/10/2023', result: 'Conforme', inspector: 'F. Sow' },
  ];

  const tracabiliteData = [
    { lot: 'LOT-JM-2342', product: 'Jus de Mangue 1L', of: 'OF-2023-1042', dateProd: '12/10/2023', dlc: '12/10/2024', status: 'Libéré' },
    { lot: 'LOT-NG-2343', product: 'Nectar de Goyave', of: 'OF-2023-1043', dateProd: '13/10/2023', dlc: '13/10/2024', status: 'Bloqué' },
    { lot: 'LOT-SB-2341', product: 'Sirop de Bissap', of: 'OF-2023-1041', dateProd: '10/10/2023', dlc: '10/10/2025', status: 'Expédié' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Header & Tabs */}
      <div className="border-b border-slate-200 px-6 pt-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Qualité & Traçabilité</h2>
            <p className="text-sm text-slate-500 mt-1">Gérez les contrôles qualité, les non-conformités et la traçabilité des lots.</p>
          </div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
            <ClipboardCheck className="h-4 w-4" />
            Nouveau Contrôle
          </button>
        </div>

        <div className="flex gap-6">
          <button 
            onClick={() => setActiveTab('controles')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'controles' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <CheckCircle className="h-4 w-4" />
            Contrôles Qualité
          </button>
          <button 
            onClick={() => setActiveTab('tracabilite')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'tracabilite' 
                ? 'border-emerald-500 text-emerald-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
            }`}
          >
            <FileSearch className="h-4 w-4" />
            Traçabilité des Lots
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder={activeTab === 'controles' ? "Rechercher un contrôle, un OF..." : "Rechercher un lot, un produit..."} 
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
        {activeTab === 'controles' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-emerald-100 text-emerald-600 rounded-full">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Taux de Conformité</p>
                  <p className="text-xl font-bold text-slate-800">98.2%</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-full">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Non-Conformités (Mois)</p>
                  <p className="text-xl font-bold text-slate-800">4</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Contrôles Réalisés</p>
                  <p className="text-xl font-bold text-slate-800">145</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">N° Contrôle</th>
                    <th className="px-6 py-4 font-medium">N° OF</th>
                    <th className="px-6 py-4 font-medium">Produit</th>
                    <th className="px-6 py-4 font-medium">Type de Contrôle</th>
                    <th className="px-6 py-4 font-medium">Date</th>
                    <th className="px-6 py-4 font-medium">Inspecteur</th>
                    <th className="px-6 py-4 font-medium">Résultat</th>
                    <th className="px-6 py-4 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {controlesData.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                      <td className="px-6 py-4 text-slate-700">{item.of}</td>
                      <td className="px-6 py-4 text-slate-700">{item.product}</td>
                      <td className="px-6 py-4 text-slate-500">{item.type}</td>
                      <td className="px-6 py-4 text-slate-500">{item.date}</td>
                      <td className="px-6 py-4 text-slate-700">{item.inspector}</td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium w-fit ${
                            item.result === 'Conforme' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {item.result}
                          </span>
                          {item.issue && <span className="text-xs text-red-600 mt-1">{item.issue}</span>}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity">
                          Détails
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'tracabilite' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 mb-6">
              <FileSearch className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-900">Recherche Ascendante / Descendante</h4>
                <p className="text-sm text-blue-700 mt-1">Saisissez un numéro de lot de matière première pour voir tous les produits finis impactés, ou un lot de produit fini pour voir toutes les matières utilisées.</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">N° de Lot</th>
                    <th className="px-6 py-4 font-medium">Produit Fini</th>
                    <th className="px-6 py-4 font-medium">N° OF Origine</th>
                    <th className="px-6 py-4 font-medium">Date Production</th>
                    <th className="px-6 py-4 font-medium">DLC / DLUO</th>
                    <th className="px-6 py-4 font-medium">Statut du Lot</th>
                    <th className="px-6 py-4 font-medium text-right">Généalogie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {tracabiliteData.map((item) => (
                    <tr key={item.lot} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.lot}</td>
                      <td className="px-6 py-4 text-slate-700">{item.product}</td>
                      <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">{item.of}</td>
                      <td className="px-6 py-4 text-slate-500">{item.dateProd}</td>
                      <td className="px-6 py-4 text-slate-500">{item.dlc}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Libéré' ? 'bg-emerald-100 text-emerald-700' :
                          item.status === 'Bloqué' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-md transition-colors opacity-0 group-hover:opacity-100">
                          Voir Arbre
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
