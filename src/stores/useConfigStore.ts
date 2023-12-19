import { defineStore } from 'pinia';

export const useConfigStore = defineStore('config', () => {
  const configs = {
    ...import.meta.env as ImportMetaEnv & {
      APP_NAME: string;
    },
  };
  return {
    value: configs,
  };
});
