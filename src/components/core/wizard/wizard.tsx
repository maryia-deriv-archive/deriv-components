import CircularCheckIcon from '@assets/svg/circular-check-icon.svg';
import CloseIconLight from '@assets/svg/modal/ic-close-light.svg';
import CloseIconDark from '@assets/svg/modal/ic-close-dark.svg';
import Button from '@core/button/button';
import Text from '@core/text/text';
import React from 'react';
import { styled } from 'Styles/stitches.config';

const DarkBackgroundContainer = styled('div', {
    position: 'absolute',
    inset: '0',
    background: 'rgba(0, 0, 0, 0.72)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const WizardContainer = styled('div', {
    position: 'relative',
    width: '1040px',
    height: '640px',
    backgroundColor: '$white',
    borderRadius: '16px',
    display: 'flex',
    overflow: 'hidden',

    variants: {
        dark: {
            true: {
                backgroundColor: '#0E0E0E',
            },
        },
    },
});

const LeftPanel = styled('div', {
    width: '256px',
    height: '640px',
    backgroundColor: '#F2F3F4',
    boxSizing: 'border-box',
    padding: '48px 24px',

    variants: {
        dark: {
            true: {
                backgroundColor: '#151717',
            },
        },
    },
});
const WizardTitle = styled('div', {
    variants: {
        dark: {
            true: {
                '*': {
                    color: '$white',
                },
            },
        },
        is_step_title: {
            true: {
                'div:first-child': {
                    marginBottom: '24px',
                },
            },
        },
        is_main_content_title: {
            true: {
                'div:first-child': {
                    marginBottom: '8px',
                },
            },
        },
    },
});

const WizardBody = styled('div', {
    width: '784px',
    height: '640px',
});

const ContentContainer = styled('div', {
    width: '784px',
    height: '568px',
    position: 'relative',
    boxSizing: 'border-box',
    padding: '48px 24px 24px',
});

const FixedWidthContainer = styled('div', {
    width: '472px',
    height: '568px',
    boxSizing: 'border-box',
    padding: '48px 24px 24px',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
});

const RightPanel = styled('div', {
    width: '312px',
    height: '568px',
    boxSizing: 'border-box',
    padding: '48px 24px 24px',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    borderLeft: '2px solid #F2F3F4',

    variants: {
        dark: {
            true: {
                borderLeft: '2px solid #323738',
            },
        },
    },
});

const Footer = styled('div', {
    width: '784px',
    height: '72px',
    boxSizing: 'border-box',
    padding: '16px 24px',
    borderTop: '2px solid #F2F3F4',
    display: 'flex',
    justifyContent: 'end',
    gap: '8px',

    variants: {
        dark: {
            true: {
                borderTop: '2px solid #323738',
            },
        },
    },
});

const Bullet = styled('div', {
    width: '16px',
    height: '16px',
    border: '2px solid #D6DADB',
    boxSizing: 'border-box',
    borderRadius: '50%',
    background: '$white',

    variants: {
        active: {
            true: {
                border: '2px solid #FF444F',
            },
        },
        complete: {
            true: {
                border: '2px solid #FF444F',
                background: `#FF444F url(${CircularCheckIcon}) no-repeat center`,
            },
        },
        disabled: {
            true: {
                backgroundColor: '#D6D6D6',
                border: '2px solid #D6D6D6',
            },
        },
        dark: {
            true: {
                border: '2px solid #323738',
                backgroundColor: '#0E0E0E',
            },
        },
    },
    compoundVariants: [
        {
            active: true,
            dark: true,
            css: {
                backgroundColor: '#0E0E0E',
                border: '2px solid #FF444F',
            },
        },
        {
            disabled: true,
            dark: true,
            css: {
                backgroundColor: '#3E3E3E',
                border: '2px solid #3E3E3E',
            },
        },
        {
            complete: true,
            dark: true,
            css: {
                border: '2px solid #FF444F',
            },
        },
    ],
    defaultVariants: {
        active: false,
        complete: false,
        disabled: false,
        dark: false,
    },
});

