import { ATLAS_GITHUB_URL } from '../support/communityLinks';
import type { IssueReporter } from '../support/IssueReporter';
import type { AtlasSettingSection } from './settingSections';
import { t } from '../i18n';

export function supportSettingsSection(_reporter: IssueReporter): AtlasSettingSection {
  return {
    heading: t('settings.support.heading'),
    rows: [{
      name: 'Repositório do Távola',
      desc: 'Código-fonte e solicitações de melhoria da versão personalizada.',
      aliases: ['github', 'tavola', 'código-fonte'],
      render: setting => {
        setting.addButton(button =>
          button.setButtonText(t('settings.support.openGithub'))
            .onClick(() => { window.open(ATLAS_GITHUB_URL); })
        );
      },
    }],
  };
}
