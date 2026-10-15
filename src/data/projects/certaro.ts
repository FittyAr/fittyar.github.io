import type { Project } from './types';

/**
 * Certaro - ERP modular comercial (Rust + Tauri 2 + Vue 3).
 * Nació para contratistas eléctricos y creció a obras, finanzas, compras,
 * inventario, punto de venta, sueldos y fiscal. Software propietario,
 * escrito desde cero: no comparte código con ElectroObra.
 * Tiene su propio sitio en certaro.fitty.ar.
 */
export const certaro: Project = {
  slug: 'certaro',
  title: { es: 'Certaro', en: 'Certaro' },
  role: {
    es: 'ERP modular para pymes',
    en: 'Modular ERP for SMEs',
  },
  category: 'rust',
  categoryLabel: { es: 'comercial', en: 'commercial' },
  desc: {
    es: 'ERP modular comercial: obras, finanzas, compras, inventario, punto de venta, sueldos y fiscal. Nacido para contratistas eléctricos.',
    en: 'Commercial modular ERP: projects, finance, purchasing, inventory, point of sale, payroll and tax. Born for electrical contractors.',
  },
  long: {
    es: 'Rust + Tauri 2 con Vue 3, Clean Architecture. Escritorio con datos locales en SQLite o edición servidor con PostgreSQL y Docker. Reportes en PDF, Excel y Word. Software propietario. Versión 2.0.0.',
    en: 'Rust + Tauri 2 with Vue 3, Clean Architecture. Desktop with local SQLite data or a server edition with PostgreSQL and Docker. PDF, Excel and Word reports. Proprietary software. Version 2.0.0.',
  },
  tags: [
    { es: 'rust', en: 'rust' },
    { es: 'tauri', en: 'tauri' },
    { es: 'vue', en: 'vue' },
    { es: 'erp', en: 'erp' },
  ],
  href: 'https://certaro.fitty.ar',
  external: true,
  status: 'comercial',
};
