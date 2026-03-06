'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Download,
  Clock,
  AlertTriangle
} from 'lucide-react';

export default function PlanningModule() {
  const [view, setView] = useState<'pdp' | 'ordonnancement'>('pdp');

  const pdpData = [
    { id: 'PDP-01', product: 'Jus de Mangue 1L', s1: 5000, s2: 5000, s3: 6000, s4: 5500 },
    { id: 'PDP-02', product: 'Nectar de Goyave 500ml', s1: 2500, s2: 3000, s3: 2500, s4: 4000 },
    { id: 'PDP-03', product: 'Sirop de Bissap 750ml', s1: 1200, s2: 1500, s3: 1200, s4: 1800 },
  ];

  const ordoData = [
    { id: 'OF-2023-1042', product: 'Jus de Mangue 1L', qty: 5000, start: '08:00', end: '16:00', resource: 'Ligne Embouteillage 1', status: 'En cours', progress: 65 },
    { id: 'OF-2023-1043', product: 'Nectar de Goyave', qty: 2500, start: '16:30', end: '20:30', resource: 'Ligne Embouteillage 1', status: 'Planifié', progress: 0 },
    { id: 'OF-2023-1044', product: 'Sirop de Bissap', qty: 1200, start: '09:00', end: '14:00', resource: 'Ligne Embouteillage 2', status: 'Planifié', progress: 0 },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="border-b border-slate-200 px-6 pt-6 pb-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Planification & Ordonnancement</h2>
            <p className="text-sm text-slate-500 mt-1">Gérez le Plan Directeur de Production et l&apos;ordonnancement d&apos;atelier.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
              <Download className="h-4 w-4" />
              Exporter
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
              Générer OF
            </button>
          </div>
        </div>

        <div className="flex bg-slate-100 p-1 rounded-lg w-fit">
          <button 
            onClick={() => setView('pdp')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
              view === 'pdp' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Plan Directeur (PDP)
          </button>
          <button 
            onClick={() => setView('ordonnancement')}
            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${
              view === 'ordonnancement' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            Ordonnancement (Gantt)
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {view === 'pdp' ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">Prévisions de Production (Mois en cours)</h3>
              <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600"><ChevronLeft className="h-4 w-4" /></button>
                <span className="text-sm font-medium text-slate-700 px-2">Octobre 2023</span>
                <button className="p-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600"><ChevronRight className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">Produit</th>
                    <th className="px-6 py-4 font-medium text-center border-l border-slate-200">Semaine 40</th>
                    <th className="px-6 py-4 font-medium text-center border-l border-slate-200">Semaine 41</th>
                    <th className="px-6 py-4 font-medium text-center border-l border-slate-200">Semaine 42</th>
                    <th className="px-6 py-4 font-medium text-center border-l border-slate-200">Semaine 43</th>
                    <th className="px-6 py-4 font-medium text-center border-l border-slate-200 bg-slate-100">Total Mensuel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {pdpData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.product}</td>
                      <td className="px-6 py-4 text-center border-l border-slate-200">
                        <input type="number" defaultValue={item.s1} className="w-20 text-center border border-transparent hover:border-slate-300 focus:border-emerald-500 rounded px-1 py-0.5 outline-none bg-transparent focus:bg-white" />
                      </td>
                      <td className="px-6 py-4 text-center border-l border-slate-200">
                        <input type="number" defaultValue={item.s2} className="w-20 text-center border border-transparent hover:border-slate-300 focus:border-emerald-500 rounded px-1 py-0.5 outline-none bg-transparent focus:bg-white" />
                      </td>
                      <td className="px-6 py-4 text-center border-l border-slate-200">
                        <input type="number" defaultValue={item.s3} className="w-20 text-center border border-transparent hover:border-slate-300 focus:border-emerald-500 rounded px-1 py-0.5 outline-none bg-transparent focus:bg-white" />
                      </td>
                      <td className="px-6 py-4 text-center border-l border-slate-200">
                        <input type="number" defaultValue={item.s4} className="w-20 text-center border border-transparent hover:border-slate-300 focus:border-emerald-500 rounded px-1 py-0.5 outline-none bg-transparent focus:bg-white" />
                      </td>
                      <td className="px-6 py-4 text-center border-l border-slate-200 bg-slate-50 font-semibold text-slate-700">
                        {(item.s1 + item.s2 + item.s3 + item.s4).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-medium text-blue-900">Adéquation Charge/Capacité</h4>
                <p className="text-sm text-blue-700 mt-1">La charge prévue en Semaine 42 pour la &quot;Ligne Embouteillage 1&quot; dépasse la capacité théorique de 15%. Envisagez d&apos;ajouter une équipe de sous-traitance ou des heures supplémentaires.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-800">Planning Journalier (Aujourd&apos;hui)</h3>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Ressource
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">Ordre de Fab.</th>
                    <th className="px-6 py-4 font-medium">Produit</th>
                    <th className="px-6 py-4 font-medium">Ressource</th>
                    <th className="px-6 py-4 font-medium">Horaire</th>
                    <th className="px-6 py-4 font-medium">Avancement</th>
                    <th className="px-6 py-4 font-medium">Statut</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {ordoData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900">{item.id}</td>
                      <td className="px-6 py-4 text-slate-700">
                        {item.product}
                        <div className="text-xs text-slate-500 mt-0.5">Qté: {item.qty.toLocaleString()}</div>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{item.resource}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Clock className="h-3.5 w-3.5 text-slate-400" />
                          <span>{item.start} - {item.end}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-slate-200 rounded-full h-2 max-w-[100px]">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${item.progress}%` }}></div>
                          </div>
                          <span className="text-xs font-medium text-slate-600">{item.progress}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          item.status === 'En cours' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Simple Gantt visualization placeholder */}
            <div className="mt-8 border border-slate-200 rounded-lg p-6 bg-slate-50/50">
              <div className="text-center py-10">
                <Calendar className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                <h4 className="text-slate-700 font-medium">Vue Diagramme de Gantt</h4>
                <p className="text-sm text-slate-500 mt-1">La visualisation graphique de l&apos;ordonnancement sera disponible dans la prochaine mise à jour.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
