import React, { useState } from 'react';
import { ArrowLeft, Search, Zap, Shield, Heart } from 'lucide-react';

interface PokedexViewProps {
  onBack: () => void;
}

interface Pokemon {
  id: number;
  name: string;
  type: string;
  color: string;
  bgGrad: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  image: string;
}

const POKEMONS: Pokemon[] = [
  { id: 1, name: 'Bulbasaur', type: 'Grass / Poison', color: 'emerald', bgGrad: 'from-emerald-950 to-zinc-950', hp: 45, attack: 49, defense: 49, speed: 45, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
  { id: 4, name: 'Charmander', type: 'Fire', color: 'orange', bgGrad: 'from-orange-950 to-zinc-950', hp: 39, attack: 52, defense: 43, speed: 65, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' },
  { id: 7, name: 'Squirtle', type: 'Water', color: 'cyan', bgGrad: 'from-cyan-950 to-zinc-950', hp: 44, attack: 48, defense: 65, speed: 43, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png' },
  { id: 25, name: 'Pikachu', type: 'Electric', color: 'amber', bgGrad: 'from-amber-950 to-zinc-950', hp: 35, attack: 55, defense: 40, speed: 90, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' },
  { id: 94, name: 'Gengar', type: 'Ghost / Poison', color: 'purple', bgGrad: 'from-purple-950 to-zinc-950', hp: 60, attack: 65, defense: 60, speed: 110, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png' },
  { id: 149, name: 'Dragonite', type: 'Dragon / Flying', color: 'rose', bgGrad: 'from-rose-950 to-zinc-950', hp: 91, attack: 134, defense: 95, speed: 80, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png' },
];

export const PokedexView: React.FC<PokedexViewProps> = ({ onBack }) => {
  const [search, setSearch] = useState('');
  const [selectedPoke, setSelectedPoke] = useState<Pokemon>(POKEMONS[3]); // Pikachu default

  const filtered = POKEMONS.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.type.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100 flex flex-col font-sans animate-fadeIn">
      
      {/* Return Bar */}
      <div className="bg-gradient-to-r from-red-950 via-zinc-950 to-zinc-950 border-b border-red-500/30 px-4 py-2.5 flex items-center justify-between z-40 sticky top-0 backdrop-blur-md">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-red-600 hover:bg-red-500 text-white shadow-glow-red transition-all active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Portafolio Maestro</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-amber-400">
            ● Flutter 60 FPS Engine (Hive DB Cache)
          </span>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left / Center: Pokémon Catalog */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-white">Pokédex Clean Architecture</h1>
              <p className="text-xs text-zinc-400">Cross-Platform Flutter Mobile Simulator</p>
            </div>
            <div className="relative w-48 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search Pokémon..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filtered.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPoke(p)}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between aspect-square group ${
                  selectedPoke.id === p.id
                    ? 'border-amber-500 ring-2 ring-amber-500/40 bg-zinc-900'
                    : 'border-zinc-800/80 bg-zinc-950 hover:border-zinc-700'
                }`}
              >
                <div className="flex justify-between items-start z-10">
                  <span className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">{p.name}</span>
                  <span className="text-[10px] font-mono text-zinc-500">#{String(p.id).padStart(3, '0')}</span>
                </div>

                <div className="z-10">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/60 text-zinc-300 border border-white/10">
                    {p.type}
                  </span>
                </div>

                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute right-1 bottom-1 w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-200"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Active Mobile Detail Card */}
        <div className="p-6 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-6 flex flex-col justify-between">
          <div className="space-y-4 text-center">
            <div className="relative aspect-square w-44 mx-auto rounded-3xl bg-gradient-to-b from-amber-500/10 to-transparent flex items-center justify-center p-4 border border-amber-500/20">
              <img src={selectedPoke.image} alt={selectedPoke.name} className="w-full h-full object-contain drop-shadow-2xl animate-bounce" />
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-500 block">#{String(selectedPoke.id).padStart(3, '0')}</span>
              <h2 className="text-2xl font-black text-white">{selectedPoke.name}</h2>
              <span className="inline-block mt-1 text-xs font-mono font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {selectedPoke.type}
              </span>
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-400 flex items-center gap-1"><Heart className="w-3 h-3 text-rose-400" /> HP</span>
                <span className="text-white font-bold">{selectedPoke.hp}</span>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full" style={{ width: `${selectedPoke.hp}%` }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-400 flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> Attack</span>
                <span className="text-white font-bold">{selectedPoke.attack}</span>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full" style={{ width: `${selectedPoke.attack / 1.5}%` }} />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-400 flex items-center gap-1"><Shield className="w-3 h-3 text-cyan-400" /> Defense</span>
                <span className="text-white font-bold">{selectedPoke.defense}</span>
              </div>
              <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-cyan-500 h-full" style={{ width: `${selectedPoke.defense / 1.5}%` }} />
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 text-center font-mono">
            Clean Architecture (PFA) • BLoC / Riverpod State
          </div>
        </div>

      </main>

    </div>
  );
};

export default PokedexView;
