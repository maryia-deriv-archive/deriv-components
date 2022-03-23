import { Meta, Story } from '@storybook/react';
import Wizard, { TItemsState, TWizardProps } from '../wizard';
import Button from '../../button/button';
import Text from '../../text/text';
import { useState } from 'react';

type TFormProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    dark?: boolean;
};

const Form: React.FC<TFormProps | { [key: string]: unknown | undefined }> = ({ dark, onClick, children }) => {
    return (
        <div>
            <Text
                as="div"
                type="paragraph-1"
                bold={false}
                css={{ color: dark ? '#C2C2C2' : '#333333', marginBottom: '24px' }}
            >
                Form
            </Text>
            <Button onClick={onClick}>{children}</Button>
        </div>
    );
};

const steps: TItemsState[] = [
    {
        titles: {
            main_content_title: 'Choose a product',
            step_title: 'Product',
        },
        main_content: {
            component: Form,
            children: 'Submit',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: 'Add an app',
            step_title: 'App',
        },
        main_content: {
            component: Form,
            children: 'Submit',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: 'Create a password',
            step_title: 'Password',
        },
        main_content: {
            component: Form,
            children: 'Submit',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: 'Create a wallet',
            step_title: 'Wallet',
        },
        main_content: {
            component: Form,
            children: 'Submit & Disable next step',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: "Choose your wallet's currency",
            step_title: 'Currency',
        },
        main_content: {
            component: Form,
            children: 'Submit',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: 'Personal details',
            step_title: 'Personal details',
        },
        main_content: {
            component: Form,
            children: 'Submit',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: 'Address information',
            step_title: 'Address',
        },
        main_content: {
            component: Form,
            children: 'Submit',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: 'Terms of use',
            step_title: 'Terms of use',
        },
        main_content: {
            component: Form,
            children: 'Submit',
        },
        right_panel_content: 'Some info',
    },
    {
        titles: {
            main_content_title: 'Completed',
            step_title: 'Complete',
        },
        main_content: {
            component: Form,
            children: 'Submit',
            is_fullwidth: true,
        },
        cancel_button_name: 'Maybe later',
        submit_button_name: 'Deposit',
    },
];

export default {
    title: 'Wizard',
    component: Wizard,
    parameters: { controls: { sort: 'alpha' } },
    argTypes: {
        dark: {
            description: 'Optional. If set to `true`, the wizard will be set to dark theme.',
            defaultValue: false,
            table: {
                type: { summary: 'boolean | undefined' },
                defaultValue: { summary: false },
            },
        },
        steps: {
            description:
                'Required. An array of objects containing the list of steps to render in the wizard. Please refer to the acceptable type below.',
            table: {
                type: {
                    summary: `Array<{
                    titles: {
                    main_content_title: string;
                    step_title: string;
                };
                main_content?: {
                    component: React.FC<{[key: string]: unknown | undefined}> & React.ReactNode;
                    children?: string | React.FC<{[key: string]: unknown | undefined}> & React.ReactNode;
                    passthrough_props?: string[];
                    is_fullwidth?: boolean;
                };
                right_panel_content?: string | React.FC<{[key: string]: unknown | undefined}> & React.ReactNode;
                cancel_button_name?: string;
                submit_button_name?: string;
            }>`,
                },
                defaultValue: { summary: '[{}]' },
            },
        },
    },
} as Meta<TWizardProps>;

const Template: Story<TWizardProps> = (args) => {
    const [is_wizard_open, setIsWizardOpen] = useState<boolean>(false);

    return (
        <>
            <Button onClick={() => setIsWizardOpen(true)}>Open Wizard</Button>
            {is_wizard_open && <Wizard onClose={() => setIsWizardOpen(false)} {...args} />}
        </>
    );
};

export const LightAppWizard = Template.bind({});
LightAppWizard.args = {
    steps,
    dark: false,
};
export const DarkAppWizard = Template.bind({});
DarkAppWizard.args = {
    steps,
    dark: true,
};

export const LightWalletWizard = Template.bind({});
LightWalletWizard.args = {
    steps,
    dark: false,
};
export const DarkWalletWizard = Template.bind({});
DarkWalletWizard.args = {
    steps,
    dark: true,
};
