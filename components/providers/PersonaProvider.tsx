"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DEFAULT_PERSONA,
  PERSONAS,
  type Persona,
  type PersonaId,
} from "@/lib/personas";

interface PersonaContextValue {
  persona: Persona;
  personaId: PersonaId;
  setPersona: (id: PersonaId) => void;
}

const PersonaContext = createContext<PersonaContextValue | null>(null);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [personaId, setPersonaId] = useState<PersonaId>(DEFAULT_PERSONA);

  const setPersona = useCallback((id: PersonaId) => setPersonaId(id), []);

  // Re-theme the whole document by updating accent CSS variables. Elements
  // that consume the accent animate via their own transition-colors.
  useEffect(() => {
    const p = PERSONAS[personaId];
    const root = document.documentElement;
    root.style.setProperty("--accent-rgb", p.accentRgb);
    root.style.setProperty("--accent", p.accent);
    root.style.setProperty("--accent-contrast", p.accentContrast);
  }, [personaId]);

  return (
    <PersonaContext.Provider
      value={{ persona: PERSONAS[personaId], personaId, setPersona }}
    >
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const ctx = useContext(PersonaContext);
  if (!ctx) throw new Error("usePersona must be used within PersonaProvider");
  return ctx;
}
