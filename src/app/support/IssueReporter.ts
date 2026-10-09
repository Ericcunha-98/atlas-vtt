import { Notice, type App, type PluginManifest } from 'obsidian';
import type { AtlasErrorLog } from './errorLog';
import type { IssueReportPreset } from './IssueReportModal';

/** Bloqueia envio para o serviço de terceiros até existir um backend Távola. */
export class IssueReporter {
  constructor(
    private readonly app: App,
    private readonly manifest: PluginManifest,
    private readonly errorLog: AtlasErrorLog,
  ) {}
  open(_preset: IssueReportPreset = {}): void {
    void this.app; void this.manifest; void this.errorLog;
    new Notice('Távola: envio automático desativado. Use o GitHub do seu projeto para relatar problemas.');
  }
}
