import classNames from 'classnames';
import css from './wallet-card.module.scss';
import LogoPlaceholderLight from '@assets/svg/card/ic-logo-placeholder-light.svg';
import LogoPlaceholderDark from '@assets/svg/card/ic-logo-placeholder-dark.svg';

export const wallet_card_sizes = ['small', 'medium', 'large'];

export interface WalletCardProps {
    balance?: string;
    currency?: string;
    dark?: boolean;
    faded?: boolean;
    logo?: string;
    size?: typeof wallet_card_sizes[number];
    wallet_name?: string;
}

// TODO: active state, selection of logos based on the wallet_name

const WalletCard = ({ balance, currency, dark, faded, logo, size = 'large', wallet_name }: WalletCardProps) => {
    const payment_method_logo = logo || (dark ? LogoPlaceholderDark : LogoPlaceholderLight);

    const getCardInfo = () => {
        if (size !== 'small' && balance) {
            return (
                <div>
                    <div className={css.title}>
                        {wallet_name} {currency} wallet
                    </div>
                    <div className={css.balance}>
                        {balance} {currency}
                    </div>
                </div>
            );
        } else if (size !== 'small' && !balance) {
            return <div className={css.title__large}>{wallet_name} wallet</div>;
        }
    };

    return (
        <div
            className={classNames(
                css[size],
                css.container,
                wallet_name && wallet_name !== '[Name]' ? css[wallet_name.replaceAll(' ', '_').toLowerCase()] : css.background__default,
                dark && css.dark,
                faded && css.faded,
            )}
        >
            <img className={css.logo} src={payment_method_logo} alt={'payment_method_logo'} />
            <div>{getCardInfo()}</div>
        </div>
    );
};

export default WalletCard;
