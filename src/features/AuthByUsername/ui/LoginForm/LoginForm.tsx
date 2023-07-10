import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className, isOpen } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input type="text" className={cls.input} label={t('Логин')} autoFocus={!!isOpen} />
            <Input type="text" className={cls.input} label={t('Пароль')} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