const Before = styled('div', {
    bottom: '20px',
    content: '',
    left: '7px',
    position:
        'absolute' /* positioning must be absolute here, and relative positioning must be applied to the parent */,
    top: '20px',
    borderLeft: '2px solid #D6DADB',

    variants: {
        dark: {
            true: {
                borderLeft: '2px solid #323738',
            },
        },
    },
});

const After = styled('div', {
    borderLeft: '2px solid #FF444F',
    bottom: '20px',
    content: '',
    left: '7px',
    position:
        'absolute' /* positioning must be absolute here, and relative positioning must be applied to the parent */,
    top: '20px',
    transition: 'height 0.3s ease',
});

const CloseIcon = styled('div', {
    position: 'absolute',
    width: '12px',
    height: '12px',
    top: '34px',
    right: '34px',
    cursor: 'pointer',
    zIndex: '1',
    background: `url(${CloseIconLight}) no-repeat center`,

    '&:hover': {
        width: '32px',
        height: '32px',
        right: '24px',
        top: '24px',
        borderRadius: '4px',
        backgroundColor: '#E6E9E9',
    },

    variants: {
        dark: {
            true: {
                background: `url(${CloseIconDark}) no-repeat center`,

                '&:hover': {
                    backgroundColor: '#242828',
                },
            },
        },
    },
});

const Step = styled('div', {
    width: '100%',
    height: '40px',
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    zIndex: '1',
    position: 'relative',

    '*': {
        color: '#333333',
    },

    variants: {
        dark: {
            true: {
                '*': {
                    color: '#C2C2C2',
                },
            },
        },
        disabled: {
            true: {
                '*': {
                    color: '#D6D6D6',
                },
            },
        },
    },

    compoundVariants: [
        {
            disabled: true,
            dark: true,
            css: {
                '*': {
                    color: '#3E3E3E',
                },
            },
        },
    ],
});

type TStepsProps = {
    steps: TItemsState[];
    current_step_index: number;
    complete_steps_indexes?: number[];
    disabled_steps_indexes?: number[];
    dark?: boolean;
    onClick?: (idx: number) => void;
};

const Steps = React.memo(
    ({ steps, current_step_index, complete_steps_indexes, disabled_steps_indexes, dark, onClick }: TStepsProps) => {
        return (
            <div
                style={{
                    position: 'relative',
                }}
            >
                <Before
                    dark={dark}
                    css={{
                        height: `calc(100% * ${steps.length - 1} / ${steps.length})`,
                    }}
                />
                {steps.map((step, idx) => {
                    const active = idx === current_step_index;
                    const disabled = disabled_steps_indexes?.some((i) => i === idx);
                    return (
                        <Step key={idx + 1} onClick={() => onClick?.(idx)} disabled={disabled} dark={dark}>
                            <Bullet
                                active={active}
                                complete={complete_steps_indexes?.some((i) => i === idx)}
                                disabled={disabled}
                                dark={dark}
                            />
                            <label>
                                <Text as="div" type="paragraph-2" bold={active}>
                                    {step.titles.step_title}
                                </Text>
                            </label>
                        </Step>
                    );
                })}
                <After
                    css={{
                        height: `${current_step_index * (100 / steps.length)}%`,
                    }}
                />
            </div>
        );
    },
);

export type TItemsState = {
    titles: {
        main_content_title: string;
        step_title: string;
    };
    main_content?: {
        component: React.FC<{ [key: string]: unknown | undefined }> & React.ReactNode;
        children?: string | (React.FC<{ [key: string]: unknown | undefined }> & React.ReactNode);
        passthrough_props?: string[];
        is_fullwidth?: boolean;
    };
    right_panel_content?: string | (React.FC<{ [key: string]: unknown | undefined }> & React.ReactNode);
    cancel_button_name?: string;
    submit_button_name?: string;
};

export type TWizardProps = {
    dark?: boolean;
    onClose: () => void;
    steps: TItemsState[];
};

