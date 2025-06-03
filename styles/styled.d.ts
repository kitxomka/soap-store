

import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            primary: string;
            accent: string;
            gold: string;
            text: string;
        };
    }
}
