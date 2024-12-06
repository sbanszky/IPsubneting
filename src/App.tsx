import React, { useState } from 'react';
import { Network } from 'lucide-react';
import { SubnetVisualizer } from './components/SubnetVisualizer';
import { IPClassTable } from './components/IPClassTable';
import { IPInput } from './components/IPInput';

function App() {
  const [ip, setIP] = useState([192, 168, 10, 5]);
  const [cidr, setCidr] = useState(24);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="text-center mb-8">
        <a 
          href="https://allnumbers012.online" 
          className="inline-block text-4xl font-bold bg-gradient-to-r from-emerald-400 via-violet-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          allnumbers012.online
        </a>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Network className="w-8 h-8 text-emerald-400" />
          <h1 className="text-3xl font-bold text-emerald-400">IP Subnetting</h1>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl p-6 space-y-8 border border-gray-700">
          <IPClassTable />
          <IPInput ip={ip} onIPChange={setIP} />
          <SubnetVisualizer 
            ip={ip}
            cidr={cidr}
            onCidrChange={setCidr}
          />
        </div>
      </div>
    </div>
  );
}

export default App;