const Wizard = ({ dark, onClose, steps }: TWizardProps) => {
    const wizard_title = 'app'; // temporary stub
    const [current_step_index, setCurrentStepIndex] = React.useState<number>(0);
    const [complete_steps_indexes, setCompleteStepsIndexes] = React.useState<number[]>([]);
    const [disabled_steps_indexes, setDisabledStepsIndexes] = React.useState<number[]>([]);
    const next_enabled_step_index = steps
        .map((_step, idx) => idx)
        .find((i) => i > current_step_index && disabled_steps_indexes.every((index) => i !== index));
    const previous_enabled_step_index = steps
        .map((_step, idx) => idx)
        .reverse()
        .find((i) => i < current_step_index && disabled_steps_indexes.every((index) => i !== index));
    const last_complete_step_index = steps
        .map((_step, idx) => (complete_steps_indexes.some((i) => i === idx) ? idx : null))
        .filter((i) => i !== null)
        .pop();

    const nextStep = () => {
        if (Number(next_enabled_step_index) < steps.length) {
            setCurrentStepIndex(Number(next_enabled_step_index));
        }
    };

    const prevStep = () => {
        setCurrentStepIndex(Number(previous_enabled_step_index));
    };

    const handleStepClick = (index: number) => {
        if (
            disabled_steps_indexes.every((i) => i !== index) &&
            (index <= Number(last_complete_step_index) + 1 ||
                (index === Number(next_enabled_step_index) &&
                    complete_steps_indexes.some((i) => i === current_step_index)))
        ) {
            setCurrentStepIndex(index);
        }
    };

    const BodyComponent = steps[current_step_index].main_content?.component;

    const getBody = () => {
        const handleClick = () => {
            setCompleteStepsIndexes([...complete_steps_indexes, current_step_index]);
            // temporary condition to test disabling of the next step
            if (steps[current_step_index].main_content?.children === 'Submit & Disable next step') {
                setDisabledStepsIndexes([...disabled_steps_indexes, current_step_index + 1]);
            }
        };

        return (
            <>
                <WizardTitle dark={dark} is_main_content_title>
                    <Text as="div" type="subtitle-1" bold>
                        {steps[current_step_index].titles.main_content_title}
                    </Text>
                </WizardTitle>
                {BodyComponent && (
                    <BodyComponent onClick={handleClick}>
                        {steps[current_step_index].main_content?.children}
                    </BodyComponent>
                )}
            </>
        );
    };

    return (
        <DarkBackgroundContainer>
            <WizardContainer dark={dark}>
                <LeftPanel dark={dark}>
                    <WizardTitle dark={dark} is_step_title>
                        <Text as="div" type="subtitle-2" bold>
                            Let's get you a new {wizard_title}.
                        </Text>
                    </WizardTitle>
                    <Steps
                        steps={steps}
                        current_step_index={current_step_index}
                        complete_steps_indexes={complete_steps_indexes}
                        dark={dark}
                        disabled_steps_indexes={disabled_steps_indexes}
                        onClick={handleStepClick}
                    />
                </LeftPanel>
                <WizardBody>
                    <ContentContainer>
                        {steps[current_step_index].main_content?.is_fullwidth ? (
                            getBody()
                        ) : (
                            <FixedWidthContainer>{getBody()}</FixedWidthContainer>
                        )}
                        {steps[current_step_index].right_panel_content && (
                            <RightPanel dark={dark}>{steps[current_step_index].right_panel_content}</RightPanel>
                        )}
                    </ContentContainer>
                    <Footer dark={dark}>
                        <Button
                            color="secondary"
                            size="large"
                            onClick={prevStep}
                            disabled={current_step_index < 1}
                            dark={dark}
                        >
                            {steps[current_step_index].cancel_button_name || 'Back'}
                        </Button>
                        <Button
                            size="large"
                            onClick={nextStep}
                            disabled={complete_steps_indexes.every((i) => i !== current_step_index)}
                            dark={dark}
                        >
                            {steps[current_step_index].submit_button_name || 'Next'}
                        </Button>
                    </Footer>
                </WizardBody>
                <CloseIcon dark={dark} onClick={onClose} />
            </WizardContainer>
        </DarkBackgroundContainer>
    );
};

export default Wizard;
