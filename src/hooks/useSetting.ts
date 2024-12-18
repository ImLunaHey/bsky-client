import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Settings = {
  experiments: {
    streamerMode: boolean;
    devMode: boolean;
    zenMode: boolean;
    columns: number;
    responsiveUI: boolean;
  };
  columns: string[];
  language: 'system' | 'en' | 'fr';
  font: {
    family: 'system' | 'OpenDyslexic' | 'Atkinson-Hyperlegible';
    size: 'system' | 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large';
  };
  setSettings: (
    partial: Settings | Partial<Settings> | ((state: Settings) => Settings | Partial<Settings>),
    replace?: boolean | undefined,
  ) => void;
};

export const useSettings = create<Settings>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- `set` and `get` are required by zustand
    (set, _get) => ({
      experiments: {
        streamerMode: true,
        devMode: false,
        zenMode: false,
        columns: 1,
        responsiveUI: false,
      },
      setSettings: set,
      columns: [],
      language: 'system',
      font: {
        family: 'system',
        size: 'system',
      },
    }),
    {
      name: 'settings',
      partialize: (state) => ({
        experiments: state.experiments,
        columns: state.columns,
        language: state.language,
        font: state.font,
      }),
    },
  ),
);
