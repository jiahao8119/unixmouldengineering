/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_FACILITY_ADDRESS: string;
  readonly VITE_EMAIL_QUOTES: string;
  readonly VITE_EMAIL_INFO: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}