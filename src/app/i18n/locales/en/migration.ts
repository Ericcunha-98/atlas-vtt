import type { Message } from '../../types';

export const migration = {
  'migration.running': 'Távola: migrating data files to hidden folders...',
  'migration.errors': 'Távola VTT: Migration completed with {count} errors. Check console for details.',
  'migration.done': 'Távola VTT: Successfully migrated {count} data files.',
} as const satisfies Record<string, Message>;
