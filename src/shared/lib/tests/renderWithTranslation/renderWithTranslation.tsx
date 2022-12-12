import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import i18n from 'shared/config/i18n/i18n-test';

export interface IProps {
    route?: string
}

export function renderWithTranslation(component: ReactNode, options: IProps = {}) {
    const {
        route = '/',
    } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>
                { component }
            </I18nextProvider>
            ,
        </MemoryRouter>,
    );
}
